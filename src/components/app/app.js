import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {HomePage, CartPage} from '$p';

import styles from './app.scss';

const App = () => {
  return (
    <Switch>
      <Route
        path="/"
        component={HomePage}
        exact
      />

      <Route
        path="/cart"
        component={CartPage}
      />
    </Switch>
  );
};

export default App;
