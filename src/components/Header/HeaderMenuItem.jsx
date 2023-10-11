import { useRef } from 'react';

const HeaderMenuItem = (props) => {
  let href = `#${props.link.href}`;
  let headerMenuRef = props.headerMenuRef;
  let headerBurgerRef = props.headerBurgerRef;

    // MENU LINKS    
  const headerMenuLink = useRef();
  const menuClickHandler = (e) => {
      e.preventDefault();
      const section = headerMenuLink.current.getAttribute('href').substr(1);

      if (headerMenuRef.current.classList.contains('menu--active')) {
        headerMenuRef.current.classList.toggle('menu--active');
        headerBurgerRef.current.classList.toggle('header__btn--active');
        // document.querySelector('.body').classList.toggle('body--hidden');
      }

      document.getElementById(section).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });

  }

  return ( 
    <li className="menu__item">
      <a className="menu__link"    
        data-text={props.link.text} 
        href={href}
        onClick={menuClickHandler} 
        ref={headerMenuLink}
        >
          {props.link.text}
        </a>
    </li>
  );
 
}
 
export default HeaderMenuItem;