import { PrismaService } from '../prisma/prisma.service';
export declare class PromotionsService {
    private prisma;
    constructor(prisma: PrismaService);
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
    getPromotionByCode(code: string): Promise<{
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
