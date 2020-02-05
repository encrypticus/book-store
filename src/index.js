import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import App from '$c/app';
import ErrorBoundry from '$c/error-boundry';
import BookstoreService from './services/bookstore-service';
import FakeBookstoreService from './services/fake-bookstore-service';
import {BookstoreServiceProvider} from '$c/bookstore-service-context';

import 'bootstrap/scss/bootstrap.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

import store from '$store';

const bookStoreService = new BookstoreService();
const fakeBookstoreService = new FakeBookstoreService();

ReactDom.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookstoreServiceProvider value={fakeBookstoreService}>
        <Router>
          <App/>
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.querySelector('.root')
);
