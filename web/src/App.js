import React from 'react';

import { Router } from 'react-router-dom';
import GlobalStyle from './styles/global';

import history from './services/history';

function App() {
  return (
    <Router history={history}>
      <GlobalStyle />
    </Router>
  );
}

export default App;
