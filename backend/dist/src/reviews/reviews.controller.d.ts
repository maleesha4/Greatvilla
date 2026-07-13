import { ReviewsService } from './reviews.service';
export declare class ReviewsController {
    private reviewsService;
    constructor(reviewsService: ReviewsService);
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
