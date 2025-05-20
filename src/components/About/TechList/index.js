import { useEffect } from 'react';
import './index.scss';

const TechList = ({ skills, currentType }) => {
  useEffect(() => {
    generateBubbles();
  }, [currentType]);

  const generateBubbles = () => {
    const bubblesBox = document.querySelector('.bubbles-box');
    if (!bubblesBox) return;
    
    bubblesBox.innerHTML = '';
    
    const layouts = {
      'Libraries': [3, 3, 3],
      'Tools': [3, 3, 2],
      'Languages': [3, 3, 2],
      'Frameworks': [3, 2]
    };

    const specialCases = {
      'Tools': {
        'Docker': { x: 1, y: 2 }
      },
      'Languages': {
        'C++': { x: 1, y: 2 }
      },
      'Frameworks': {
        'Node.js': { x: 0.5, y: 1 },
        'React.js': { x: 1.5, y: 1 }
      }
    };
    
    const layout = layouts[currentType];
    const specialCase = specialCases[currentType] || {};
    
    // Bubble generation logic adapted from your original code
    let bubbleWidth;
    if (window.innerWidth > 768) {
      bubbleWidth = bubblesBox.clientWidth / layout[0] / 2;
    } else {
      bubbleWidth = bubblesBox.clientWidth / layout[0] / 4;
    }
    const bubbleHeight = bubbleWidth;
    const startX = 0;
    const startY = (bubblesBox.clientHeight - (bubbleHeight * layout.length)) / 2;
    
    let index = 0;
    layout.forEach((row, rowIndex) => {
      for (let i = 0; i < row; i++) {
        if (index >= skills.length) break;
        const skill = skills[index];
        
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        const img = document.createElement('img');
        img.src = getImagePath(skill.name);
        img.alt = skill.name;
        bubble.appendChild(img);
        bubblesBox.appendChild(bubble);
        
        let currentX = startX + (i * bubbleWidth);
        let currentY = startY + (rowIndex * bubbleHeight);
        
        if (specialCase[skill.name]) {
          const { x, y } = specialCase[skill.name];
          currentX = startX + (x * bubbleWidth);
          currentY = startY + (y * bubbleHeight);
        }
        
        bubble.style.left = `${currentX}px`;
        bubble.style.top = `${currentY}px`;
        bubble.style.width = `${bubbleWidth}px`;
        bubble.style.height = `${bubbleHeight}px`;
        
        index++;
      }
    });
  };
  
  const getImagePath = (skillName) => {
    const specialCases = {
      'HTML/CSS': '/images/about_images/htmlcss.png',
      'Node.js': '/images/about_images/nodejs.png',
      'React.js': '/images/about_images/reactjs.png'
    };
    
    return specialCases[skillName] || `/images/about_images/${encodeURIComponent(skillName.toLowerCase().replace(/ /g, ''))}.png`;
  };
  
  return (
    <div className="skills">
      {skills && skills
        .sort((a, b) => b.time - a.time)
        .map((skill, index) => (
          <div key={index} className="skill pop-in">
            <span>{skill.name}: {skill.time} years</span>
            <div 
              className="progress-bar" 
              style={{ 
                width: `${skill.time * 20}%`, 
                backgroundColor: skill.color 
              }}
            ></div>
          </div>
        ))
      }
    </div>
  );
};

export default TechList;