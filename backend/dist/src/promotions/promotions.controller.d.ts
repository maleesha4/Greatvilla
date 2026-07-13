import { PromotionsService } from './promotions.service';
export declare class PromotionsController {
    private promotionsService;
    constructor(promotionsService: PromotionsService);
    getAllPromotions(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        discountPercent: number;
        startDate: Date;
        endDate: Date;
        isActive: boolean;
    }[]>;
    validateCode(code: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        discountPercent: number;
        startDate: Date;
        endDate: Date;
        isActive: boolean;
    }>;
    createPromotion(data: {
        code: string;
        discountPercent: number;
        startDate: string;
        endDate: string;
        isActive?: boolean;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        discountPercent: number;
        startDate: Date;
        endDate: Date;
        isActive: boolean;
    }>;
    deletePromotion(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        discountPercent: number;
        startDate: Date;
        endDate: Date;
        isActive: boolean;
    }>;
}
