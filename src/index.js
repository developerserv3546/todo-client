import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:5000/';

const options = {
    position: 'top right',
    timeout: 5000,
    offset: '30px',
    transition: 'fade'
}

ReactDOM.render(
  <React.StrictMode>
      <AlertProvider template={AlertTemplate} {...options}>
    <App />
      </AlertProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
