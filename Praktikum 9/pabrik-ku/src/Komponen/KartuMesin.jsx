import React from 'react';

function KartuMesin({ nama, status, produksi }) {
    let badgeColor = 'bg-secondary';
    if (status === 'Running') badgeColor = 'bg-success';
    if (status === 'Stop') badgeColor = 'bg-danger';
    if (status === 'Maintenance') badgeColor = 'bg-warning';

    return (
        <div className="card shadow-sm p-3 mb-3">
            <div className="card-body">
                <h5 className="card-title">{nama}</h5>
                <span className={`badge ${badgeColor}`}>{status}</span>
                <hr />
                <p>Produksi Saat Ini: <strong>{produksi}</strong> Unit</p>
            </div>
        </div>
    );
}

// TAMBAHKAN INI UNTUK DEFAULT PROPS
KartuMesin.defaultProps = {
    produksi: 0
};

export default KartuMesin;