import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "mobx-react";
import VehicleMakeStore from './common/stores/VehicleMakeStore';
const root = ReactDOM.createRoot(document.getElementById('root'));
const makeStore = new VehicleMakeStore();
root.render(
  <Provider makeStore={makeStore}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>  

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
