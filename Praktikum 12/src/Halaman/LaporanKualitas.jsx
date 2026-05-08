import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function LaporanKualitas() {
  const [loading, setLoading] = useState(true);
  const [cacatData, setCacatData] = useState([]);

  useEffect(() => {
    const mockCacat = [
      { id: 1, tanggal: "2026-05-01", mesin: "Mesin Press A", jenisCacat: "Retak", jumlah: 12, shift: "Pagi" },
      { id: 2, tanggal: "2026-05-01", mesin: "Mesin Bending B", jenisCacat: "Penyok", jumlah: 5, shift: "Siang" },
      { id: 3, tanggal: "2026-05-02", mesin: "Mesin Las C", jenisCacat: "Las Tidak Rata", jumlah: 8, shift: "Pagi" },
      { id: 4, tanggal: "2026-05-02", mesin: "Mesin Press A", jenisCacat: "Dimensi Kurang", jumlah: 3, shift: "Malam" },
      { id: 5, tanggal: "2026-05-03", mesin: "Mesin Bending B", jenisCacat: "Retak", jumlah: 7, shift: "Pagi" },
    ];

    setTimeout(() => {
      setCacatData(mockCacat);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-5" style={{ marginLeft: '250px' }}>
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Memuat data...</span>
        </div>
        <p>Memuat laporan kualitas...</p>
      </div>
    );
  }

  const totalCacat = cacatData.reduce((sum, item) => sum + item.jumlah, 0);

  return (
    <div className="container mt-4" style={{ marginLeft: '250px', width: 'calc(100% - 250px)' }}>
      <h1>Laporan Kualitas Produksi</h1>
      <Link to="/" className="btn btn-secondary mb-3">Kembali ke Dashboard</Link>

      <div className="card mb-4">
        <div className="card-body bg-danger text-white">
          <h5>Total Cacat</h5>
          <h2>{totalCacat} Unit</h2>
        </div>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
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
              <td>{item.tanggal}</td>
              <td>{item.mesin}</td>
              <td>{item.jenisCacat}</td>
              <td>{item.jumlah}</td>
              <td>{item.shift}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LaporanKualitas;