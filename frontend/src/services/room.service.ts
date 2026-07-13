import api from './api';

export const roomService = {
  async getRooms(params?: any) {
    const response = await api.get('/rooms', { params });
    return response.data;
  },

  async getRoomById(id: string) {
    const response = await api.get(`/rooms/${id}`);
    return response.data;
  },

  async getRoomTypes() {
    const response = await api.get('/rooms/types');
    return response.data;
  },

  async getAmenities() {
    const response = await api.get('/rooms/amenities');
    return response.data;
  },

  async getFacilities() {
    const response = await api.get('/rooms/facilities');
    return response.data;
  },

  async createRoom(data: any) {
    const response = await api.post('/rooms', data);
    return response.data;
  },

  async updateRoom(id: string, data: any) {
    const response = await api.put(`/rooms/${id}`, data);
    return response.data;
  },

  async deleteRoom(id: string) {
    const response = await api.delete(`/rooms/${id}`);
    return response.data;
  },
};
