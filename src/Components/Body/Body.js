import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Body.css'

const Body = () => {

    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className="body-div">            
            <div className="body-left">
            <h1>Total Product Found : {products.length} </h1>
                {
                    products.map(index=><Products 
                        index ={index}
                    ></Products>)
                }
            </div>
            <div className="body-right">
                <Cart></Cart>
            </div>           
            
        </div>
    );
};

export default Body;