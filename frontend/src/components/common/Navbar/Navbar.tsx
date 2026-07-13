import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../../../services/auth.service';
import './Navbar.css';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const user = authService.getCurrentUser();

  const handleLogout = () => {
    authService.logout();
    navigate('/');
  };

  return (
    <nav className="navbar glass">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="gradient-text font-bold">GREATVILLA</span>
        </Link>
        
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/rooms" className="navbar-link">Rooms</Link>
          <Link to="/gallery" className="navbar-link">Gallery</Link>
          <Link to="/about" className="navbar-link">About</Link>
          <Link to="/contact" className="navbar-link">Contact</Link>
        </div>

        <div className="navbar-auth">
          {user ? (
            <div className="navbar-user-menu">
              <Link 
                to={user.role === 'ADMIN' ? '/admin/dashboard' : '/dashboard'} 
                className="navbar-link navbar-profile-link"
              >
                Dashboard
              </Link>
              <button onClick={handleLogout} className="btn btn-outline navbar-btn">
                Logout
              </button>
            </div>
          ) : (
            <div className="navbar-auth-buttons">
              <Link to="/login" className="navbar-link">Login</Link>
              <Link to="/register" className="btn btn-primary navbar-btn">Register</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
