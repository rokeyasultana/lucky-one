import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import SelectedProduct from '../SelectedProduct/SelectedProduct';

import'./Shop.css';

const Shop = () => {
    const[products,setProducts] = useState([]);

    const [cart,setCart] =useState([]);

    useEffect(() =>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data =>setProducts(data));
    },[]);

    const handleAddToCart = (product)=>{
        for (const carts of cart) {
            if (cart.id === product.id) {
              return  alert("Already added item. Please try another");
              ;
            }
        
    }

    if (cart.length <= 3) {
        const newProduct = [...cart, product];
        setCart(newProduct);
      } else {
        <div class="alert alert-danger" role="alert">
        A simple danger alert—check it out!
      </div>
      }
    };

    const choseOne = () => {

        if (cart.length < 2 || cart.length === 0) {
          alert("Please add at least two Item !");
        } 
        
        else {
          const randomId = Math.floor(Math.random() * cart.length);
          const watch = cart[randomId];
          setCart([watch]);
        }

      };

      const emptyItem = () => {
        if (cart === 0) {
        return alert('')
        }

        setCart([]);
        
      };

      const removeItemFromCart = (id) => {
        const removeItem = cart.filter((carts) => carts.id !== id);
        setCart(removeItem);
      };
    return (
        <div className='shop-container'>
           <div className ="products-container">
             
                  {

                    products.map(product =>
                    <Product key={product.id}
                    product ={product}
                    handleAddToCart={handleAddToCart}
                    >
                     </Product> )
                  } 
           </div>

           <div className ="cart-container">
               <h4 className='text-center mt-5'>Selected Watch</h4>
          <div>
          {cart.map((cart) => (
            <Cart cart={cart} removeItemFromCart={removeItemFromCart}></Cart>
          ))}
          </div>
       <SelectedProduct choseOne={choseOne} emptyItem={emptyItem}></SelectedProduct>
          
           </div>
           
           
        </div>
    );
};

export default Shop;