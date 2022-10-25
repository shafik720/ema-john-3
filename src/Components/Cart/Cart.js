import React from 'react';
import './Cart.css'
const Cart = (props) => {
    return (
        <div className="cart">
            <div className="cart-body">
                <h2>Order Summary : </h2>
                <h3>Product Added : {props.cart.length} </h3>
                <h3>Total Price : </h3>
                <h3>Shipping Fee:</h3>
                <h3>Tax : </h3>
                <h3>Grand Total :</h3>
            </div>            
        </div>
    );
};

export default Cart;