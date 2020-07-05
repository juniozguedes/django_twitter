import React from 'react';

import { AuthProvider } from './Auth';

function AppProvider({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}

export default AppProvider;
