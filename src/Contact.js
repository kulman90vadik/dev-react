import React from 'react';
import { useState } from 'react';
import ContactItemCard from './components/Contact/ContactItemCard';
import contactItemData from './components/Contact/contactItemData';
import backgroundPost from "./images/contact-bg.png";
const Contact = () => {

  const[contactItemCards, setContactItemCards] = useState(contactItemData);

  return (
    <section className="contact section" id="contact">
      <h2 className="visually-hidden">Main contacts</h2>
      <div
        className="contact__container"
        style={{ backgroundImage: `url(${backgroundPost})` }}
      >
        <ul className="contact__list">

          {contactItemCards.map(item => {
            return <ContactItemCard items={item} key={item.id} />
          })}

        </ul>
      </div>
    </section>
  );
};

export default Contact;
