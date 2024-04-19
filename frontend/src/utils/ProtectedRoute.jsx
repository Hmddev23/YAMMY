
import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import useAuthContext from '../hooks/useAuthContext';


const ProtectedRoute = ({ children }) => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null)
    {
      navigate('/login', { replace: true });
    }
    console.log(user);
  }, [navigate, user]);

  return children;

  /* let auth = { 'token': true };
  console.log(auth);

  if (auth === undefined) {
    // or loading indicator/spinner/etc
    return null;
  }

  return (
    auth.token ? children : <Navigate to='/' />
  ); */
}


export default ProtectedRoute;