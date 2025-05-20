import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import profilePic from '../../assets/images/me.png';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const helloArray = ['H', 'e', 'l', 'l', 'o'];
  const nameArray = ['I', '\'', 'm', ' ', 'A', 'a', 'r', 'o', 'n', ' ', 'W', 'u'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <div className="container home-page">
      <div className="left-column">
        <div className="intro">
          <h1>
            <AnimatedLetters 
              letterClass={letterClass}
              strArray={helloArray}
              idx={15}
            />
          </h1>
          <br />
          <h2>
            <AnimatedLetters 
              letterClass={letterClass}
              strArray={nameArray}
              idx={22}
            />
          </h2>
          <p className="aspiring">software engineer and data scientist</p>
          <p className="subtitle">Computer Science and Statistics, 2026 Rice University</p>
        </div>
        <div className="contact-container">
          <Link to="/contact" className="contact-button">Contact Me</Link>
        </div>
      </div>
      <div className="right-column">
        <div className="image-container">
          <img src={profilePic} alt="Aaron Wu" className="profile-picture" />
        </div>
      </div>
    </div>
  );
};

export default Home;