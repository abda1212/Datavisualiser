import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const SalesContext = createContext();

export function SalesProvider({ children }) {
  const [salesData, setSalesData] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    // In a real app, you might include query params based on start/end date
    axios
      .get('http://localhost:5211/api/sales')
      .then((res) => {
        setSalesData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  // Potentially filter data client-side:
  const filteredData = React.useMemo(() => {
    if (!startDate && !endDate) return salesData;

    // If you have dates in your raw data, parse them and filter
    return salesData.filter((sale) => {
      const saleDate = new Date(sale.date);
      const isAfterStart = startDate ? saleDate >= new Date(startDate) : true;
      const isBeforeEnd = endDate ? saleDate <= new Date(endDate) : true;
      return isAfterStart && isBeforeEnd;
    });
  }, [salesData, startDate, endDate]);

  return (
    <SalesContext.Provider
      value={{
        salesData: filteredData,
        setStartDate,
        setEndDate,
      }}
    >
      {children}
    </SalesContext.Provider>
  );
}
