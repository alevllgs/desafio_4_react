import React from 'react';
import Tarjetas from './Tarjetas';

function Orden({ birds, order }) {
  const sortedBirds = [...birds]; 
  
  sortedBirds.sort((a, b) => {
    if (order === 'asc') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  return <Tarjetas birds={sortedBirds} />;
}

export default Orden;
