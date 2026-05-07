import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">Sistem Pabrik</Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">Dashboard</Link>
          <Link className="nav-link" to="/inventori">Inventori</Link>
          <Link className="nav-link" to="/laporan-kualitas">Laporan Kualitas</Link>  {/* TAMBAHKAN */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;