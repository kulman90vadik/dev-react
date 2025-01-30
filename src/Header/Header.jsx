import './header.scss';
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import logowebp from "../images/logo-wp.webp";
import Social from './Social';


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const activeLink = 'menu__link menu__link--active';
    const normalLink = 'menu__link';
    const links = [
        {href: "/", lebel: "Home"},
        {href: "about", lebel: "About"},
        {href: "skills", lebel: "My Skills"},
        {href: "portfolio", lebel: "Portfolio"},
        // {href: "port", lebel: "Port"},
        {href: "contact", lebel: "Contact"}
    ]

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
                    {links.map(item => {
                        return (
                            <li className="menu__item">
                                <NavLink to={item.href}
                                    className={({ isActive }) => isActive ? activeLink : normalLink}
                                    onClick={() => setMenuOpen(false)}
                                    data-text={item.lebel} >
                                    {item.lebel}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>

            <Social />


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
