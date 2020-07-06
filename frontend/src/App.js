import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/global';

import AppProvider from './hooks';

import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <AppProvider>
        <Routes />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
