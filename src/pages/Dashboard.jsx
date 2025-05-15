import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Sidebar from '../Components/layout/Sidebar';
import Header from '../Components/layout/Header';
import BarChart from '../Components/charts/BarChart';
import LineChart from '../Components/charts/LineChart';
import PieChart from '../Components/charts/PieChart';
import AreaChart from '../Components/charts/AreaChart';
import { salesByCategory } from '../data/mockData';

const Dashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  // Determine chart type from the path
  const path = location.pathname.replace('/', '');
  const chartType = ['bar', 'line', 'pie', 'area'].includes(path) ? path : 'pie';

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="flex">
        <Sidebar isDarkMode={isDarkMode} toggleTheme={toggleTheme} chartType={chartType} setChartType={() => {}} />
        <div className="flex-1">
          <Header />
          <main className="p-6">
            <motion.div
              key={chartType}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              {chartType === 'bar' && <BarChart data={salesByCategory} />}
              {chartType === 'line' && <LineChart data={salesByCategory} />}
              {chartType === 'pie' && <PieChart data={salesByCategory} />}
              {chartType === 'area' && <AreaChart data={salesByCategory} />}
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 