import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import '../node_modules/font-awesome/css/font-awesome.min.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Router>
        <App />
    </Router>

);

