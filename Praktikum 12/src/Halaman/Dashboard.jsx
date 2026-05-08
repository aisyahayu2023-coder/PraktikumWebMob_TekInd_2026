import React from 'react';
import GrafikProduksi from '../Komponen/GrafikProduksi';
import GrafikDonat from '../Komponen/GrafikDonat';

function Dashboard() {
  // Data tabel ringkasan mesin
  const dataMesin = [
    { id: 1, nama: 'CNC-01', status: 'Running', output: 320, efficiency: 94 },
    { id: 2, nama: 'CNC-02', status: 'Running', output: 310, efficiency: 91 },
    { id: 3, nama: 'Press-01', status: 'Stop', output: 150, efficiency: 78 },
    { id: 4, nama: 'Weld-04', status: 'Maintenance', output: 0, efficiency: 0 },
    { id: 5, nama: 'Assembly-01', status: 'Running', output: 280, efficiency: 88 },
  ];

  return (
    // PERBAIKAN: Tambahkan className dan style dengan media query
    <div 
      className="dashboard-main-content p-4"
      style={{ 
        marginLeft: '250px',
        transition: 'margin-left 0.3s ease'
      }}
    >
      {/* Header dengan User Profile */}
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
        <div>
          <h2>Dashboard Pintar 4.0</h2>
          <p className="text-muted">Selamat datang kembali, Operator</p>
        </div>
        <div className="d-flex align-items-center gap-3">
          <div className="text-end">
            <strong>Aisyah Ayu Salsabila</strong>
            <br />
            <small className="text-muted">23051430001 - Teknik Industri</small>
          </div>
          <div
            className="bg-secondary rounded-circle d-flex align-items-center justify-content-center"
            style={{ width: '50px', height: '50px' }}
          >
            <span className="text-white fs-4">👤</span>
          </div>
        </div>
      </div>

      {/* Ringkasan KPI Cards - sudah responsif dengan row col-md-3 */}
      <div className="row mb-4">
        <div className="col-6 col-md-3 mb-3">
          <div className="card bg-primary text-white">
            <div className="card-body">
              <h6>Total Output Hari Ini</h6>
              <h2>1,060 Unit</h2>
              <small>+2.5% dari kemarin</small>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3 mb-3">
          <div className="card bg-success text-white">
            <div className="card-body">
              <h6>Efficiency Rate</h6>
              <h2>92.4%</h2>
              <small>+1.2% dari kemarin</small>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3 mb-3">
          <div className="card bg-warning text-dark">
            <div className="card-body">
              <h6>Defect Rate</h6>
              <h2>5.8%</h2>
              <small>-0.5% dari kemarin</small>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3 mb-3">
          <div className="card bg-info text-white">
            <div className="card-body">
              <h6>Mesin Aktif</h6>
              <h2>3 / 5</h2>
              <small>60% utilisasi</small>
            </div>
          </div>
        </div>
      </div>

      {/* Grafik: Bar + Donat */}
      <div className="row mb-4">
        <div className="col-12 col-md-7 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <GrafikProduksi />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <GrafikDonat />
            </div>
          </div>
        </div>
      </div>

      {/* Tabel Data Ringkasan Mesin */}
      <div className="card shadow-sm">
        <div className="card-header bg-dark text-white">
          <h5 className="mb-0">Ringkasan Kinerja Mesin</h5>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nama Mesin</th>
                  <th>Status</th>
                  <th>Output (Unit)</th>
                  <th>Efficiency (%)</th>
                </tr>
              </thead>
              <tbody>
                {dataMesin.map((mesin) => (
                  <tr key={mesin.id}>
                    <td>{mesin.id}</td>
                    <td>{mesin.nama}</td>
                    <td>
                      <span
                        className={`badge ${
                          mesin.status === 'Running'
                            ? 'bg-success'
                            : mesin.status === 'Stop'
                            ? 'bg-danger'
                            : 'bg-warning'
                        }`}
                      >
                        {mesin.status}
                      </span>
                    </td>
                    <td>{mesin.output}</td>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <div className="progress flex-grow-1" style={{ height: '8px' }}>
                          <div
                            className="progress-bar bg-success"
                            style={{ width: `${mesin.efficiency}%` }}
                          ></div>
                        </div>
                        <span>{mesin.efficiency}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* CSS Media Query untuk HP - TAMBAHKAN DI DALAM DASHBOARD */}
      <style>{`
        @media (max-width: 768px) {
          .dashboard-main-content {
            margin-left: 0 !important;
            padding: 70px 1rem 1rem 1rem !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Dashboard;