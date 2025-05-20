import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Timeline from './Timeline';
import './index.scss';

const Work = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <div className="container work-page">
      <h1 className="fade-in-left-letter-by-letter" style={{ color: '#51e8d6' }}>
        <AnimatedLetters
          letterClass={letterClass}
          strArray={['W', 'o', 'r', 'k', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e', 's']}
          idx={15}
        />
      </h1>
      <Timeline />
    </div>
  );
};

export default Work;