

const SkillsCard = (props) => {

    const classNameBg = `skills__bg skills__bg--${props.item.number}`;
    let list = props.item.list;

    return (
        <div className="skills__card">
            <div className="skills__box">
                <div className={classNameBg} aria-hidden="true" 
                style={{transform:`rotate(calc(3.6deg * ${props.item.number}))`}}
                ></div>
                <svg className="skills__svg">
                    <circle className="skills__circle" cx="70" cy="70" r="70"></circle>
                    <circle className="skills__circle" 
                        cx="70" 
                        cy="70" 
                        r="70"
                        style={{stroke:`${props.item.color}`, strokeDashoffset:`calc(439 - (439 * ${props.item.number}) / 100)`}}
                    ></circle>
                </svg>
                <div className="skills__inner">
                    <div className="skills__number"><span>{props.item.number}</span><span>%</span></div>
                    <span className="skills__descr">{props.item.description}</span>
                </div>
            </div>

             <ul className="skills__list">
                {list.map((element, index) => <li className="skills__item" key={props.item.id + index}>{element}</li>)}
            </ul> 
            
        </div>
    );
}

export default SkillsCard;