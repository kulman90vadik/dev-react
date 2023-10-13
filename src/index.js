import React from 'react';
import ReactDOM from 'react-dom/client';

import './utilities/app';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './styles/fonts.css';
import './styles/global.css';
import './styles/style.min.css';



import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
<App />

  </React.StrictMode>
);

