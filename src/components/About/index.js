import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import TechList from './TechList';
import './index.scss';
import skillsData from '../../data/skills.json';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [currentSkillType, setCurrentSkillType] = useState('Languages');
  
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  const showSkills = (type) => {
    setCurrentSkillType(type);
  };

  return (
    <div className="container about-page">
      <div className="left-column">
        <section className="intro">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p className="pop-in">
            I am a dedicated software engineer and data analyst with the ability to work in collaborative environments, 
            navigate complex challenges, and a passion for leveraging technology to solve real-world problems.
          </p>
        </section>
        
        <section className="skills-section">
          <h2 className="pop-in" style={{ color: '#51e8d6' }}>Skills</h2>
          <div className="skill-buttons pop-in">
            {Object.keys(skillsData).map(type => (
              type !== currentSkillType && (
                <button 
                  key={type} 
                  onClick={() => showSkills(type)}
                >
                  {type}
                </button>
              )
            ))}
          </div>
          
          <TechList 
            skills={skillsData[currentSkillType]} 
            currentType={currentSkillType} 
          />
        </section>
      </div>
      
      <div className="right-column">
        <div className="bubbles-box"></div>
      </div>
    </div>
  );
};

export default About;