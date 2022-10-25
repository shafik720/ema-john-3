import React from 'react';

const Products = (props) => {
    console.log(props.index);
    let {name, price, img, ratings, seller, shipping} = props.index;
    return (
        <div>
            <div className="card-header">
                <img src={img} alt=""/>
            </div>
            <div className="card-body">
                <h2>{name}</h2>
            </div>
        </div>
    );
};

export default Products;