import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "@fontsource/bilbo-swash-caps";
import "@fontsource/hind-siliguri";
import "@fontsource/rubik";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
