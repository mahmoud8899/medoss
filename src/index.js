import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import Routes from './Router'

const root = createRoot(document.getElementById('medoss'));
root.render(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
);