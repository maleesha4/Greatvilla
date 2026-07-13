import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBookingDto } from './dto/create-booking.dto';

@Injectable()
export class BookingsService {
  constructor(private prisma: PrismaService) {}

  async createBooking(userId: string, dto: CreateBookingDto) {
    const checkIn = new Date(dto.checkInDate);
    const checkOut = new Date(dto.checkOutDate);

    if (checkOut <= checkIn) {
      throw new BadRequestException('Checkout date must be after check-in date');
    }

    const durationDays = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));

    // Fetch and check all selected rooms
    const rooms = await this.prisma.room.findMany({
      where: { id: { in: dto.roomIds } },
    });

    if (rooms.length !== dto.roomIds.length) {
      throw new NotFoundException('One or more rooms were not found');
    }

    // Check availability (check if rooms have conflicting bookings)
    for (const room of rooms) {
      const conflict = await this.prisma.bookingRoom.findFirst({
        where: {
          roomId: room.id,
          booking: {
            status: { in: ['PENDING', 'CONFIRMED'] },
            OR: [
              {
                checkInDate: { lte: checkIn },
                checkOutDate: { gt: checkIn },
              },
              {
                checkInDate: { lt: checkOut },
                checkOutDate: { gte: checkOut },
              },
              {
                checkInDate: { gte: checkIn },
                checkOutDate: { lte: checkOut },
              },
            ],
          },
        },
      });

      if (conflict) {
        throw new BadRequestException(`Room "${room.name}" is already booked for these dates`);
      }
    }

    // Calculate total price
    let totalPrice = 0;
    for (const room of rooms) {
      totalPrice += room.pricePerNight * durationDays;
    }

    // Perform database operations in a transaction
    return this.prisma.$transaction(async (tx) => {
      const booking = await tx.booking.create({
        data: {
          userId,
          checkInDate: checkIn,
          checkOutDate: checkOut,
          totalPrice,
          status: 'PENDING',
        },
      });

      // Create BookingRooms
      const bookingRoomData = rooms.map((room) => ({
        bookingId: booking.id,
        roomId: room.id,
        price: room.pricePerNight,
      }));

      await tx.bookingRoom.createMany({
        data: bookingRoomData,
      });

      // Update room statuses to BOOKED
      await tx.room.updateMany({
        where: { id: { in: dto.roomIds } },
        data: { status: 'BOOKED' },
      });

      // Create a default payment request shell
      await tx.payment.create({
        data: {
          bookingId: booking.id,
          amount: totalPrice,
          status: 'PENDING',
          method: 'CREDIT_CARD',
        },
      });

      return tx.booking.findUnique({
        where: { id: booking.id },
        include: {
          bookingRooms: {
            include: { room: true },
          },
          payment: true,
        },
      });
    });
  }

  async getAllBookings(role: string, userId: string) {
    if (role === 'ADMIN') {
      return this.prisma.booking.findMany({
        include: {
          user: {
            select: { id: true, firstName: true, lastName: true, email: true },
          },
          bookingRooms: {
            include: { room: true },
          },
          payment: true,
        },
      });
    }

    return this.prisma.booking.findMany({
      where: { userId },
      include: {
        bookingRooms: {
          include: { room: true },
        },
        payment: true,
      },
    });
  }

  async getBookingById(id: string, role: string, userId: string) {
    const booking = await this.prisma.booking.findUnique({
      where: { id },
      include: {
        user: {
          select: { id: true, firstName: true, lastName: true, email: true },
        },
        bookingRooms: {
          include: { room: true },
        },
        payment: true,
      },
    });

    if (!booking) {
      throw new NotFoundException('Booking not found');
    }

    if (role !== 'ADMIN' && booking.userId !== userId) {
      throw new BadRequestException('Access denied to this booking');
    }

    return booking;
  }

  async updateBookingStatus(id: string, status: string) {
    const booking = await this.prisma.booking.findUnique({
      where: { id },
      include: { bookingRooms: true },
    });

    if (!booking) {
      throw new NotFoundException('Booking not found');
    }

    const updated = await this.prisma.booking.update({
      where: { id },
      data: { status },
    });

    // If cancelled, make rooms available again
    if (status === 'CANCELLED') {
      const roomIds = booking.bookingRooms.map((br) => br.roomId);
      await this.prisma.room.updateMany({
        where: { id: { in: roomIds } },
        data: { status: 'AVAILABLE' },
      });

      // Update payment status if exists
      await this.prisma.payment.updateMany({
        where: { bookingId: id },
        data: { status: 'FAILED' },
      });
    }

    return updated;
  }

  async cancelBooking(id: string, userId: string) {
    const booking = await this.prisma.booking.findUnique({
      where: { id },
      include: { bookingRooms: true },
    });

    if (!booking) {
      throw new NotFoundException('Booking not found');
    }

    if (booking.userId !== userId) {
      throw new BadRequestException('Access denied');
    }

    if (booking.status !== 'PENDING') {
      throw new BadRequestException('Only pending bookings can be cancelled');
    }

    return this.updateBookingStatus(id, 'CANCELLED');
  }
}
