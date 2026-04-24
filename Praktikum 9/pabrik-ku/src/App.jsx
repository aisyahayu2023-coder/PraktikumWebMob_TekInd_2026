import React from 'react';
import KartuMesin from './Komponen/KartuMesin';
import KartuKaryawan from './Komponen/KartuKaryawan';

function App() {
    return (
        <div className="container mt-4">
            {/* BAGIAN KARTU MESIN */}
            <h1 className="text-center mb-4">Monitoring Lini Produksi A</h1>
            <div className="row">
                <div className="col-md-4">
                    <KartuMesin
                        nama="CNC-Turning-01"
                        status="Running"
                        produksi={150}
                    />
                </div>
                <div className="col-md-4">
                    <KartuMesin
                        nama="CNC-Milling-02"
                        status="Maintenance"
                        produksi={0}
                    />
                </div>
                <div className="col-md-4">
                    <KartuMesin
                        nama="Press-Hydraulic-05"
                        status="Stop"
                        produksi={85}
                    />
                </div>
            </div>

            {/* BAGIAN KARTU KARYAWAN - TAMBAHKAN INI */}
            <h1 className="text-center mb-4 mt-5">Daftar Karyawan</h1>
            <div className="row">
                <div className="col-md-4">
                    <KartuKaryawan
                        nama="Muhammad Amarullah"
                        jabatan="Manager"
                        bagian="Produksi"
                    />
                </div>
                <div className="col-md-4">
                    <KartuKaryawan
                        nama="Aisyah Ayu Salsabila"
                        jabatan="Operator"
                        bagian="Assembly"
                    />
                </div>
                <div className="col-md-4">
                    <KartuKaryawan
                        nama="Wakito lantip Prakoso"
                        jabatan="QC"
                        bagian="Quality Control"
                    />
                </div>
            </div>
        </div>
    );
}

export default App;