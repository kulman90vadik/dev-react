// import React from 'react';

const PortfolioCard = (props) => {
    return (
        <article className="portfolio-card">
            <picture>
                <source srcSet={props.item.imagewebp} type="image/webp" />
                <img className="portfolio-card__image" src={props.item.image} alt="foto" />
            </picture>
            <div className="portfolio-card__description">
                <div className="portfolio-card__text">{props.item.title}</div>
            </div>
            <div className="portfolio-card__box" aria-hidden="true">
                <div className="portfolio-card__box-shadow"></div>
            </div>
            <a className="portfolio-card__circle" href={props.item.link} target="_blank" rel="noreferrer">View project</a>
            <div className="portfolio-card__skills">{props.item.description}</div>
        </article>
    );
}

export default PortfolioCard;