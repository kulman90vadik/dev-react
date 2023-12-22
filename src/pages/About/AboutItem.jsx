
import { Icon } from "../../Icon";


const AboutItem = ({item}) => {
    return (
        <li className="about__item">
            <div className="about__box" aria-hidden="true">
                <div className="about__images"></div>
                <Icon id={item.image} className="about__icon" />
            </div>
            <span className="about__subtitle">{item.title}</span>
            <p className="about__descr">{item.description}</p>
        </li>
    );
}

export default AboutItem;