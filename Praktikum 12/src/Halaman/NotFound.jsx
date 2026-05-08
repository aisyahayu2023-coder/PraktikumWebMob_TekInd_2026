import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="text-center mt-5" style={{ marginLeft: '250px' }}>
      <h1 className="display-1">404</h1>
      <p>Halaman tidak ditemukan</p>
      <Link to="/" className="btn btn-dark">Kembali ke Dashboard</Link>
    </div>
  );
}

export default NotFound;