import "./scss-setings/includes.scss";

import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Footer from "./Footer/Footer";
import Preloader from "./Preloader/Preloader";

const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // window.onload = () => {
  //   setLoading(false);
  // };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {
        loading ? (
          <Preloader />
        ) : (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="skills" element={<Skills />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="contact" element={<Contact />} />
              {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
            {location.pathname !== "/" && <Footer />}
          </>
        )
      }
    </>
  );

}

export default App;
