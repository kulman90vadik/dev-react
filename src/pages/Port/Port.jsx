
import './port.scss';
import React from 'react';
import {portfolioCardData} from './portfolioCardData';

const Port = () => {
    const sliderRef = React.useRef(null);

    const handleNext = () => {
      const slider = sliderRef.current;
      const slides = slider.children;
      if (slides.length > 0) {
        slider.appendChild(slides[0]); // Перемещаем первый слайд в конец
      }
    };
  
    const handlePrev = () => {
      const slider = sliderRef.current;
      const slides = slider.children;
      if (slides.length > 0) {
        slider.prepend(slides[slides.length - 1]); // Перемещаем последний слайд в начало
      }
    };
  



    return (
        <section className="port">
            {/* <h2 className="visually-hidden">portfolio with my work</h2> */}
            <div className="port__container">
                <div className="port__slider " ref={sliderRef}>
                    {
                        portfolioCardData.map(item => {
                            return (
                                <div className="port__slide" key={item.id} style={{ '--img': `url(${item.image})` }}>
                                    <div className="port__content" >
                                        <span>{item.title}</span>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="port__buttons">
                    <button className="port__btn port__btn--prev" onClick={handlePrev} type='button'>
                        <i class="fa fa-arrow-left"></i>
                    </button>
                    <button className="port__btn port__btn--next"  onClick={handleNext} type='button'>
                        <i class="fa fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Port;