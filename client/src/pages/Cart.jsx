import React, {useEffect} from 'react';
import '../assets/cart.css';
import {useSelector, useDispatch} from "react-redux";
import {deleteCart, getAllCart} from "../app/cart/cartThunk";

const ShoppingCart = () => {
    const dispatch = useDispatch();
    const {cart} = useSelector(state => state.cart);

    useEffect(() => {
        dispatch(getAllCart());
    }, [dispatch]);

    const calculateSubtotal = () => {
        if (!cart) return 0;
        return cart.reduce((total, item) => total + (item.price * item.total), 0).toFixed(2);
    };

    const handleDelete = (id) => {
        dispatch(deleteCart(id));
    }

    const totalItems = cart ? cart.reduce((total, item) => total + item.total, 0) : 0;


    return (
        <div className="shopping-cart-container">
            <h1>Shopping Cart</h1>

            <div className="cart-content">
                <div className="cart-items-list">
                    {cart && cart.length > 0 ? cart.map((item, index) => (
                        <div key={index + 1} className="cart-item">
                            <img src={item.avatar} alt={item.product} className="item-image"/>
                            <div className="item-details">
                                <a href="#" className="item-name">{item.product}</a>
                            </div>
                            <div className="item-quantity-controls">
                                <button>-</button>
                                <span>{item.total}</span>
                                <button>+</button>
                            </div>
                            <div className="item-price">${(item.price * item.total).toFixed(2)}</div>
                            <button className="item-remove">
                                <span role="img" aria-label="delete" onClick={() => handleDelete(item._id)}>&#128465;</span>
                            </button>
                        </div>
                    )) : <p>Your cart is empty.</p>}
                </div>

                <div className="cart-summary">
                    <div className="subtotal">
                        Subtotal ({totalItems} items) : ${calculateSubtotal()}
                    </div>
                    <button className="proceed-to-checkout">Proceed to Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;
