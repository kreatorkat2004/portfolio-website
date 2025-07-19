import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import portfolioData from '../../data/portfolio.json';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [flippedCards, setFlippedCards] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  const handleCardClick = (projectId) => {
    setFlippedCards(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const renderPortfolio = () => {
    return (
      <ul className="projects-section">
        {portfolioData.map((project) => (
          <li key={project.id} className="project-item">
            <div 
              className={`project-card ${flippedCards[project.id] ? 'flipped' : ''}`}
              onClick={() => handleCardClick(project.id)}
            >
              <div
                className="project-card-front"
                style={{ backgroundImage: `url('/portfolio/${project.image}')` }}
              >
              </div>
              <div className="project-card-back">
                <div className="project-details">
                  <p>{project.name}</p>
                  <p>{project.description}</p>
                  <a
                    href={project.github}
                    className="github-button"
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
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