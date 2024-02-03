import React from 'react';
import { useUser } from './userContext.js';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  const { state } = useUser();
  const isAdmin = state.user?.userName === 'admin';

  if (!isAdmin) {
    return <Navigate to="/login" />;
  }

  return element;
};

export default PrivateRoute;
