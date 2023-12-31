import { Icon } from "../../Icon";

const ContactItemCard = ({items}) => {

  const className = `contact__item contact__item--${items.image}`

  return (
    <li className={className} aria-label="Make a call">
      <svg
        className="contact__circle"
        preserveAspectRatio="xMinYMin meet"
        viewBox="0 0 200 200"
      >
        <circle cx="100" cy="100" r="50" />
      </svg>
      <div className="contact__social">
        <Icon id={items.image} className="contact__icon" />
      </div>
      <a
        className="contact__link"
        href={items.link}
        aria-label="Make a call"
      >
      </a>
    </li>
  );
};

export default ContactItemCard;
