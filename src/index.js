import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PaginationContext } from './context/PaginationContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
