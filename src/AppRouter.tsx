import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthComponent from './AuthComponent';
import ProductList from './components/ProductList';
import Dashboard from './components/Dashboard';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthComponent />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
