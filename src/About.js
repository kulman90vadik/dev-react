import React from 'react';
import { useState } from 'react';
import background from './images/my-photo.jpg';
import AboutItem from './components/About/AboutItem';
import aboutItemData from './components/About/aboutItemData';


// import './styles/app.css';

const About = () => {

  const[aboutItems, setAboutItems] = useState(aboutItemData);


  return (
    <section className="about section" id="about">
      <h2 className="visually-hidden">Brief information about me</h2>
      <div className="about__container">
        
        <ul className="about__list">
          {aboutItems.map(item => <AboutItem item={item} key={item.id}/>)}
        </ul>

        <div className="about__inner">
          <div className="about__photo" style={{backgroundImage: `url(${background})`}}></div>
          <div className="about__content">
            <h3 className="about__head">It's me.</h3>
            <div className="about__text">
              <p>
                I'm a Junior Front-End Developer.
                I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;