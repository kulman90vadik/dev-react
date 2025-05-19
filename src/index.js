import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import '../node_modules/font-awesome/css/font-awesome.min.css';

import RippleEffect from './RippleEffect/RippleEffect';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Router>
        <App />
        <RippleEffect />
    </Router>

);

