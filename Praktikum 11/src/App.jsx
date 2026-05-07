import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Halaman/Dashboard';
import Inventori from './Halaman/Inventori';
import DetailItem from './Halaman/DetailItem';
import LaporanKualitas from './Halaman/LaporanKualitas'; 
import NotFound from './Halaman/NotFound';
import Navbar from './Komponen/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/inventori" element={<Inventori />} />
        <Route path="/inventori/:id" element={<DetailItem />} />
        <Route path="/laporan-kualitas" element={<LaporanKualitas />} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;