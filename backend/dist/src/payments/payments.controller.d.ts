import { PaymentsService } from './payments.service';
export declare class PaymentsController {
    private paymentsService;
    constructor(paymentsService: PaymentsService);
    processPayment(bookingId: string, method: string): Promise<{
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
