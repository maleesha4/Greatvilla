import api from './api';

export const reviewService = {
  async createReview(data: { roomId: string; rating: number; comment?: string }) {
    const response = await api.post('/reviews', data);
    return response.data;
  },

  async getReviewsByRoom(roomId: string) {
    const response = await api.get(`/reviews/room/${roomId}`);
    return response.data;
  },

  async deleteReview(id: string) {
    const response = await api.delete(`/reviews/${id}`);
    return response.data;
  },
};
