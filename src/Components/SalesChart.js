import React, { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { SalesContext } from '../context/SalesContext';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function SalesChart() {
  const { salesData } = useContext(SalesContext);

  // Example: group by date, sum the amounts
  const grouped = salesData.reduce((acc, sale) => {
    const dateKey = sale.date.split('T')[0]; // e.g., "2025-01-22"
    acc[dateKey] = (acc[dateKey] || 0) + sale.amount;
    return acc;
  }, {});

  const labels = Object.keys(grouped).sort(); // sorted date keys
  const amounts = labels.map((dateKey) => grouped[dateKey]);

  const data = {
    labels,
    datasets: [
      {
        label: 'Sales Amount',
        data: amounts,
        backgroundColor: 'rgba(75, 192, 192, 0.5)', // or a color array
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Sales by Date',
      },
    },
  };

  return <Bar data={data} options={options} />;
}

export default SalesChart;
