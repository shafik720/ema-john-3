import React from 'react';
import './Products.css'

const Products = (props) => {
    console.log(props.index);
    let {name, price, img, ratings, seller, shipping} = props.index;
    return (
        <div className="cardX">
            <div className="card-header">
                <img src={img} alt=""/>
            </div>
            <div className="card-body">
                <h4>{name}</h4>
                <p>Price : {price} </p>
                <p>Ratings : ${ratings} star </p>
                <p>Manufacturer: {seller} </p>
            </div>
        </div>
    );
};

export default Products;