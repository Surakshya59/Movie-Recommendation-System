import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);

  const login = () => {
    setAdminLoggedIn(true);
  };

  const logout = () => {
    setAdminLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ adminLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
