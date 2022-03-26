import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import'./Product.css';

const Product = (props) => {
  const{id,name,img,price,ratings}=props.product;

    
    return (
       <div className='product'>
             <img src={img} alt="" />
           <div className='product-info'>
         
           <p className='product-name'> Name: {name}</p>
           <p>Id: {id}</p>
           <p>Price: ${price}</p>
           <p>Ratings: {ratings}</p>
           
           </div>
           <button onClick={()=>props.handleADDToCart(props.product)}  className='btn-cart'>
               <p className='btn-text'>Add To Cart</p>
               <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
           </button>
       </div>
    );
};

export default Product;