import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReviewsService {
  constructor(private prisma: PrismaService) {}

  async createReview(userId: string, data: { roomId: string; rating: number; comment?: string }) {
    return this.prisma.review.create({
      data: {
        userId,
        roomId: data.roomId,
        rating: Number(data.rating),
        comment: data.comment,
      },
    });
  }

  async getReviewsByRoom(roomId: string) {
    return this.prisma.review.findMany({
      where: { roomId },
      include: {
        user: { select: { id: true, firstName: true, lastName: true } },
      },
    });
  }

  async deleteReview(id: string, userId: string, role: string) {
    const review = await this.prisma.review.findUnique({
      where: { id },
    });

    if (!review) {
      throw new NotFoundException('Review not found');
    }

    if (role !== 'ADMIN' && review.userId !== userId) {
      throw new NotFoundException('Access denied');
    }

    return this.prisma.review.delete({
      where: { id },
    });
  }
}
