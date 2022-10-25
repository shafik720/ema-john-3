import React from 'react';
import './Cart.css'
const Cart = (props) => {
    return (
        <div className="cart">
            <div className="cart-body">
                <h2>Order Summary : </h2>
                <h3>Product Added : {props.cart.length} </h3>
            </div>            
        </div>
    );
};

export default Cart;