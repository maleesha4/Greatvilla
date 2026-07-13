import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { AuthGuard } from '../common/guards/auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/types/roles.enum';

@Controller('payments')
@UseGuards(AuthGuard, RolesGuard)
export class PaymentsController {
  constructor(private paymentsService: PaymentsService) {}

  @Post('process')
  processPayment(@Body('bookingId') bookingId: string, @Body('method') method: string) {
    return this.paymentsService.processPayment(bookingId, method || 'CREDIT_CARD');
  }

  @Get()
  @Roles(Role.ADMIN)
  getPayments() {
    return this.paymentsService.getPayments();
  }
}
