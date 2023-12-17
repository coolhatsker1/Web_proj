import React, { useState, useEffect } from "react";
import ProductService from "../../ProductService";
import NavBar from "./../navmenu/navbar";

const Product = ({ name, image, reviews, price, maxReviews, cartItems, setCartItems, addToCart }) => (
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
            <button onClick={() => addToCart(price)}>To cart</button>
        </div>
    </div>
    
);

const NewArrivals = ({ addToCart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await ProductService.getProducts();
                setProducts(response.slice(0, 4));
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);
    return (
        <div className="new-arrivals">
            <h1>New Arrivals</h1>
            <div className="products-container">
                {products.map((product) => (
                  <Product key={product.id} name={product.name} image={product.image} reviews={5} price={product.price} maxReviews={5} addToCart={()=>addToCart(Number(product.price))} />                ))}
            </div>
            <div className="view-all-container">
                <button className="view-all-button">View All</button>
            </div>
        </div>
    );
};

export default NewArrivals;