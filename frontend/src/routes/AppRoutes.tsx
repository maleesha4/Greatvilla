import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import PublicLayout from '../layouts/PublicLayout';
import UserLayout from '../layouts/UserLayout';
import AdminLayout from '../layouts/AdminLayout';

// Guards
import ProtectedRoute from './ProtectedRoute';
import AdminRoute from './AdminRoute';

// Public Pages
import Home from '../pages/public/Home';
import About from '../pages/public/About';
import Rooms from '../pages/public/Rooms';
import RoomDetails from '../pages/public/RoomDetails';
import Contact from '../pages/public/Contact';
import Gallery from '../pages/public/Gallery';
import Login from '../pages/public/Login';
import Register from '../pages/public/Register';
import ForgotPassword from '../pages/public/ForgotPassword';

// User Pages
import UserDashboard from '../pages/user/Dashboard';
import Profile from '../pages/user/Profile';
import Bookings from '../pages/user/Bookings';
import BookingHistory from '../pages/user/BookingHistory';
import Payments from '../pages/user/Payments';
import Reviews from '../pages/user/Reviews';
import Wishlist from '../pages/user/Wishlist';
import Settings from '../pages/user/Settings';

// Admin Pages
import AdminDashboard from '../pages/admin/Dashboard';
import AdminUsers from '../pages/admin/Users';
import AdminRooms from '../pages/admin/Rooms';
import AdminRoomTypes from '../pages/admin/RoomTypes';
import AdminBookings from '../pages/admin/Bookings';
import AdminPayments from '../pages/admin/Payments';
import AdminReviews from '../pages/admin/Reviews';
import AdminPromotions from '../pages/admin/Promotions';
import AdminReports from '../pages/admin/Reports';
import AdminGallery from '../pages/admin/Gallery';
import AdminSettings from '../pages/admin/Settings';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:id" element={<RoomDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Route>

      {/* User Dashboard Routes (Protected) */}
      <Route element={<ProtectedRoute />}>
        <Route element={<UserLayout />}>
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/bookings/history" element={<BookingHistory />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Route>

      {/* Admin Dashboard Routes (Protected + Admin Role) */}
      <Route element={<ProtectedRoute />}>
        <Route element={<AdminRoute />}>
          <Route element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/rooms" element={<AdminRooms />} />
            <Route path="/admin/room-types" element={<AdminRoomTypes />} />
            <Route path="/admin/bookings" element={<AdminBookings />} />
            <Route path="/admin/payments" element={<AdminPayments />} />
            <Route path="/admin/reviews" element={<AdminReviews />} />
            <Route path="/admin/promotions" element={<AdminPromotions />} />
            <Route path="/admin/reports" element={<AdminReports />} />
            <Route path="/admin/gallery" element={<AdminGallery />} />
            <Route path="/admin/settings" element={<AdminSettings />} />
          </Route>
        </Route>
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
