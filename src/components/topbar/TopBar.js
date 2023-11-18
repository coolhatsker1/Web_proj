import React, { useState } from 'react';
import './TopBar.css';

const TopBar = ({ onClose }) => {
  return (
    <div className="TopBar">
      <span>Sign up and get 20% off your first order. </span>
      <button onClick={onClose} className='register_reminder'>Sign Up Now</button>
      <button className="close-button" onClick={onClose}>X</button>
    </div>
  );
};

export default TopBar;