import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PaymentsService {
  constructor(private prisma: PrismaService) {}

  async processPayment(bookingId: string, paymentMethod: string) {
    const payment = await this.prisma.payment.findUnique({
      where: { bookingId },
    });

    if (!payment) {
      throw new NotFoundException('Payment record for this booking not found');
    }

    return this.prisma.$transaction(async (tx) => {
      // Update payment
      const updatedPayment = await tx.payment.update({
        where: { bookingId },
        data: {
          status: 'COMPLETED',
          method: paymentMethod,
          transactionId: `TX-${Math.random().toString(36).substring(2, 11).toUpperCase()}`,
        },
      });

      // Update booking status to CONFIRMED
      await tx.booking.update({
        where: { id: bookingId },
        data: { status: 'CONFIRMED' },
      });

      return updatedPayment;
    });
  }

  async getPayments() {
    return this.prisma.payment.findMany({
      include: {
        booking: {
          include: {
            user: { select: { id: true, firstName: true, lastName: true, email: true } },
          },
        },
      },
    });
  }
}
