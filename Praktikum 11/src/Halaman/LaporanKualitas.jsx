import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function LaporanKualitas() {
  const [loading, setLoading] = useState(true);
  const [cacatData, setCacatData] = useState([]);

  useEffect(() => {
    const mockCacat = [
      { id: 1, tanggal: "2026-05-05", mesin: "Mesin Krill", jenisCacat: "Putus benang", jumlah: 12, shift: "Pagi" },
      { id: 2, tanggal: "2026-05-05", mesin: "Mesin Jahit", jenisCacat: "Berlubang terlewat", jumlah: 5, shift: "Siang" },
      { id: 3, tanggal: "2026-05-05", mesin: "Mesin Obras", jenisCacat: "Kain terbuka", jumlah: 8, shift: "Pagi" },
      { id: 4, tanggal: "2026-05-05", mesin: "Mesin Krill", jenisCacat: "Putus Benang", jumlah: 3, shift: "Malam" },
      { id: 5, tanggal: "2026-05-06", mesin: "Mesin Jahit Kecil", jenisCacat: "Jahit terbuka terlewat", jumlah: 7, shift: "Pagi" },
      { id: 6, tanggal: "2026-05-06", mesin: "Mesin Obras", jenisCacat: "Benang mudah putus", jumlah: 4, shift: "Siang" },
      { id: 7, tanggal: "2026-05-07", mesin: "Mesin Krill", jenisCacat: "Tidak rapat", jumlah: 6, shift: "Pagi" },
      { id: 8, tanggal: "2026-05-07", mesin: "Mesin Pembuat Kancing", jenisCacat: "Penyok", jumlah: 9, shift: "Malam" },
    ];

    // Simulasi loading
    setTimeout(() => {
      setCacatData(mockCacat);
      setLoading(false);
    }, 500);
  }, []);

  // Hitung total cacat
  const totalCacat = cacatData.reduce((sum, item) => sum + item.jumlah, 0);

  // Hitung cacat per jenis
  const cacatPerJenis = {};
  cacatData.forEach(item => {
    if (cacatPerJenis[item.jenisCacat]) {
      cacatPerJenis[item.jenisCacat] += item.jumlah;
    } else {
      cacatPerJenis[item.jenisCacat] = item.jumlah;
    }
  });

  if (loading) {
    return (
      <div className="text-center mt-5">
        <h3>Memuat data laporan kualitas...</h3>
        <div className="spinner-border text-danger mt-3" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Laporan Kualitas Produksi</h1>
      <p className="text-muted mb-4">Data cacat produksi periode 5-7 Mei 2026</p>

      {/* Ringkasan Card */}
      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card text-white bg-danger">
            <div className="card-body">
              <h5 className="card-title">Total Cacat</h5>
              <h2 className="display-4">{totalCacat}</h2>
              <p className="card-text">Unit</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-warning">
            <div className="card-body">
              <h5 className="card-title">Jenis Cacat</h5>
              <h2 className="display-4">{Object.keys(cacatPerJenis).length}</h2>
              <p className="card-text">Kategori</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-info">
            <div className="card-body">
              <h5 className="card-title">Hari Produksi</h5>
              <h2 className="display-4">4</h2>
              <p className="card-text">Hari</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabel Data Cacat */}
      <div className="card">
        <div className="card-header bg-dark text-white">
          <h5 className="mb-0">Detail Cacat per Produksi</h5>
        </div>
        <div className="card-body">
          <table className="table table-striped table-bordered">
            <thead className="table-danger">
              <tr>
                <th>ID</th>
                <th>Tanggal</th>
                <th>Mesin</th>
                <th>Jenis Cacat</th>
                <th>Jumlah</th>
                <th>Shift</th>
              </tr>
            </thead>
            <tbody>
              {cacatData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.tanggal}</td>
                  <td>{item.mesin}</td>
                  <td>
                    <span className="badge bg-danger">{item.jenisCacat}</span>
                  </td>
                  <td>
                    <span className="badge bg-dark">{item.jumlah} unit</span>
                  </td>
                  <td>{item.shift}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Ringkasan per Jenis Cacat */}
      <div className="card mt-4">
        <div className="card-header bg-secondary text-white">
          <h5 className="mb-0">Ringkasan per Jenis Cacat</h5>
        </div>
        <div className="card-body">
          <table className="table table-sm">
            <thead>
              <tr>
                <th>Jenis Cacat</th>
                <th>Total Unit</th>
                <th>Persentase</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(cacatPerJenis).map(([jenis, jumlah]) => (
                <tr key={jenis}>
                  <td>{jenis}</td>
                  <td>{jumlah}</td>
                  <td>
                    <div className="progress">
                      <div 
                        className="progress-bar bg-danger" 
                        style={{ width: `${(jumlah / totalCacat) * 100}%` }}
                      >
                        {((jumlah / totalCacat) * 100).toFixed(1)}%
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-3 mb-4">
        <Link to="/" className="btn btn-secondary">← Kembali ke Dashboard</Link>
      </div>
    </div>
  );
}

export default LaporanKualitas;