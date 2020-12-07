import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals'; 
import Router from "./Routes/router";


ReactDOM.render(
  <React.StrictMode>
    <Router/>
    
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
