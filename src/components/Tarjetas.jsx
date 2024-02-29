import React from 'react';
import Card from 'react-bootstrap/Card';

function Tarjetas({ birds }) {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {birds.map((bird, index) => (
        <div key={index} className="col">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={bird.image} alt={bird.name} />
            <Card.Body>
              <Card.Title>{bird.name}</Card.Title>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Tarjetas;

