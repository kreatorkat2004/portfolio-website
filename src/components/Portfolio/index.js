import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import portfolioData from '../../data/portfolio.json';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  const renderPortfolio = () => {
    return (
      <ul className="projects-section">
        {portfolioData.map((project) => (
          <li key={project.id} className="project-item">
            <div className="project-card">
              <div 
                className="project-card-front" 
                style={{ backgroundImage: `url('/portfolio/${project.image}')` }}
              >
                <div className="project-info">
                  <span>{project.name}</span>
                </div>
              </div>
              <div className="project-card-back">
                <div className="project-details">
                  <p>{project.description}</p>
                  <p>{project.period}</p>
                  <a 
                    href={project.github} 
                    className="github-button" 
                    target="_blank" 
                    rel="noreferrer"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="container portfolio-page">
      <section className="header">
        <h1 
          className="fade-in-left-letter-by-letter" 
          style={{ color: '#51e8d6', fontSize: '3em' }}
        >
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
            idx={15}
          />
        </h1>
      </section>
      <section className="projects-list">
        {renderPortfolio()}
      </section>
    </div>
  );
};

export default Portfolio;