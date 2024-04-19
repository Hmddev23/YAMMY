
import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children, isLogedIn }) => {

  const [user, setUser] = useState(isLogedIn ? { id:1 } : null);

  const register = () => { return 'register'; }
  const login = () => { return 'login'; }
  const resetPassword = () => { return 'reset password'; }

  let contextData = {
    user: user,
    register: register,
    login: login,
    resetPassword: resetPassword
  }

  return (
    <AuthContext.Provider value={contextData}>
      { children }
    </AuthContext.Provider>
  );

  /* const [loading, setLoading] = useState(false);
  const history = useNavigate();

  let contextData = {
    user: 'user',
  }

  return (
    <AuthContext.Provider value={contextData}>
      { children }
    </AuthContext.Provider>
  ); */
}