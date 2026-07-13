import { Controller, Get, Post, Put, Body, Param, UseGuards } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { AuthGuard } from '../common/guards/auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { GetUser } from '../common/decorators/get-user.decorator';
import { Role } from '../common/types/roles.enum';

@Controller('bookings')
@UseGuards(AuthGuard, RolesGuard)
export class BookingsController {
  constructor(private bookingsService: BookingsService) {}

  @Post()
  createBooking(@GetUser('id') userId: string, @Body() dto: CreateBookingDto) {
    return this.bookingsService.createBooking(userId, dto);
  }

  @Get()
  getAllBookings(@GetUser('role') role: string, @GetUser('id') userId: string) {
    return this.bookingsService.getAllBookings(role, userId);
  }

  @Get(':id')
  getBookingById(
    @Param('id') id: string,
    @GetUser('role') role: string,
    @GetUser('id') userId: string,
  ) {
    return this.bookingsService.getBookingById(id, role, userId);
  }

  @Put(':id/status')
  @Roles(Role.ADMIN)
  updateBookingStatus(@Param('id') id: string, @Body('status') status: string) {
    return this.bookingsService.updateBookingStatus(id, status);
  }

  @Put(':id/cancel')
  cancelBooking(@Param('id') id: string, @GetUser('id') userId: string) {
    return this.bookingsService.cancelBooking(id, userId);
  }
}
