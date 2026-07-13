import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { authService } from '../services/auth.service';

const ProtectedRoute: React.FC = () => {
  const user = authService.getCurrentUser();
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
