import { useState, useRef } from "react";

import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";

import Preloader from "./Preloader";

const App = () => {
  const [loading, setLoading] = useState(true);

  window.onload = () => {
    setLoading(false);
    // preloaderRef.current.classList.add("preloader--hide");
  };



  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <Home />
          <About />
          <Skills />
          <Portfolio />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
