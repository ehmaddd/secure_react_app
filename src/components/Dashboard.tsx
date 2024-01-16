import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearUser } from '../redux/actions/authActions';
import ProductList from './ProductList';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearUser());
    navigate('/');
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      <h2>Dashboard</h2>
      <ProductList />
    </div>
  );
};

export default Dashboard;
