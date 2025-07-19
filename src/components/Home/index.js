import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import profilePic from '../../assets/images/me.png';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const helloArray = ['H', 'e', 'l', 'l', 'o'];
  const nameArray = ['I', '\'', 'm', '\u2009', 'A', 'a', 'r', 'o', 'n', '\u2009', 'W', 'u'];

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
          <h2 className="name-line">
            <AnimatedLetters 
              letterClass={letterClass}
              strArray={nameArray}
              idx={22}
            />
          </h2>
          <p className="aspiring">software engineer</p>
          <p className="aspiring">data scientist</p>
          <p className="aspiring">machine learning engineer</p>
          <p className="aspiring">quantitative trader</p>
          <p className="subtitle">Computer Science & Statistics & Data Science, 2026 at Rice University</p>
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