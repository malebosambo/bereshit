'use client';

import React, { useState } from 'react';

export default function productCard({ name, image, price, quantity }) {

  const { cartItems, setCartItems } = useState(0);

  const addCartItems = () => setCartItems(cartItems + 1);
  const removeCartItems = () => setCartItems(cartItems - 1);


  return (
    <div className="Product">
      <div className="card" style={{margin: "10px", padding: "10px"}}>
        <div className="Image">
          <img src={image} className="card-img-top img-responsive" alt={name} />
        </div>
        <div className="card-body">
          <div>
            <p className="card-title">{name}</p>
          </div>
        </div>
        <div className="Product_Details">
          <div><h5>{price}</h5></div>
          <div><h5>Stock: {quantity}</h5></div>
        </div>
      </div>
      <div className="Product_Card_Btn">
        <div><button on click={addCartItems}><span class="material-symbols-outlined">
add
</span></button></div>
        <div><input type="text" defaultValue={cartItems} className="Product_Card_Input" /></div>
        <div><button onClick={removeCartItems}><span class="material-symbols-outlined">
remove
</span></button></div>
      </div>
    </div>
  )
}
