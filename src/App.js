import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bar" element={<Dashboard />} />
        <Route path="/line" element={<Dashboard />} />
        <Route path="/pie" element={<Dashboard />} />
        <Route path="/area" element={<Dashboard />} />
        <Route path="/table" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
