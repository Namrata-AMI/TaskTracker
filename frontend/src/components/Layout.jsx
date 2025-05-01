import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #74ebd5, #acb6e5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
      }}
    >
      <div
        className="bg-white p-5 rounded shadow-lg"
        style={{
          width: '100%',
          maxWidth: '500px',
        }}
      >
        <header className="text-center mb-4">
          <h2>Welcome to Task Tracker</h2>
          <p className="text-muted mb-0">Manage your tasks with ease</p>
        </header>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout
