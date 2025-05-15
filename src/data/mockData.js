import dayjs from 'dayjs';

// Monthly sales (6 months)
export const monthlySales = [
  { month: 'Jan', sales: 12000, revenue: 15000 },
  { month: 'Feb', sales: 17000, revenue: 18000 },
  { month: 'Mar', sales: 14000, revenue: 16000 },
  { month: 'Apr', sales: 20000, revenue: 22000 },
  { month: 'May', sales: 21000, revenue: 25000 },
  { month: 'Jun', sales: 25000, revenue: 27000 },
];

// Daily user activity (30 days)
export const dailyUserActivity = [
  { date: '2024-05-01', users: 320, sessions: 500 },
  { date: '2024-05-02', users: 400, sessions: 600 },
  { date: '2024-05-03', users: 350, sessions: 550 },
  { date: '2024-05-04', users: 420, sessions: 700 },
  { date: '2024-05-05', users: 390, sessions: 650 },
  { date: '2024-05-06', users: 410, sessions: 670 },
  { date: '2024-05-07', users: 430, sessions: 690 },
  { date: '2024-05-08', users: 450, sessions: 710 },
  { date: '2024-05-09', users: 470, sessions: 730 },
  { date: '2024-05-10', users: 490, sessions: 750 },
  { date: '2024-05-11', users: 510, sessions: 770 },
  { date: '2024-05-12', users: 530, sessions: 790 },
  { date: '2024-05-13', users: 550, sessions: 810 },
  { date: '2024-05-14', users: 570, sessions: 830 },
  { date: '2024-05-15', users: 590, sessions: 850 },
  { date: '2024-05-16', users: 610, sessions: 870 },
  { date: '2024-05-17', users: 630, sessions: 890 },
  { date: '2024-05-18', users: 650, sessions: 910 },
  { date: '2024-05-19', users: 670, sessions: 930 },
  { date: '2024-05-20', users: 690, sessions: 950 },
  { date: '2024-05-21', users: 710, sessions: 970 },
  { date: '2024-05-22', users: 730, sessions: 990 },
  { date: '2024-05-23', users: 750, sessions: 1010 },
  { date: '2024-05-24', users: 770, sessions: 1030 },
  { date: '2024-05-25', users: 790, sessions: 1050 },
  { date: '2024-05-26', users: 810, sessions: 1070 },
  { date: '2024-05-27', users: 830, sessions: 1090 },
  { date: '2024-05-28', users: 850, sessions: 1110 },
  { date: '2024-05-29', users: 870, sessions: 1130 },
  { date: '2024-05-30', users: 900, sessions: 1150 },
];

// Sales by category (pie chart)
export const salesByCategory = [
  { category: 'Electronics', value: 35 },
  { category: 'Clothing', value: 25 },
  { category: 'Food', value: 20 },
  { category: 'Books', value: 15 },
  { category: 'Other', value: 5 },
];

// User activity trends (sessions over time, 30 days)
export const userActivityTrends = dailyUserActivity.map(({ date, sessions, users }) => ({
  date,
  sessions,
  users,
}));

// Product inventory for DataTable
export const products = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 1299.99, stock: 25 },
  { id: 2, name: 'T-shirt', category: 'Clothing', price: 19.99, stock: 120 },
  { id: 3, name: 'Coffee', category: 'Food', price: 4.99, stock: 300 },
  { id: 4, name: 'Book', category: 'Books', price: 14.99, stock: 60 },
  { id: 5, name: 'Headphones', category: 'Electronics', price: 199.99, stock: 40 },
  { id: 6, name: 'Sneakers', category: 'Clothing', price: 89.99, stock: 50 },
  { id: 7, name: 'Sandwich', category: 'Food', price: 6.99, stock: 150 },
  { id: 8, name: 'Notebook', category: 'Books', price: 7.99, stock: 80 },
]; 