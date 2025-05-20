import { useState, useEffect } from 'react';
import './index.scss';
import workData from '../../../data/work.json';

const Timeline = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleDescription = (id) => {
    setExpandedItems({
      ...expandedItems,
      [id]: !expandedItems[id]
    });
  };

  useEffect(() => {
    const initialState = {};
    workData.forEach(item => {
      initialState[item.id] = false;
    });
    setExpandedItems(initialState);
  }, []);

  return (
    <div className="timeline">
      {workData.map((item) => (
        <div key={item.id} className={`container ${item.side}`}>
          <span className="time-period">{item.period}</span>
          <div className="circle-img">
            <img 
              src={`/images/work_images/${item.logo}`} 
              alt={item.company} 
            />
          </div>
          <div className="content">
            <h2 className="position" style={{ color: item.color }}>
              {item.position}
            </h2>
            <h3 className="company">{item.company}</h3>
            <ul 
              className="description" 
              style={{ display: expandedItems[item.id] ? 'block' : 'none' }}
            >
              {item.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
            <button 
              className="see-more-btn" 
              onClick={() => toggleDescription(item.id)}
            >
              {expandedItems[item.id] ? 'See Less' : 'See More'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;