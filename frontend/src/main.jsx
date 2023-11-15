import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { SnackbarProvider } from 'notistack';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from "react-redux"

import { store } from './store.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <SnackbarProvider>
      <Provider store={store}>
      
      
      <App />
      
     
      </Provider> 
    </SnackbarProvider>
  
);
