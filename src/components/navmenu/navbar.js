import React, { useState } from "react";
import "./navbar.css"; // Make sure to create a corresponding CSS file
import cart from "C:/my_folder/Univer/3_kurs_1_sem/web3/Web_proj/src/resources/cart.png";
import profile from "C:/my_folder/Univer/3_kurs_1_sem/web3/Web_proj/src/resources/profile.png";

const NavBar = ({ cartItems, setCartItems, addToCart }) => {
    const totalPrice = cartItems.reduce((acc, curr) => acc + curr, 0);
    console.log(totalPrice);
    console.log('navbar ',cartItems);
    return (
        <div className="wrapper">
            <nav className="navbar">
                <div className="logo">SHOP.CO</div>
                <div className="nav-links">
                    <a href="/shop">Shop</a>
                    <a href="/sale">On Sale</a>
                    <a href="/new-arrivals">New Arrivals</a>
                    <a href="/brands">Brands</a>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Search for products..." />
                </div>
                <div className="cart">
                    <a href="/cart">
                        <img src={cart} alt="cart" className="cart_img" />
                        {totalPrice > 0 && <span className="total-price">${totalPrice}</span>}
                    </a>
                </div>
                <div className="profile">
                    <a href="/profile">
                        <img src={profile} alt="profile" className="profile_img" />
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;