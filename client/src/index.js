import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore'
import { PersistGate } from 'redux-persist/integration/react'

const {store, persistor} = configureStore()


// In development, the frontend and backend servers are separate so we need to
// call a route to add the CSRF token cookie to the frontend only in development
if (process.env.NODE_ENV !== 'production') {
  const getCSRFToken = () => {
    return fetch("/api/csrf/token");
  };

  getCSRFToken();
}


ReactDOM.render(
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
  <App />
</PersistGate>
</Provider>,
  document.getElementById('root')
);
