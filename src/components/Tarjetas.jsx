import React from 'react';

function Tarjetas({ birds }) {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {birds.map((bird, index) => (
        <div key={index} className="col">
          <div className="card h-100">
            <img src={bird.image} className="card-img-top" alt={bird.name} />
            <div className="card-body">
              <h5 className="card-title">{bird.name}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tarjetas;

