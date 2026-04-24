import React from 'react';

function KartuKaryawan({ nama, jabatan, bagian }) {
    // Warna badge berdasarkan jabatan
    let badgeColor = 'bg-secondary';
    if (jabatan === 'Manager') badgeColor = 'bg-primary';
    if (jabatan === 'Operator') badgeColor = 'bg-success';
    if (jabatan === 'QC') badgeColor = 'bg-info';

    return (
        <div className="card shadow-sm p-3 mb-3">
            <div className="card-body">
                <h5 className="card-title">{nama}</h5>
                <span className={`badge ${badgeColor}`}>{jabatan}</span>
                <hr />
                <p>Bagian: <strong>{bagian}</strong></p>
            </div>
        </div>
    );
}

export default KartuKaryawan;