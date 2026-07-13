import { Controller, Get, Post, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { PromotionsService } from './promotions.service';
import { AuthGuard } from '../common/guards/auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/types/roles.enum';

@Controller('promotions')
export class PromotionsController {
  constructor(private promotionsService: PromotionsService) {}

  @Get()
  getAllPromotions() {
    return this.promotionsService.getAllPromotions();
  }

  @Get('validate')
  validateCode(@Query('code') code: string) {
    return this.promotionsService.getPromotionByCode(code);
  }

  @Post()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  createPromotion(
    @Body()
    data: {
      code: string;
      discountPercent: number;
      startDate: string;
      endDate: string;
      isActive?: boolean;
    },
  ) {
    return this.promotionsService.createPromotion(data);
  }

  @Delete(':id')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  deletePromotion(@Param('id') id: string) {
    return this.promotionsService.deletePromotion(id);
  }
}
