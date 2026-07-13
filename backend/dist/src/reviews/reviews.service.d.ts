import { PrismaService } from '../prisma/prisma.service';
export declare class ReviewsService {
    private prisma;
    constructor(prisma: PrismaService);
    createReview(userId: string, data: {
        roomId: string;
        rating: number;
        comment?: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        roomId: string;
        userId: string;
        rating: number;
        comment: string | null;
    }>;
    getReviewsByRoom(roomId: string): Promise<({
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
    })[]>;
    deleteReview(id: string, userId: string, role: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        roomId: string;
        userId: string;
        rating: number;
        comment: string | null;
    }>;
}
