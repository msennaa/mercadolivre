import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MercadoProvider from './context/MercadoProvider';
import Details from './pages/Details';
import Cart from './pages/Cart';
import Main from './pages/Main';
import Finish from './pages/Finish';
import PageNotFound from './pages/PageNotFound';

export default function App() {
  return (
    <MercadoProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Main } />
          <Route exact path="/cart" component={ Cart } />
          <Route exact path="/done" component={ Finish } />
          <Route exact path="/product/:id" component={ Details } />
          <Route component={ PageNotFound } />
        </Switch>
      </BrowserRouter>
    </MercadoProvider>
  );
}
