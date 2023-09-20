import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','Aug', 'Sep', 'Oct',"Nov","Dec"];

export const data = {
  labels,
  datasets: [
    {
      label: 'Net Working Capacity',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'yellow',
      backgroundColor: 'yellow',
    },
    {
      label: 'Gross Working Capacity',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: '#3d5a80',
      backgroundColor: '#3d5a80',
    },
  ],
};

export function LineChart() {
    return <Line options={options} data={data} />;
  }
