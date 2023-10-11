import { useState, useRef, useEffect } from 'react';

import SkillsCard from './components/Skills/SkillsCard';
import skillscardData from './components/Skills/skillscardData';


const Skills = () => {
    
    const[skills, setSkills] = useState(skillscardData);  
    const skillsRef = useRef();
    
    useEffect(()=>{

        window.addEventListener('scroll', (e) => {
            scrollAnimation();
        });
        
            const scrollAnimation = () => {
                let windowCenter = window.innerHeight / 2;
                let topSkills = skillsRef.current.getBoundingClientRect().top;
                if(windowCenter >= topSkills) {
                    skillsRef.current.classList.add('skills--animation');
                } else {
                    skillsRef.current.classList.remove('skills--animation');
                }
            };
            
        scrollAnimation();

    },[])

    
    return ( 
        <section 
            className="skills section" 
            id="skills"
            ref={skillsRef}
        >
            <h2 className="visually-hidden">my skills</h2>
            <div className="skills__container">
                
                {skills.map(item => <SkillsCard item={item} key={item.id}/>)}

            </div>
        </section>
    );
}

export default Skills;
