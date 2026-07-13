import { PrismaService } from '../prisma/prisma.service';
export declare class ReportsService {
    private prisma;
    constructor(prisma: PrismaService);
    getAdminStats(): Promise<{
        totalUsers: number;
        totalRooms: number;
        totalBookings: number;
        totalRevenue: number;
        avgRating: number;
    }>;
}
