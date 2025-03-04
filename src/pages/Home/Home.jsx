import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import './home.scss';

function Home() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  
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

  // const items = [
  //   { id: 0, text: "React." },
  //   { id: 1, text: "Javascript." },
  //   { id: 2, text: "Frontend." },
  //   { id: 3, text: "Backend." },
  // ];

  
  return (
          <section className="home" ref={myRef}>
            <h1 className="home__title">
              <div className="home__name">Hi, I'm Vadim!</div>
              <div className="home__block">

              <p>
              I love 
              </p>
              <span className="home__text home__text--react">React.</span>
              <span className="home__text home__text--javascript">Javascript.</span>
              <span className="home__text home__text--frontend">Frontend.</span>
              <span className="home__text home__text--backend">Backend.</span>
              </div>
             
              {/* {items.map((item) => (
                <span
                  key={item.id}
                  style={{ "--i": item.id }}
                  data-text={item.text}
                >
                  {item.text}
                </span>
              ))} */}
            </h1>
          </section>
  );
}

export default Home;
