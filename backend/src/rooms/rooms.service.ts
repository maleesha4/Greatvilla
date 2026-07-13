import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRoomDto } from './dto/create-room.dto';

@Injectable()
export class RoomsService {
  constructor(private prisma: PrismaService) {}

  async getAllRooms(query: {
    roomTypeId?: string;
    minPrice?: number;
    maxPrice?: number;
    capacity?: number;
    status?: string;
  }) {
    const where: any = {};

    if (query.roomTypeId) where.roomTypeId = query.roomTypeId;
    if (query.capacity) where.capacity = { gte: Number(query.capacity) };
    if (query.status) where.status = query.status;

    if (query.minPrice !== undefined || query.maxPrice !== undefined) {
      where.pricePerNight = {};
      if (query.minPrice !== undefined) where.pricePerNight.gte = Number(query.minPrice);
      if (query.maxPrice !== undefined) where.pricePerNight.lte = Number(query.maxPrice);
    }

    return this.prisma.room.findMany({
      where,
      include: {
        roomType: true,
        images: true,
        facilities: true,
        amenities: true,
      },
    });
  }

  async getRoomById(id: string) {
    const room = await this.prisma.room.findUnique({
      where: { id },
      include: {
        roomType: true,
        images: true,
        facilities: true,
        amenities: true,
        reviews: {
          include: {
            user: {
              select: {
                id: true,
                firstName: true,
                lastName: true,
              },
            },
          },
        },
      },
    });

    if (!room) {
      throw new NotFoundException('Room not found');
    }

    return room;
  }

  async createRoom(dto: CreateRoomDto) {
    return this.prisma.room.create({
      data: dto,
    });
  }

  async updateRoom(id: string, dto: Partial<CreateRoomDto> & { status?: string }) {
    await this.getRoomById(id); // ensure exists
    return this.prisma.room.update({
      where: { id },
      data: dto,
    });
  }

  async deleteRoom(id: string) {
    await this.getRoomById(id); // ensure exists
    return this.prisma.room.delete({
      where: { id },
    });
  }

  // Room Types
  async getRoomTypes() {
    return this.prisma.roomType.findMany({
      include: {
        _count: {
          select: { rooms: true },
        },
      },
    });
  }

  async createRoomType(data: { name: string; description?: string }) {
    return this.prisma.roomType.create({
      data,
    });
  }

  // Amenities & Facilities
  async getAmenities() {
    return this.prisma.amenity.findMany();
  }

  async getFacilities() {
    return this.prisma.facility.findMany();
  }
}
