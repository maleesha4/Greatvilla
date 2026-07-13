"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let BookingsService = class BookingsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createBooking(userId, dto) {
        const checkIn = new Date(dto.checkInDate);
        const checkOut = new Date(dto.checkOutDate);
        if (checkOut <= checkIn) {
            throw new common_1.BadRequestException('Checkout date must be after check-in date');
        }
        const durationDays = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
        const rooms = await this.prisma.room.findMany({
            where: { id: { in: dto.roomIds } },
        });
        if (rooms.length !== dto.roomIds.length) {
            throw new common_1.NotFoundException('One or more rooms were not found');
        }
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
                throw new common_1.BadRequestException(`Room "${room.name}" is already booked for these dates`);
            }
        }
        let totalPrice = 0;
        for (const room of rooms) {
            totalPrice += room.pricePerNight * durationDays;
        }
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
            const bookingRoomData = rooms.map((room) => ({
                bookingId: booking.id,
                roomId: room.id,
                price: room.pricePerNight,
            }));
            await tx.bookingRoom.createMany({
                data: bookingRoomData,
            });
            await tx.room.updateMany({
                where: { id: { in: dto.roomIds } },
                data: { status: 'BOOKED' },
            });
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
    async getAllBookings(role, userId) {
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
    async getBookingById(id, role, userId) {
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
            throw new common_1.NotFoundException('Booking not found');
        }
        if (role !== 'ADMIN' && booking.userId !== userId) {
            throw new common_1.BadRequestException('Access denied to this booking');
        }
        return booking;
    }
    async updateBookingStatus(id, status) {
        const booking = await this.prisma.booking.findUnique({
            where: { id },
            include: { bookingRooms: true },
        });
        if (!booking) {
            throw new common_1.NotFoundException('Booking not found');
        }
        const updated = await this.prisma.booking.update({
            where: { id },
            data: { status },
        });
        if (status === 'CANCELLED') {
            const roomIds = booking.bookingRooms.map((br) => br.roomId);
            await this.prisma.room.updateMany({
                where: { id: { in: roomIds } },
                data: { status: 'AVAILABLE' },
            });
            await this.prisma.payment.updateMany({
                where: { bookingId: id },
                data: { status: 'FAILED' },
            });
        }
        return updated;
    }
    async cancelBooking(id, userId) {
        const booking = await this.prisma.booking.findUnique({
            where: { id },
            include: { bookingRooms: true },
        });
        if (!booking) {
            throw new common_1.NotFoundException('Booking not found');
        }
        if (booking.userId !== userId) {
            throw new common_1.BadRequestException('Access denied');
        }
        if (booking.status !== 'PENDING') {
            throw new common_1.BadRequestException('Only pending bookings can be cancelled');
        }
        return this.updateBookingStatus(id, 'CANCELLED');
    }
};
exports.BookingsService = BookingsService;
exports.BookingsService = BookingsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BookingsService);
//# sourceMappingURL=bookings.service.js.map