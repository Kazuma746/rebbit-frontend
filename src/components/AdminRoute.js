import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const AdminRoute = ({ children }) => {
  const { isAuthenticated, user } = useContext(AuthContext);

  if (!isAuthenticated || (user && user.role !== 'admin')) {
    return <Navigate to="/" />;
  }

  return children;
};

export default AdminRoute;