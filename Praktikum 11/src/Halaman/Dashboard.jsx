import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body text-center">
              <h1>Dashboard Utama Fabrik</h1>
              <h1>Aisyah Ayu Salsabila 23051430001</h1>
              <p>Selamat datang di sistem monitoring terpadu.</p>
              <hr />
              <div className="d-flex gap-3 justify-content-center">
                <Link to="/inventori" className="btn btn-primary">
                  Lihat Inventori
                </Link>
                <Link to="/laporan-kualitas" className="btn btn-danger">
                  Lihat Laporan Kualitas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;