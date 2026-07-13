import React, { useEffect, useState } from 'react';
import api from '../../services/api';

interface Stats {
  totalUsers: number;
  totalRooms: number;
  totalBookings: number;
  totalRevenue: number;
  avgRating: number;
}

const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await api.get('/reports/stats');
        setStats(response.data);
      } catch (err: any) {
        setError('Failed to load admin statistics');
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
        <p style={{ color: 'var(--primary)', fontSize: '1.2rem' }}>Loading analytical reports...</p>
      </div>
    );
  }

  return (
    <div>
      <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '10px' }}>Admin Overview Console</h2>
      <p style={{ color: 'var(--text-gray)', marginBottom: '30px' }}>
        Real-time metrics, transactions, and reservation metrics.
      </p>

      {error && (
        <div style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#fca5a5', padding: '15px', borderRadius: '6px', marginBottom: '30px' }}>
          {error}
        </div>
      )}

      {stats && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          {[
            { label: 'Total Customers', value: stats.totalUsers },
            { label: 'Total Rooms', value: stats.totalRooms },
            { label: 'Total Bookings', value: stats.totalBookings },
            { label: 'Gross Revenue', value: `$${stats.totalRevenue.toLocaleString()}` },
            { label: 'Average Ratings', value: `${stats.avgRating.toFixed(1)} / 5` },
          ].map((stat, idx) => (
            <div key={idx} className="glass" style={{ padding: '25px', borderRadius: '10px' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-gray)', textTransform: 'uppercase', fontWeight: 'bold' }}>{stat.label}</span>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary)', margin: '10px 0' }}>{stat.value}</div>
            </div>
          ))}
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
        <div className="glass" style={{ padding: '35px', borderRadius: '12px' }}>
          <h3 style={{ color: '#fff', marginBottom: '15px' }}>Hotel Status Indicators</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-gray)', fontSize: '0.95rem' }}>
            <li>• Database Synced: <span style={{ color: '#34d399' }}>dev.db (SQLite)</span></li>
            <li>• Inbound APIs: <span style={{ color: '#34d399' }}>Active (/api prefix)</span></li>
            <li>• Authentication: <span style={{ color: '#34d399' }}>JWT Bearer</span></li>
          </ul>
        </div>
        <div className="glass" style={{ padding: '35px', borderRadius: '12px' }}>
          <h3 style={{ color: '#fff', marginBottom: '15px' }}>Recent Tasks</h3>
          <p style={{ color: 'var(--text-gray)', lineHeight: '1.6', fontSize: '0.95rem' }}>
            Configure promos, inspect reviews, and modify room details straight from the admin sidebar layout option tabs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
