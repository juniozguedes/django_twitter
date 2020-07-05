import React, { useContext, createContext, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@Twitter_clone:token');
    const user = localStorage.getItem('@Twitter_clone:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }
  });
  const history = useHistory();
  const signIn = useCallback(async ({ username, password }) => {
    const response = await api.post('signin', {
      username,
      password,
    });
    const { token, user } = response.data;
    localStorage.setItem('@Twitter_clone:token', token);
    localStorage.setItem('@Twitter_clone:user', JSON.stringify(user));
    setData({ user, token });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Twitter_clone:token');
    localStorage.removeItem('@Twitter_clone:user');

    setData();
    history.push('/login');
  }, []);

  return (
    <AuthContext.Provider value={{ userData: data, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
export { AuthProvider, useAuth };
