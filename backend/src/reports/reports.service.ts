import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReportsService {
  constructor(private prisma: PrismaService) {}

  async getAdminStats() {
    const totalUsers = await this.prisma.user.count({ where: { role: 'USER' } });
    const totalRooms = await this.prisma.room.count();
    const totalBookings = await this.prisma.booking.count();
    
    const payments = await this.prisma.payment.findMany({
      where: { status: 'COMPLETED' },
      select: { amount: true },
    });
    
    const totalRevenue = payments.reduce((sum, p) => sum + p.amount, 0);

    const reviews = await this.prisma.review.findMany({ select: { rating: true } });
    const avgRating = reviews.length > 0
      ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
      : 0;

    return {
      totalUsers,
      totalRooms,
      totalBookings,
      totalRevenue,
      avgRating,
    };
  }
}
