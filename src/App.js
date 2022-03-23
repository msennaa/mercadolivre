import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MercadoProvider from './context/MercadoProvider';
import Main from './pages/Main';

export default function App() {
  return (
    <MercadoProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ Main } />
        </Switch>
      </BrowserRouter>
    </MercadoProvider>
  );
}
