import { PrismaService } from '../prisma/prisma.service';
import { CreateBookingDto } from './dto/create-booking.dto';
export declare class BookingsService {
    private prisma;
    constructor(prisma: PrismaService);
    createBooking(userId: string, dto: CreateBookingDto): Promise<{
        bookingRooms: ({
            room: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                description: string | null;
                pricePerNight: number;
                capacity: number;
                status: string;
                roomTypeId: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            roomId: string;
            bookingId: string;
            price: number;
        })[];
        payment: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: string;
            bookingId: string;
            amount: number;
            method: string;
            transactionId: string | null;
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
    }>;
    getAllBookings(role: string, userId: string): Promise<({
        bookingRooms: ({
            room: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                description: string | null;
                pricePerNight: number;
                capacity: number;
                status: string;
                roomTypeId: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            roomId: string;
            bookingId: string;
            price: number;
        })[];
        payment: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: string;
            bookingId: string;
            amount: number;
            method: string;
            transactionId: string | null;
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
    })[]>;
    getBookingById(id: string, role: string, userId: string): Promise<{
        user: {
            id: string;
            email: string;
            firstName: string;
            lastName: string;
        };
        bookingRooms: ({
            room: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                description: string | null;
                pricePerNight: number;
                capacity: number;
                status: string;
                roomTypeId: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            roomId: string;
            bookingId: string;
            price: number;
        })[];
        payment: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: string;
            bookingId: string;
            amount: number;
            method: string;
            transactionId: string | null;
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
    }>;
    updateBookingStatus(id: string, status: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        userId: string;
        checkInDate: Date;
        checkOutDate: Date;
        totalPrice: number;
    }>;
    cancelBooking(id: string, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        userId: string;
        checkInDate: Date;
        checkOutDate: Date;
        totalPrice: number;
    }>;
}
