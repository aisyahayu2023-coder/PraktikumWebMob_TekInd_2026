import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function GrafikProduksi() {
  const [dataProduksi, setDataProduksi] = useState([120, 150, 180, 170, 200, 210]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Generate data acak (simulasi API)
    const generateRandomData = () => {
      const randomData = [];
      for (let i = 0; i < 6; i++) {
        randomData.push(Math.floor(Math.random() * (250 - 100 + 1) + 100));
      }
      return randomData;
    };

    // Simulasi fetch API dengan delay 1 detik
    const fetchData = () => {
      setTimeout(() => {
        const newData = generateRandomData();
        setDataProduksi(newData);
        setLoading(false);
      }, 1000);
    };

    fetchData();
  }, []);

  const data = {
    labels: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00'],
    datasets: [
      {
        label: 'Jumlah Produksi (Unit)',
        data: dataProduksi,
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Target',
        data: [150, 150, 150, 150, 150, 150],
        type: 'line',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Grafik Produksi Harian - Lini 1' },
    },
    scales: { y: { beginAtZero: true } },
  };

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Memuat data produksi...</span>
        </div>
        <p className="mt-2">Memuat data produksi...</p>
      </div>
    );
  }

  return <Bar data={data} options={options} />;
}

export default GrafikProduksi;