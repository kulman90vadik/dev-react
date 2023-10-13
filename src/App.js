import { useState, useRef } from "react";

import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
  const [loading, setLoading] = useState(true);
  // let preloaderRef = useRef();

  window.onload = () => {
    setLoading(false);
    // preloaderRef.current.classList.add("preloader--hide");
  };

  return (
    <>
      {loading ? (
        <div id="preloader" className="preloader">
          <div className="preloader__loader">
            <div className="loadingio-spinner-bean-eater-za7vf1w5jfp">
              <div className="ldio-iokivgbuc8i">
                <div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
