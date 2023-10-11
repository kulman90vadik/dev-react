import React from 'react';
import ReactDOM from 'react-dom/client';

import './utilities/app';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './styles/fonts.css';
import './styles/global.css';
import './styles/style.min.css';

import Header from './Header';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Home />
    <About />
    <Skills />
    <Portfolio />
    <Contact />
    <Footer />
  </React.StrictMode>
);

