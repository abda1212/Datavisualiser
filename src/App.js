import React from 'react';
import { SalesProvider } from './context/SalesContext';
import SalesFilter from './Components/SalesFilter';
import SalesChart from './Components/SalesChart';
import './styles/dashboard.css'

function App() {
  return (
    <SalesProvider>
      {/* 2. Replace inline style with the .dashboard-container class */}
      <div className="dashboard-container">
        {/* 3. Give your heading the .dashboard-title class */}
        <h1 className="dashboard-title">My Sales Dashboard</h1>

        <SalesFilter />
        <SalesChart />
      </div>
    </SalesProvider>
  );
}

export default App;
