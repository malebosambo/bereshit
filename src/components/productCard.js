import React from 'react';

export default function productCard(product) {

  return (
    <div>
      <div className="card" style={{margin: "10px", padding: "10px"}}>
        <div className="Image">
          <img src={image} className="card-img-top img-responsive img-thumbnail" alt={name} />
        </div>
        <div className="card-body" style={{margin: "15px"}}>
          <div>
            <h2 className="card-title">{name}</h2>
          </div>
          <hr/>
        </div>
        <div style={{marginLeft: "30px"}}>
          <h5>{price}</h5>
        </div>
      </div>
    </div>
  )
}
