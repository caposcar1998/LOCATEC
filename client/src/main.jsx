import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import {Auth0Provider} from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Auth0Provider
        domain={"dev-2u-5y9fz.us.auth0.com"}
        clientId={"8St2S8kY30UAh2iSsWbFSYjbEV9Uj3vg"}
        redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>      
    </BrowserRouter>
  </React.StrictMode>
)
