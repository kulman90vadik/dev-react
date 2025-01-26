import ContactItemCard from './ContactItemCard';
import contactItemData from './contactItemData';
import backgroundPost from "../../images/contact-bg.png";
import './contact.scss';

const Contact = () => {

  return (
    // <main className="main">
      <section className="contact section" id="contact">
        <h1 className="visually-hidden">Main contacts</h1>
        <div
          className="contact__container"
          style={{ backgroundImage: `url(${backgroundPost})` }}
        >
          <ul className="contact__list">

            {contactItemData.map(item => {
              return <ContactItemCard items={item} key={item.id} />
            })}

          </ul>
        </div>
      </section>
    // </main>
  );
};

export default Contact;
