import React from 'react';
import './adsection.css'; // Make sure to create a CSS file for styling
import model from 'C:/my_folder/Univer/3_kurs_1_sem/web3/Web_proj/src/resources/model.png';

const AdSection = () => {
  return (
    <>
    <div className="adsection">
      <div className="adsection-content">
        <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p>
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of style.
        </p>
        <button className="shop-now-btn">Shop Now</button>
        <div className="statistics">
          <div className="stat-item">
            <strong>200+</strong>
            <span>International Brands</span>
          </div>
          <div className="stat-item">
            <strong>2,000+</strong>
            <span>High-Quality Products</span>
          </div>
          <div className="stat-item">
            <strong>30,000+</strong>
            <span>Happy Customers</span>
          </div>
        </div>
      </div>
      <div className="adsection-image">
        <img src={model} alt="Fashion Models" />
      </div>
    </div>
    <div className="brands-section">
        <div className="brands">
        <span>VERSACE</span>
        <span>ZARA</span>
        <span>GUCCI</span>
        <span>PRADA</span>
        <span>Calvin Klein</span>
        </div>
    </div>
    </>
  );
};

export default AdSection;
