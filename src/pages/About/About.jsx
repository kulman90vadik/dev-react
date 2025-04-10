
import background from '../../images/my-photo.jpg';
import './about.scss';
import AboutItem from './AboutItem';
import aboutItemData from './aboutItemData';

const About = () => {

  return (
    <section className="about section" id="about">

      <h1 className="visually-hidden">Brief information about me</h1>
      <div className="about__container">

        <ul className="about__list">
          {aboutItemData.map(item => <AboutItem item={item} key={item.id} />)}
        </ul>

        <div className="about__inner">
          <div className="about__photo" style={{ backgroundImage: `url(${background})` }}></div>
          <div className="about__content">
            <h3 className="about__head">It's me.</h3>
            <div className="about__text">
              <p>
                I'm a Front-End Developer.
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