


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserContextProvider } from './context/UserContext';
import { DataContextProvider } from './context/MainContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
  <DataContextProvider>
  <UserContextProvider>
    <App />
  </UserContextProvider>
  </DataContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);