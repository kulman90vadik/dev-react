import './header.scss';
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import logowebp from "../images/logo-wp.webp";


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const activeLink = 'menu__link menu__link--active';
    const normalLink = 'menu__link';

    return (
        <header className="header">
            <Link to="/" className="logo">
                <picture>
                    <source srcSet={logowebp} type="image/webp" />
                    <img className="logo__images" src={logo} alt="Logo" />
                </picture>
            </Link>

            <nav className={`${menuOpen ? 'menu menu--active' : 'menu'}`}>
                <ul className="menu__list">
                    <li className="menu__item">
                        <NavLink to="about"
                            className={({ isActive }) => isActive ? activeLink : normalLink}
                            onClick={() => setMenuOpen(false)}
                            data-text='About' >
                            About
                        </NavLink>
                    </li>
                    <li className="menu__item">
                        <NavLink to="skills" className={({ isActive }) => isActive ? activeLink : normalLink} data-text='My Skills'
                            onClick={() => setMenuOpen(false)}>
                            My Skills
                        </NavLink>
                    </li>
                    <li className="menu__item">
                        <NavLink to="portfolio" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? activeLink : normalLink} data-text='Portfolio' >
                            Portfolio
                        </NavLink>
                    </li>
                    <li className="menu__item">
                        <NavLink to="contact" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? activeLink : normalLink} data-text='Contact' >
                            Contact
                        </NavLink>
                    </li>
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
                {/* <li className="social__item">
                    <a
                        className="social__link social__link--whatsapp"
                        href="https://wa.me/+4917641167896?text=Hello."
                        rel="noreferrer"
                        aria-label="Ability to call on whatsapp"
                    >
                        <i className="fa fa-whatsapp" aria-hidden="true"></i>
                    </a>
                </li> */}
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
                className={`${menuOpen ? 'header__btn header__btn--active' : 'header__btn'}`}
                type="button"
                aria-label="menu navigation"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </button>
        </header>
    );
};

export default Header;
