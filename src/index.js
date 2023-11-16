import App from './App';
import React from 'react';
import './Styles/indexx.css'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <GoogleOAuthProvider clientId="812183624950-mhehi3ns6aks5e8540dki56jqkf13pcd.apps.googleusercontent.com">
            <App />
        </GoogleOAuthProvider>
    </BrowserRouter>
);


