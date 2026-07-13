import { PrismaService } from '../prisma/prisma.service';
export declare class PaymentsService {
    private prisma;
    constructor(prisma: PrismaService);
    processPayment(bookingId: string, paymentMethod: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        bookingId: string;
        amount: number;
        method: string;
        transactionId: string | null;
    }>;
    getPayments(): Promise<({
        booking: {
            user: {
                id: string;
                email: string;
                firstName: string;
                lastName: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: string;
            userId: string;
            checkInDate: Date;
            checkOutDate: Date;
            totalPrice: number;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        bookingId: string;
        amount: number;
        method: string;
        transactionId: string | null;
    })[]>;
}
