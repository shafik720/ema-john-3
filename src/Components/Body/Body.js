import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Body.css'

const Body = () => {

    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);

    let [cart, setCart] = useState([])
    function handleCart(element){
        let newCart = [...cart, element];
        setCart(newCart);
        addToDb(element.id);
    }
    
    return (
        <div className="body-div">            
            <div className="body-left">
                {
                    products.map(index=><Products 
                        index ={index}
                        key = {index.id}
                        handleCart = {handleCart}
                    ></Products>)
                }
            </div>
            <div className="body-right">
                <Cart cart={cart}></Cart>
            </div>           
            
        </div>
    );
};

export default Body;