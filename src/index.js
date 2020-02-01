import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import App from '$c/app';
import ErrorBoundry from '$c/error-boundry';
import BookstoreService from './services/bookstore-service';
import {BookstoreServiceProvider} from '$c/bookstore-service-context';

import store from '$store';

const bookStoreService = new BookstoreService();

ReactDom.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookstoreServiceProvider value={bookStoreService}>
        <Router>
          <App/>
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.querySelector('.container')
);
