import { ReportsService } from './reports.service';
export declare class ReportsController {
    private reportsService;
    constructor(reportsService: ReportsService);
    getAdminStats(): Promise<{
        totalUsers: number;
        totalRooms: number;
        totalBookings: number;
        totalRevenue: number;
        avgRating: number;
    }>;
}
