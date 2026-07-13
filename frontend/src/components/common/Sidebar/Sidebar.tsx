import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { authService } from '../../../services/auth.service';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const user = authService.getCurrentUser();
  const isAdmin = user && user.role === 'ADMIN';

  const links = isAdmin
    ? [
        { path: '/admin/dashboard', label: 'Overview' },
        { path: '/admin/rooms', label: 'Manage Rooms' },
        { path: '/admin/room-types', label: 'Room Types' },
        { path: '/admin/bookings', label: 'All Bookings' },
        { path: '/admin/payments', label: 'Payments Log' },
        { path: '/admin/reviews', label: 'Guest Reviews' },
        { path: '/admin/promotions', label: 'Promotions' },
        { path: '/admin/users', label: 'User Directory' },
        { path: '/admin/reports', label: 'Analytics' },
        { path: '/admin/settings', label: 'Settings' },
      ]
    : [
        { path: '/dashboard', label: 'Dashboard Home' },
        { path: '/profile', label: 'My Profile' },
        { path: '/bookings', label: 'My Reservations' },
        { path: '/bookings/history', label: 'Booking History' },
        { path: '/payments', label: 'Payment Records' },
        { path: '/reviews', label: 'My Reviews' },
        { path: '/wishlist', label: 'Wishlist' },
        { path: '/settings', label: 'Account Settings' },
      ];

  return (
    <aside className="sidebar glass">
      <div className="sidebar-header">
        <span className="sidebar-role">{isAdmin ? 'ADMIN CONSOLE' : 'GUEST PORTAL'}</span>
      </div>
      <ul className="sidebar-menu">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`sidebar-item ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
