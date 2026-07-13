import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { roomService } from '../../services/room.service';
import { bookingService } from '../../services/booking.service';
import { authService } from '../../services/auth.service';
import { Room } from '../../types';

const RoomDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [room, setRoom] = useState<Room | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingError, setBookingError] = useState('');
  const user = authService.getCurrentUser();

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        if (id) {
          const data = await roomService.getRoomById(id);
          setRoom(data);
        }
      } catch (err: any) {
        setError('Failed to load room details');
      } finally {
        setLoading(false);
      }
    };
    fetchRoom();
  }, [id]);

  const handleBook = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      navigate('/login');
      return;
    }
    if (!checkInDate || !checkOutDate) {
      setBookingError('Please select both dates');
      return;
    }
    setBookingLoading(true);
    setBookingError('');
    try {
      if (id) {
        await bookingService.createBooking({
          checkInDate,
          checkOutDate,
          roomIds: [id],
        });
        navigate('/bookings');
      }
    } catch (err: any) {
      setBookingError(err?.error || 'Failed to create booking');
    } finally {
      setBookingLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <p style={{ color: 'var(--primary)', fontSize: '1.2rem' }}>Loading suite details...</p>
      </div>
    );
  }

  if (error || !room) {
    return (
      <div style={{ padding: '60px 20px', textAlign: 'center' }}>
        <p style={{ color: '#fca5a5' }}>{error || 'Suite not found'}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' }}>
        
        {/* Left Side: Room details */}
        <div>
          <div style={{ height: '400px', background: 'url("/images/rooms/room2.jpg") center/cover no-repeat', borderRadius: '12px', marginBottom: '30px' }}></div>
          <h1 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '15px' }}>{room.name}</h1>
          <p style={{ color: 'var(--text-gray)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px' }}>
            {room.description || 'Enjoy our presidential stay offering maximum comfort and custom-tailored private amenities.'}
          </p>

          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.4rem', marginBottom: '15px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>Features & Amenities</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              <div style={{ marginBottom: '10px' }}>
                <strong style={{ color: '#fff' }}>Capacity:</strong> {room.capacity} Guests max
              </div>
              <div style={{ marginBottom: '10px' }}>
                <strong style={{ color: '#fff' }}>Room Type:</strong> {room.roomType?.name}
              </div>
              {room.amenities && room.amenities.map(a => (
                <div key={a.id} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: 'var(--primary)' }}>✦</span> {a.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Booking widget */}
        <div>
          <div className="glass" style={{ padding: '30px', borderRadius: '12px', position: 'sticky', top: '100px' }}>
            <h3 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '5px' }}>Reserve Suite</h3>
            <div style={{ marginBottom: '20px' }}>
              <span style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)' }}>${room.pricePerNight}</span>
              <span style={{ color: 'var(--text-gray)' }}> / night</span>
            </div>

            {bookingError && (
              <div style={{ background: 'rgba(239, 68, 68, 0.1)', borderLeft: '4px solid #ef4444', padding: '10px', color: '#fca5a5', borderRadius: '4px', marginBottom: '15px', fontSize: '0.85rem' }}>
                {bookingError}
              </div>
            )}

            <form onSubmit={handleBook} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '0.85rem', color: 'var(--text-gray)', fontWeight: 'bold' }}>Check-In Date</label>
                <input
                  type="date"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  required
                  style={{ padding: '10px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)', borderRadius: '6px', color: '#fff', outline: 'none' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '0.85rem', color: 'var(--text-gray)', fontWeight: 'bold' }}>Check-Out Date</label>
                <input
                  type="date"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  required
                  style={{ padding: '10px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)', borderRadius: '6px', color: '#fff', outline: 'none' }}
                />
              </div>

              <button
                type="submit"
                disabled={bookingLoading || room.status !== 'AVAILABLE'}
                className="btn btn-primary"
                style={{ width: '100%', padding: '12px', marginTop: '10px' }}
              >
                {bookingLoading ? 'Reserving...' : room.status === 'AVAILABLE' ? 'Book Suite' : 'Unavailable'}
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RoomDetails;
