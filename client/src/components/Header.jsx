import React, {useState} from 'react';
import '../assets/header.css'
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const {cart} = useSelector(state => state.cart);
    const count = cart?.length ? cart.length : 0;
    const [searchText, setSearchText] = useState('');

    return (
        <header className="header">
            <div className="header-left">
                <button className="menu-button">
                    &#9776; </button>
                <div className="logo" onClick={() => navigate('/products')}>amazon</div>
                <div className="search-bar-container">
                    <input
                        type="text"
                        placeholder="search products..."
                        className="search-input"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button className="search-button">
                        &#128269; </button>
                </div>
            </div>
            <div className="header-right">
                <p className='logout' onClick={() => {
                    navigate('/login');
                    localStorage.removeItem('token');
                }}>logout</p>
                <div className="cart">
                    <Link to={'/cart'} style={{color: 'white', textDecoration: 'none'}}>Cart <span
                        className="cart-count">{count}</span></Link>
                </div>
                <div className="sign-in-link">Sign In</div>
            </div>
        </header>
    );
}

export default Header;