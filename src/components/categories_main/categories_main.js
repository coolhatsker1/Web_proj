import React from 'react';
import './categories_main.css';  // Створіть файл стилів для цієї компоненти

const CategoriesMain = () => (
    <div className="dress-styles">
    <h2>BROWSE BY DRESS STYLE</h2>
    <div className="styles-container">
      <div className="style-row">
        <div className="style casual">
          <span>Casual</span>
        </div>
        <div className="style formal">
          <span>Formal</span>
        </div>
      </div>
      <div className="style-row">
        <div className="style party">
          <span>Party</span>
        </div>
        <div className="style gym">
          <span>Gym</span>
        </div>
      </div>
    </div>
  </div>
);
export default CategoriesMain;