import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function GrafikDonat() {
  const data = {
    labels: ['Scratch (Goresan)', 'Dent (Penyok)', 'Lainnya'],
    datasets: [
      {
        label: 'Proporsi Cacat',
        data: [50, 30, 20],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Proporsi Jenis Cacat Produksi',
      },
    },
  };

  return <Doughnut data={data} options={options} />;
}

export default GrafikDonat;