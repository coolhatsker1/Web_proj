import React from 'react';
import './topsell.css';  // Додайте цей імпорт
import placeholder from 'C:/my_folder/Univer/3_kurs_1_sem/web3/Web_proj/src/resources/placeholder.png';

const Product = ({ name, image, reviews, price, maxReviews }) => (
  <div className="product">
    <img src={image} alt={name} />
    <div className="product-details">
      <h3>{name}</h3>
      <div className="reviews">
        {Array.from({ length: Math.min(5, reviews) }, (_, index) => (
          <span key={index} role="img" aria-label="star">
            ⭐
          </span>
        ))}
        <span>{`${reviews}/${maxReviews}`}</span>
      </div>
      <p>{`Price: $${price}`}</p>
    </div>
  </div>
);

const TopSelling = () => (
  <div className="new-arrivals">
    <h1>Top Selling</h1>
    <div className="products-container">
      <Product
        name="Product 1"
        image={placeholder}
        reviews={4}
        price={19.99}
        maxReviews={5}
      />
      <Product
        name="Product 2"
        image={placeholder}
        reviews={5}
        price={29.99}
        maxReviews={5}
      />
      <Product
        name="Product 3"
        image={placeholder}
        reviews={3}
        price={39.99}
        maxReviews={5}
      />
      <Product
        name="Product 4"
        image={placeholder}
        reviews={2}
        price={49.99}
        maxReviews={5}
      />
    </div>
    <div className="view-all-container">
      <button className="view-all-button">View All</button>
    </div>
  </div>
);

export default TopSelling;