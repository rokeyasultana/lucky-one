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
           <button className='btn-cart'>
               <p>Add To Cart</p>
           </button>
       </div>
    );
};

export default Product;