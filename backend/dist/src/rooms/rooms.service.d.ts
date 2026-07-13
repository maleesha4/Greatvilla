import { PrismaService } from '../prisma/prisma.service';
import { CreateRoomDto } from './dto/create-room.dto';
export declare class RoomsService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllRooms(query: {
        roomTypeId?: string;
        minPrice?: number;
        maxPrice?: number;
        capacity?: number;
        status?: string;
    }): Promise<({
        roomType: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            description: string | null;
        };
        images: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            url: string;
            caption: string | null;
            roomId: string | null;
        }[];
        facilities: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            description: string | null;
            icon: string | null;
        }[];
        amenities: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            description: string | null;
            icon: string | null;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        pricePerNight: number;
        capacity: number;
        status: string;
        roomTypeId: string;
    })[]>;
    getRoomById(id: string): Promise<{
        reviews: ({
            user: {
                id: string;
                firstName: string;
                lastName: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            roomId: string;
            userId: string;
            rating: number;
            comment: string | null;
        })[];
        roomType: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            description: string | null;
        };
        images: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            url: string;
            caption: string | null;
            roomId: string | null;
        }[];
        facilities: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            description: string | null;
            icon: string | null;
        }[];
        amenities: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            description: string | null;
            icon: string | null;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        pricePerNight: number;
        capacity: number;
        status: string;
        roomTypeId: string;
    }>;
    createRoom(dto: CreateRoomDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        pricePerNight: number;
        capacity: number;
        status: string;
        roomTypeId: string;
    }>;
    updateRoom(id: string, dto: Partial<CreateRoomDto> & {
        status?: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        pricePerNight: number;
        capacity: number;
        status: string;
        roomTypeId: string;
    }>;
    deleteRoom(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        pricePerNight: number;
        capacity: number;
        status: string;
        roomTypeId: string;
    }>;
    getRoomTypes(): Promise<({
        _count: {
            rooms: number;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
    })[]>;
    createRoomType(data: {
        name: string;
        description?: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
    }>;
    getAmenities(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        icon: string | null;
    }[]>;
    getFacilities(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        icon: string | null;
    }[]>;
}
