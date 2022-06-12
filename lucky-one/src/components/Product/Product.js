import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import './Product.css'

const Product = (props) => {
  const { handleAddToCart, product} = props;
  const { name, price, img,ratings} = product;
  return (
    <div className="product text-center">
      <img className='rounded mx-auto d-block' src={img} alt="" />
      <h4>{name}</h4>
      <p> Price:$$ {price}</p>
      <p> Ratings: {ratings}</p>
      <button
        onClick={() => handleAddToCart(product)}
        className="btn btn-outline-primary "
      ><p className="text-black">Add to Cart <span ><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></span></p> 
      </button>
    </div>
  );
};

export default Product;