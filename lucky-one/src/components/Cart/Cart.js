
import React from 'react';
import './Cart.css';

const Cart = (props )=> {
  
  const { name, img } = props.cart;
  return (
    <div className="cart text-center ">
    <div className="d-flex ps-3">
      <div className="ml-5 d-flex">
        <img className="my-3" src={img} alt="" />
        <p className="mt-4 ml-3">{name}</p>
      </div>
    </div>
  </div>
  );
};

export default Cart;