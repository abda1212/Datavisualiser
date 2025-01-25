import React, { useContext } from 'react';
import { SalesContext } from '../context/SalesContext';
import '../styles/filter.css'

function SalesFilter() {
  const { setStartDate, setEndDate } = useContext(SalesContext);

  return (
    <div className="filter-container">
      <label>
        Start Date:
        <input
          type="date"
          className="filter-input"
          onChange={(e) => setStartDate(e.target.value)}
        />
      </label>
      <label>
        End Date:
        <input
          type="date"
          className="filter-input"
          onChange={(e) => setEndDate(e.target.value)}
        />
      </label>
    </div>
  );
}

export default SalesFilter;
