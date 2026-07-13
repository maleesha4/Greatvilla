import { PrismaService } from '../prisma/prisma.service';
import { CreateRoomDto } from './dto/create-room.dto';
export declare class RoomsService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllRooms(query: {
        roomTypeId?: string;
        minPrice?: any;
        maxPrice?: any;
        capacity?: any;
        status?: string;
    }): Promise<({
        roomType: {
            id: string;
            name: string;
            description: string | null;
            createdAt: Date;
            updatedAt: Date;
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
            name: string;
            description: string | null;
            createdAt: Date;
            updatedAt: Date;
            icon: string | null;
        }[];
        amenities: {
            id: string;
            name: string;
            description: string | null;
            createdAt: Date;
            updatedAt: Date;
            icon: string | null;
        }[];
    } & {
        id: string;
        name: string;
        description: string | null;
        roomTypeId: string;
        pricePerNight: number;
        capacity: number;
        status: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    getRoomById(id: string): Promise<{
        roomType: {
            id: string;
            name: string;
            description: string | null;
            createdAt: Date;
            updatedAt: Date;
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
            name: string;
            description: string | null;
            createdAt: Date;
            updatedAt: Date;
            icon: string | null;
        }[];
        amenities: {
            id: string;
            name: string;
            description: string | null;
            createdAt: Date;
            updatedAt: Date;
            icon: string | null;
        }[];
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
    } & {
        id: string;
        name: string;
        description: string | null;
        roomTypeId: string;
        pricePerNight: number;
        capacity: number;
        status: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    createRoom(dto: CreateRoomDto): Promise<{
        id: string;
        name: string;
        description: string | null;
        roomTypeId: string;
        pricePerNight: number;
        capacity: number;
        status: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateRoom(id: string, dto: Partial<CreateRoomDto> & {
        status?: string;
    }): Promise<{
        id: string;
        name: string;
        description: string | null;
        roomTypeId: string;
        pricePerNight: number;
        capacity: number;
        status: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteRoom(id: string): Promise<{
        id: string;
        name: string;
        description: string | null;
        roomTypeId: string;
        pricePerNight: number;
        capacity: number;
        status: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getRoomTypes(): Promise<({
        _count: {
            rooms: number;
        };
    } & {
        id: string;
        name: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    createRoomType(data: {
        name: string;
        description?: string;
    }): Promise<{
        id: string;
        name: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getAmenities(): Promise<{
        id: string;
        name: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        icon: string | null;
    }[]>;
    getFacilities(): Promise<{
        id: string;
        name: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        icon: string | null;
    }[]>;
}
