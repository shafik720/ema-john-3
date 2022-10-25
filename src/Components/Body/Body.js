import React from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Body.css'

const Body = () => {
    return (
        <div className="body-div">
            <Products></Products>
            <Cart></Cart>
        </div>
    );
};

export default Body;