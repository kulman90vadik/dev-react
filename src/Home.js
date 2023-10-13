import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";

function Home(props) {
  const [vantaEffect, setVantaEffect] = useState(null);
  const [title, setTitle] = useState('home--hide');
  const myRef = useRef(null);

  setTimeout(showTitleHandler, 2000);
  function showTitleHandler() {
    setTitle('home--show');
  }
  
  useEffect(() => {
    
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x131314,
          color1: 0xffd4,
          color2: 0xb8fc,
          colorMode: "lerpGradient",
          birdSize: 0.8,
          wingSpan: 12.0,
          speedLimit: 3.0,
          separation: 32.0,
          alignment: 37.0,
          cohesion: 26.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
    
  }, [vantaEffect]);
  
  return (

        <section className="home" ref={myRef}>
          <div className="home__inner">
            <h1 className={'home-title ' + title}>
              <span>Hi,</span>
              <span>I'm Vadim,</span>
              <span
                className="home-title__position"
                data-title="Front End Developer"
              >
                Front End Developer
              </span>
            </h1>
          </div>
        </section>

  );
}

export default Home;
