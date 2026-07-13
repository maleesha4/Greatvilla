import { Controller, Get, Post, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { AuthGuard } from '../common/guards/auth.guard';
import { GetUser } from '../common/decorators/get-user.decorator';

@Controller('reviews')
export class ReviewsController {
  constructor(private reviewsService: ReviewsService) {}

  @Post()
  @UseGuards(AuthGuard)
  createReview(
    @GetUser('id') userId: string,
    @Body() data: { roomId: string; rating: number; comment?: string },
  ) {
    return this.reviewsService.createReview(userId, data);
  }

  @Get('room/:roomId')
  getReviewsByRoom(@Param('roomId') roomId: string) {
    return this.reviewsService.getReviewsByRoom(roomId);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  deleteReview(
    @Param('id') id: string,
    @GetUser('id') userId: string,
    @GetUser('role') role: string,
  ) {
    return this.reviewsService.deleteReview(id, userId, role);
  }
}
