import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Halaman/Dashboard';
import Inventori from './Halaman/Inventori';
import LaporanKualitas from './Halaman/LaporanKualitas';
import NotFound from './Halaman/NotFound';
import Sidebar from './Komponen/Sidebar';

function App() {
  return (
    <div>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/inventori" element={<Inventori />} />
        <Route path="/laporan" element={<LaporanKualitas />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;