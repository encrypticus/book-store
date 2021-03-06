import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {HomePage, CartPage} from '$p';
import ShopHeader from '$c/shop-header';
import ShoppingCartTable from '$c/shopping-cart-table';

const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader numItems={5} total={210}/>

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

      <ShoppingCartTable/>
    </main>
  );
};

export default App;
