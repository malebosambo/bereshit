import React from 'react';

export default function productCard({ id, name, image, price }) {

  return (
    <div className="Product">
      <div className="card" style={{margin: "10px", padding: "10px"}}>
        <div className="Image">
          <img src={image} className="card-img-top img-responsive img-thumbnail" alt={name} />
        </div>
        <div className="card-body">
          <div>
            <h2 className="card-title">{name}</h2>
          </div>
        </div>
        <div>
          <h5>{price}</h5>
        </div>
      </div>
    </div>
  )
}
