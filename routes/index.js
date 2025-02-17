import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '~/views/home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        {/*Criando PageNotFound: <Route path="/" component={() => <h1>404 - Página não encontrada</h1>} /> */}
      </Switch>
    </BrowserRouter>
  );
}
