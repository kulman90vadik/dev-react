
import { Icon } from "../Icon";


const AboutItem = (props) => {
    return (
        <li className="about__item">
            <div className="about__box" aria-hidden="true">
                <div className="about__images"></div>
                <Icon id={props.item.image} className="about__icon" />
            </div>
            <span className="about__subtitle">{props.item.title}</span>
            <p className="about__descr">{props.item.description}</p>
        </li>
    );
}

export default AboutItem;