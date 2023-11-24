import React, { useState } from 'react';
import './App.css';
import TopBar from "./components/topbar/TopBar.js"; // Import other components as needed
import "./components/topbar/TopBar.css"; // Import the stylesheet
import NavBar from './components/navmenu/navbar.js';
import AdSection from './components/adsection/adsection.js';
import NewArrivals from './components/new_arrivals/newarr.js';
import TopSelling from './components/top_selling/topsell.js';
import CategoriesMain from './components/categories_main/categories_main.js';


const App = () => {
  const [promoVisible, setPromoVisible] = useState(true);

  const closePromo = () => setPromoVisible(false);

  return (
    <>
      {promoVisible && <TopBar onClose={closePromo} />}
      <NavBar />
      <AdSection />
      <NewArrivals />
      <TopSelling />
      <CategoriesMain />
      </>
  );
};

export default App;
