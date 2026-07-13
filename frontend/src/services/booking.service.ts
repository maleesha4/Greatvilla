import api from './api';

export const bookingService = {
  async createBooking(data: any) {
    const response = await api.post('/bookings', data);
    return response.data;
  },

  async getBookings() {
    const response = await api.get('/bookings');
    return response.data;
  },

  async getBookingById(id: string) {
    const response = await api.get(`/bookings/${id}`);
    return response.data;
  },

  async updateBookingStatus(id: string, status: string) {
    const response = await api.put(`/bookings/${id}/status`, { status });
    return response.data;
  },

  async cancelBooking(id: string) {
    const response = await api.put(`/bookings/${id}/cancel`);
    return response.data;
  },
};
