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
exports.RoomsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let RoomsService = class RoomsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllRooms(query) {
        const where = {};
        if (query.roomTypeId && query.roomTypeId !== 'undefined' && query.roomTypeId !== '') {
            where.roomTypeId = query.roomTypeId;
        }
        if (query.status && query.status !== 'undefined' && query.status !== '') {
            where.status = query.status;
        }
        if (query.capacity) {
            const cap = Number(query.capacity);
            if (!isNaN(cap)) {
                where.capacity = { gte: cap };
            }
        }
        const min = query.minPrice ? Number(query.minPrice) : NaN;
        const max = query.maxPrice ? Number(query.maxPrice) : NaN;
        if (!isNaN(min) || !isNaN(max)) {
            where.pricePerNight = {};
            if (!isNaN(min))
                where.pricePerNight.gte = min;
            if (!isNaN(max))
                where.pricePerNight.lte = max;
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
    async getRoomById(id) {
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
            throw new common_1.NotFoundException('Room not found');
        }
        return room;
    }
    async createRoom(dto) {
        return this.prisma.room.create({
            data: dto,
        });
    }
    async updateRoom(id, dto) {
        await this.getRoomById(id);
        return this.prisma.room.update({
            where: { id },
            data: dto,
        });
    }
    async deleteRoom(id) {
        await this.getRoomById(id);
        return this.prisma.room.delete({
            where: { id },
        });
    }
    async getRoomTypes() {
        return this.prisma.roomType.findMany({
            include: {
                _count: {
                    select: { rooms: true },
                },
            },
        });
    }
    async createRoomType(data) {
        return this.prisma.roomType.create({
            data,
        });
    }
    async getAmenities() {
        return this.prisma.amenity.findMany();
    }
    async getFacilities() {
        return this.prisma.facility.findMany();
    }
};
exports.RoomsService = RoomsService;
exports.RoomsService = RoomsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RoomsService);
//# sourceMappingURL=rooms.service.js.map