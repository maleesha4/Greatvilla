import { GalleryService } from './gallery.service';
export declare class GalleryController {
    private galleryService;
    constructor(galleryService: GalleryService);
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
