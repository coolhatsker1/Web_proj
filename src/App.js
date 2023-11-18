import React, { useState } from 'react';
import './App.css';
import TopBar from "./components/topbar/TopBar.js"; // Import other components as needed
import "./components/topbar/TopBar.css"; // Import the stylesheet
import NavBar from './components/navmenu/navbar.js';
import AdSection from './components/adsection/adsection.js';
const App = () => {
  const [promoVisible, setPromoVisible] = useState(true);

  const closePromo = () => setPromoVisible(false);

  return (
    <>
      {promoVisible && <TopBar onClose={closePromo} />}
      <NavBar />
      <AdSection />
      </>
  );
};

export default App;
