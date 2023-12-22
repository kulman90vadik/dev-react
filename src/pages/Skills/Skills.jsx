
import './skills.scss';
import SkillsCard from './SkillsCard';
import skillscardData from './skillscardData';


const Skills = () => {
    return ( 
        <section 
            className="skills section skills--animation" 
            id="skills"
            // ref={skillsRef}
        >
            <h2 className="visually-hidden">my skills</h2>
            <div className="skills__container">
                
                {skillscardData.map(item => <SkillsCard item={item} key={item.id}/>)}

            </div>
        </section>
    );
}

export default Skills;
