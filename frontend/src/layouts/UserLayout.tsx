import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar/Navbar';
import Sidebar from '../components/common/Sidebar/Sidebar';

const UserLayout: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div style={{ display: 'flex', flex: '1', paddingTop: '70px' }}>
        <Sidebar />
        <main style={{ flex: '1', marginLeft: '250px', padding: '30px' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserLayout;
