import api from './api';

export const paymentService = {
  async processPayment(bookingId: string, method: string) {
    const response = await api.post('/payments/process', { bookingId, method });
    return response.data;
  },

  async getPayments() {
    const response = await api.get('/payments');
    return response.data;
  },
};
