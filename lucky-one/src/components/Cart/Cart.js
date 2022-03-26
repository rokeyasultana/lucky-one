import React from 'react';
import'./Cart.css';

const Cart = (props) => {
    const {cart} =props;
    console.log(cart);

    let selectedWatch = '';
   
    for (const product of cart){
        selectedWatch = product.name;
       
    }

    return (
        <div className='cart'>
            <h2>Selected Items</h2>
           <p> Watch-Name: {cart.length}</p>
           <p> Watch-Name:{ selectedWatch} </p>
           
           
        </div>

         
    );
    
};

export default Cart;