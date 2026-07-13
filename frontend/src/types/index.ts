export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role: 'USER' | 'ADMIN';
  createdAt: string;
}

export interface RoomType {
  id: string;
  name: string;
  description?: string;
}

export interface Room {
  id: string;
  name: string;
  description?: string;
  roomTypeId: string;
  roomType: RoomType;
  pricePerNight: number;
  capacity: number;
  status: 'AVAILABLE' | 'BOOKED' | 'MAINTENANCE';
  images?: Gallery[];
  facilities?: Facility[];
  amenities?: Amenity[];
  reviews?: Review[];
}

export interface Booking {
  id: string;
  userId: string;
  user?: User;
  checkInDate: string;
  checkOutDate: string;
  totalPrice: number;
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
  bookingRooms?: BookingRoom[];
  payment?: Payment;
  createdAt: string;
}

export interface BookingRoom {
  id: string;
  bookingId: string;
  roomId: string;
  room?: Room;
  price: number;
}

export interface Payment {
  id: string;
  bookingId: string;
  amount: number;
  status: 'PENDING' | 'COMPLETED' | 'FAILED';
  method: string;
  transactionId?: string;
  createdAt: string;
}

export interface Review {
  id: string;
  userId: string;
  user?: { id: string; firstName: string; lastName: string };
  roomId: string;
  rating: number;
  comment?: string;
  createdAt: string;
}

export interface Gallery {
  id: string;
  url: string;
  caption?: string;
}

export interface Promotion {
  id: string;
  code: string;
  discountPercent: number;
  startDate: string;
  endDate: string;
  isActive: boolean;
}

export interface Facility {
  id: string;
  name: string;
  description?: string;
  icon?: string;
}

export interface Amenity {
  id: string;
  name: string;
  description?: string;
  icon?: string;
}
