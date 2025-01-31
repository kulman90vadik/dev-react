
import './port.scss';
import React from 'react';
import { portfolioCardData } from './portfolioCardData';

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
  
    // const handleSlideClick = (index) => {
    //   const slider = sliderRef.current;
    //   const slides = Array.from(slider.children);
    //   const clickedSlide = slides[index];
  
    //   // Логика: Если это первый слайд, перемещаем его в конец, иначе перемещаем кликнутый слайд в начало
    //   if (index === 0) {
    //     slider.appendChild(clickedSlide);
    //   } else {
    //     slider.prepend(clickedSlide);
    //   }
    // };

    return (
        <section className="port">
            {/* <h2 className="visually-hidden">portfolio with my work</h2> */}
            <div className="port__container">
                <div className="port__slider " ref={sliderRef}>
                    {
                        portfolioCardData.map((item, index) => {
                            return (
                                <div className="port__slide" key={item.id} style={{ '--img': `url(${item.image})` }}>
                                    <div className="port__content" >
                                        <span className='port__name'>{item.title}</span>
                                        <p>{item.description}</p>
                                        <a href={item.link} rel="noreferrer" className="port__link">
                                           
                                            Visit website
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>
                                          
                                            </a>
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
                    <button className="port__btn port__btn--next" onClick={handleNext} type='button'>
                        <i class="fa fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Port;