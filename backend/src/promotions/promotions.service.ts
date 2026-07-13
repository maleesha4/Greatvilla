import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PromotionsService {
  constructor(private prisma: PrismaService) {}

  async getAllPromotions() {
    return this.prisma.promotion.findMany();
  }

  async getPromotionByCode(code: string) {
    const promotion = await this.prisma.promotion.findUnique({
      where: { code },
    });

    if (!promotion) {
      throw new NotFoundException('Promotion code not found');
    }

    const now = new Date();
    if (!promotion.isActive || now < promotion.startDate || now > promotion.endDate) {
      throw new BadRequestException('Promotion code is expired or inactive');
    }

    return promotion;
  }

  async createPromotion(data: {
    code: string;
    discountPercent: number;
    startDate: string;
    endDate: string;
    isActive?: boolean;
  }) {
    return this.prisma.promotion.create({
      data: {
        code: data.code,
        discountPercent: Number(data.discountPercent),
        startDate: new Date(data.startDate),
        endDate: new Date(data.endDate),
        isActive: data.isActive ?? true,
      },
    });
  }

  async deletePromotion(id: string) {
    const promo = await this.prisma.promotion.findUnique({ where: { id } });
    if (!promo) throw new NotFoundException('Promotion not found');
    return this.prisma.promotion.delete({ where: { id } });
  }
}
