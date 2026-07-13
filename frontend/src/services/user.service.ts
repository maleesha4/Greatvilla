import api from './api';

export const userService = {
  async getProfile() {
    const response = await api.get('/users/profile');
    return response.data;
  },

  async updateProfile(data: any) {
    const response = await api.put('/users/profile', data);
    return response.data;
  },

  async getUsers() {
    const response = await api.get('/users');
    return response.data;
  },
};
