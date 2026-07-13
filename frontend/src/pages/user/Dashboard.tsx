import React from 'react';
import { Link } from 'react-router-dom';
import { authService } from '../../services/auth.service';

const Dashboard: React.FC = () => {
  const user = authService.getCurrentUser();

  return (
    <div>
      <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '10px' }}>
        Welcome back, <span style={{ color: 'var(--primary)' }}>{user?.firstName || 'Guest'}</span>!
      </h2>
      <p style={{ color: 'var(--text-gray)', marginBottom: '30px' }}>
        Here is an overview of your Greatvilla experience and reservation states.
      </p>

      {/* Grid of stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        {[
          { label: 'Active Bookings', value: '1', link: '/bookings' },
          { label: 'Wishlist Items', value: '4', link: '/wishlist' },
          { label: 'My Reviews', value: '0', link: '/reviews' },
        ].map((stat, idx) => (
          <div key={idx} className="glass" style={{ padding: '25px', borderRadius: '10px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-gray)', textTransform: 'uppercase', fontWeight: 'bold' }}>{stat.label}</span>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary)', margin: '10px 0' }}>{stat.value}</div>
            <Link to={stat.link} style={{ fontSize: '0.85rem', color: 'var(--text-light)', borderBottom: '1px solid var(--primary)', paddingBottom: '2px' }}>
              View Details →
            </Link>
          </div>
        ))}
      </div>

      <div className="glass" style={{ padding: '30px', borderRadius: '12px' }}>
        <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '15px' }}>Need assistance?</h3>
        <p style={{ color: 'var(--text-gray)', lineHeight: '1.6', marginBottom: '20px', fontSize: '0.95rem' }}>
          Our 24/7 dedicated butler service and wellness experts are always ready to organize custom services or resolve any questions regarding your reservation.
        </p>
        <Link to="/contact" className="btn btn-outline" style={{ padding: '10px 20px' }}>
          Contact Support
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
