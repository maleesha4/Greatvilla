import { PrismaService } from '../prisma/prisma.service';
export declare class GalleryService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllGalleryItems(): Promise<({
        room: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            description: string | null;
            pricePerNight: number;
            capacity: number;
            status: string;
            roomTypeId: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        url: string;
        caption: string | null;
        roomId: string | null;
    })[]>;
    addGalleryItem(data: {
        url: string;
        caption?: string;
        roomId?: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        url: string;
        caption: string | null;
        roomId: string | null;
    }>;
    deleteGalleryItem(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        url: string;
        caption: string | null;
        roomId: string | null;
    }>;
}
