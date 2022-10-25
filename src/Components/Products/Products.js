import React from 'react';

const Products = (props) => {
    console.log(props.index);
    let {name, price, img, ratings, seller, shipping} = props.index;
    return (
        <div>
            <h2>Hello From body</h2>
        </div>
    );
};

export default Products;