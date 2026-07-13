import React from 'react';

const Bookings: React.FC = () => {
  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div className="glass" style={{ padding: '40px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
        <h1 style={{ color: 'var(--primary)', marginBottom: '20px', fontSize: '2.5rem' }}>Bookings</h1>
        <p style={{ color: 'var(--text-gray)', fontSize: '1.1rem', lineHeight: '1.8' }}>
          Welcome to the Bookings page. This section provides a detailed view of bookings configurations for Greatvilla Luxury Hotel Management.
        </p>
        <div style={{ marginTop: '30px', padding: '20px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', borderLeft: '4px solid var(--primary)' }}>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 'bold' }}>Status: Fully operational</span>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
