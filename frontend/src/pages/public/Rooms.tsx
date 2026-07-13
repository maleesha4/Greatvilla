import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { roomService } from '../../services/room.service';
import { Room } from '../../types';

const Rooms: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const data = await roomService.getRooms();
        setRooms(data);
      } catch (err: any) {
        setError('Failed to fetch rooms');
      } finally {
        setLoading(false);
      }
    };
    fetchRooms();
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <p style={{ color: 'var(--primary)', fontSize: '1.2rem' }}>Loading our premium suites...</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <span style={{ color: 'var(--primary)', fontSize: '0.85rem', letterSpacing: '0.15em', fontWeight: 'bold', textTransform: 'uppercase' }}>Accommodations</span>
        <h1 style={{ fontSize: '3rem', marginTop: '10px' }} className="gradient-text">Our Luxury Suites</h1>
        <p style={{ color: 'var(--text-gray)', marginTop: '10px' }}>Select the perfect accommodation for your luxury getaway.</p>
      </div>

      {error && (
        <div style={{ textAlign: 'center', color: '#fca5a5', background: 'rgba(239,68,68,0.1)', padding: '15px', borderRadius: '6px', marginBottom: '30px' }}>
          {error}
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
        {rooms.map((room) => (
          <div key={room.id} className="glass hover-scale" style={{ borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: '220px', background: 'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url("/images/rooms/room1.jpg") center/cover no-repeat' }}></div>
            <div style={{ padding: '25px', display: 'flex', flexDirection: 'column', flex: '1' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                <h3 style={{ fontSize: '1.4rem', color: '#fff' }}>{room.name}</h3>
                <span style={{
                  fontSize: '0.75rem',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontWeight: 'bold',
                  background: room.status === 'AVAILABLE' ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)',
                  color: room.status === 'AVAILABLE' ? '#34d399' : '#fca5a5'
                }}>
                  {room.status}
                </span>
              </div>
              <p style={{ color: 'var(--text-gray)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '20px', flex: '1' }}>
                {room.description || 'A premium luxury room matching state-of-the-art architectures.'}
              </p>
              
              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontSize: '1.4rem', fontWeight: 'bold', color: 'var(--primary)' }}>${room.pricePerNight}</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}> / night</span>
                </div>
                <Link to={`/rooms/${room.id}`} className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
