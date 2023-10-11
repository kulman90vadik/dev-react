import React, { useState } from "react";
import { useRef } from "react";
import logo from "./images/logo.png";
import logowebp from "./images/logo-wp.webp";
import HeaderMenuItem from "./components/Header/HeaderMenuItem";
import headerMenuData from "./components/Header/headerMenuData";

const Header = () => {
  const headerMenuRef = useRef();
  const headerBurgerRef = useRef();
  const [menuLinks, setMenuLinks] = useState(headerMenuData);

  // let preloaderRef = useRef();

  // window.onload = (event) => {
  //   console.log("page is fully loaded");
  //   preloaderRef.current.classList.add("preloader--hide");
  // };

  // HEADER ACTIVE
  const headerBurgerHandler = () => {
    headerMenuRef.current.classList.toggle("menu--active");
    headerBurgerRef.current.classList.toggle("header__btn--active");
    // document.querySelector('.body').classList.toggle('body--hidden');
  };

  return (
    <header className="header">
      <a className="logo" href="#">
        <picture>
          <source srcSet={logowebp} type="image/webp" />
          <img className="logo__images" src={logo} alt="Logo" />
        </picture>
      </a>

      <nav className="menu" ref={headerMenuRef}>
        <ul className="menu__list">
          {menuLinks.map((link) => {
            return (
              <HeaderMenuItem
                headerMenuRef={headerMenuRef}
                headerBurgerRef={headerBurgerRef}
                link={link}
                key={link.id}
              />
            );
          })}
        </ul>
      </nav>

      <ul className="social" aria-label="in the form of icons with contacts">
        <li className="social__item">
          <a
            className="social__link social__link--github"
            href="https://github.com/kulman90vadik"
            rel="noreferrer"
            aria-label="Go to page in github"
          >
            <i className="fa fa-github-square" aria-hidden="true"></i>
          </a>
        </li>
        <li className="social__item">
          <a
            className="social__link social__link--whatsapp"
            href="https://wa.me/+4917641167896?text=Hello."
            rel="noreferrer"
            aria-label="Ability to call on whatsapp"
          >
            <i className="fa fa-whatsapp" aria-hidden="true"></i>
          </a>
        </li>
        <li className="social__item">
          <a
            className="social__link social__link--post"
            href="mailto:v_kuhlmann@outlook.com"
            rel="noreferrer"
            aria-label="write a letter"
          >
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
      <button
        className="header__btn"
        type="button"
        aria-label="menu navigation"
        ref={headerBurgerRef}
        onClick={headerBurgerHandler}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>

      {/* <div id="preloader" className="preloader" ref={preloaderRef}>
        <div className="preloader__loader">
          <div className="loadingio-spinner-bean-eater-za7vf1w5jfp">
            <div className="ldio-iokivgbuc8i">
              <div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

    </header>
  );
};

export default Header;
