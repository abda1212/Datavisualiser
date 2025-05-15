import React from 'react';
import {
  BarChart3,
  LineChart,
  PieChart,
  AreaChart,
  Moon,
  Sun
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ isDarkMode, toggleTheme }) => {
  const navItems = [
    { icon: BarChart3, label: 'Bar Chart', type: 'bar' },
    { icon: LineChart, label: 'Line Chart', type: 'line' },
    { icon: PieChart, label: 'Pie Chart', type: 'pie' },
    { icon: AreaChart, label: 'Area Chart', type: 'area' },
  ];

  const location = useLocation();
  const currentType = location.pathname.replace('/', '');

  return (
    <div className="h-screen w-64 bg-card border-r border-border flex flex-col">
      <div className="p-4 border-b border-border">
        <h1 className="text-xl font-bold">DataVisualizer</h1>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.type}>
              <Link
                to={`/${item.type}`}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors w-full ${currentType === item.type ? 'bg-accent font-semibold' : 'hover:bg-accent'}`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-border">
        <button
          onClick={toggleTheme}
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors w-full"
        >
          {isDarkMode ? (
            <>
              <Sun className="w-5 h-5" />
              <span>Light Mode</span>
            </>
          ) : (
            <>
              <Moon className="w-5 h-5" />
              <span>Dark Mode</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar; 