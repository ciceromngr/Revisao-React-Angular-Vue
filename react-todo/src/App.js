import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import StyleGlobal from './stylesGlobal';
import { Routes } from './routes'
import { AppProvider } from './hooks'
export default function App() {
  return (
    <>
      <BrowserRouter>
        <AppProvider>
          <Routes />
        </AppProvider>
      </BrowserRouter>
      <StyleGlobal />
    </>
  );
}

// export default App;
