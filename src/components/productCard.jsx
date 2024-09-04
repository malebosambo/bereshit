import React from 'react';

export default function productCard({ name, image, price, quantity }) {

  return (
    <div className="Product">
      <div className="card" style={{margin: "10px", padding: "10px"}}>
        <div className="Image">
          <img src={image} className="card-img-top img-responsive img-thumbnail" alt={name} />
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
    </div>
  )
}
