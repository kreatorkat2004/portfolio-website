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
    <div className="work-experience-widget">
      <div className="experience-list">
        {workData.map((item) => (
          <div key={item.id} className="experience-container">
            <div className="experience-header">
              <div className="company-logo">
                <img
                  src={`/images/work_images/${item.logo}`}
                  alt={item.company}
                />
              </div>
              <div className="experience-info">
                <h3 className="position" style={{ color: item.color }}>
                  {item.position}
                </h3>
                <h4 className="company">{item.company}</h4>
                <span className="time-period">{item.period}</span>
              </div>
            </div>
            <div className="experience-content">
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
    </div>
  );
};

export default Timeline;