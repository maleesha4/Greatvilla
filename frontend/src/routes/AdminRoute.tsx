import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { authService } from '../services/auth.service';

const AdminRoute: React.FC = () => {
  const user = authService.getCurrentUser();
  const isAdmin = user && user.role === 'ADMIN';
  return isAdmin ? <Outlet /> : <Navigate to="/dashboard" replace />;
};

export default AdminRoute;
