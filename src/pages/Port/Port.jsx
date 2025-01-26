
import './port.scss';
import fogex from '../../images/portfolio/fogex.png';
import ringo from '../../images/portfolio/ringo.png';
import wood from '../../images/portfolio/wood.png';
import djr from '../../images/portfolio/djr-foto.png';
import oral from '../../images/portfolio/oral.png';
import desing from '../../images/portfolio/desing.jpg';
import boon from '../../images/portfolio/boon.png';
import arron from '../../images/portfolio/arron.png';
import arronwebp from '../../images/portfolio/webp/arron.webp';
import glee from '../../images/portfolio/glee.jpg';
import ck from '../../images/portfolio/ck.jpg';
import dreams from '../../images/portfolio/dreams.jpg';
import wawe from '../../images/portfolio/wawe.png';
import branding from '../../images/portfolio/branding.jpg';
import shop from '../../images/portfolio/shop.png';
import editor from '../../images/portfolio/editor.png';
import contact from '../../images/portfolio/contact.png';


const Port = () => {

    const portfoliocardData = [

        {
            id: 1,
            image: wood,
            title: 'Wood Craft Studio',
            description: 'Html / Css / Js',
            link: 'https://kulman90vadik.github.io/woodCraft/'
        },
        {
            id: 2,
            image: ringo,
            // image: '../../images/portfolio/ringo.png',
            title: 'Ringo',
            description: 'Html / Css / Js',
            link: 'https://kulman90vadik.github.io/ringo/'
        },
        {
            id: 3,
            image: fogex,
            title: 'Fogex',
            description: 'Html / Css / Js',
            link: 'https://kulman90vadik.github.io/fogex/'
        },
        {
            id: 4,
            image: ck,
            title: 'Infrastructure',
            description: 'Html / Css / Js',
            link : 'https://kulman90vadik.github.io/ck/'
        },
        {
            id: 5,
            image: dreams,
            title: 'Dreams',
            description: 'Html / Css / Js',
            link : 'https://kulman90vadik.github.io/dreamss/'
        },
        {
            id: 6,
            image: wawe,
            title: 'Wawe',
            description: 'Html / Css / Js',
            link : 'https://kulman90vadik.github.io/my-wawe/'
        }

    ]

    return (
        <section className="port">
            {/* <h2 className="visually-hidden">portfolio with my work</h2> */}
            <div className="port__container">
                <div className="port__slider">
                    {
                        portfoliocardData.map(item => {
                            return (

                                <div className="port__slide" key={item.id} style={{ '--img': `url(${item.image})` }}>
                                    <div className="port__content" >
                                        {item.description}
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    );
}

export default Port;