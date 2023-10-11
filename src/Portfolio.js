import React from 'react';
import { useState } from 'react';

import PortfolioCard from './components/Portfolio/PortfolioCard';
import portfoliocardData from "./components/Portfolio/portfoliocardData";

const Portfolio = () => {

    const[cards, setCards] = useState(portfoliocardData);

    return ( 
        <section className="portfolio section" id="portfolio">
            <h2 className="visually-hidden">portfolio with my work</h2>
            <div className="portfolio__container">

                {cards.map(item => <PortfolioCard item={item} key={item.id}/>)}
            
            </div>
        </section>
    );
}

export default Portfolio;