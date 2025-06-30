import React from 'react';
import {Link} from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import '../assets/header.css'

function Header(props) {
    return (
        <header className="header">
            <div className="header-left">
                <button className="menu-button">
                    &#9776; </button>
                <div className="logo">amazona</div>
                <div className="search-bar-container">
                    <input
                        type="text"
                        placeholder="search products..."
                        className="search-input"
                    />
                    <button className="search-button">
                        &#128269; </button>
                </div>
            </div>
            <div className="header-right">
                <div className="cart">
                    Cart <span className="cart-count">1</span>
                </div>
                <div className="sign-in-link">Sign In</div>
            </div>
        </header>
    );
}

export default Header;