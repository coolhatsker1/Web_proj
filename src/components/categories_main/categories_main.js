import React, { useState } from 'react';
import './categories_main.css';

const CategoriesMain = () => {
  const [activeStyle, setActiveStyle] = useState(null);

  const handleHover = (style) => {
    setActiveStyle(style);
  };

  return (
    <div className="dress-styles">
      <h2>BROWSE BY DRESS STYLE</h2>
      <div className="styles-container">
        <div className="style-row">
          <div
            className={`style casual ${activeStyle === 'casual' ? 'active' : ''}`}
            onMouseEnter={() => handleHover('casual')}
            onMouseLeave={() => handleHover(null)}
          >
            <span>Casual</span>
          </div>
          <div
            className={`style formal ${activeStyle === 'formal' ? 'active' : ''}`}
            onMouseEnter={() => handleHover('formal')}
            onMouseLeave={() => handleHover(null)}
          >
            <span>Formal</span>
          </div>
        </div>
        <div className="style-row">
          <div
            className={`style party ${activeStyle === 'party' ? 'active' : ''}`}
            onMouseEnter={() => handleHover('party')}
            onMouseLeave={() => handleHover(null)}
          >
            <span>Party</span>
          </div>
          <div
            className={`style gym ${activeStyle === 'gym' ? 'active' : ''}`}
            onMouseEnter={() => handleHover('gym')}
            onMouseLeave={() => handleHover(null)}
          >
            <span>Gym</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesMain;