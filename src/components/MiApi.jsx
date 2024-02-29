import React, { useEffect, useState } from 'react';
import Tarjetas from './Tarjetas';
import Buscador from './Buscador';


function MiApi({ birds, setBirds }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredBirds, setFilteredBirds] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://aves.ninjas.cl/api/birds');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        const birdData = data.map(bird => ({
          name: bird.name.spanish,
          image: bird.images.main
        }));

        setBirds(birdData);
        setFilteredBirds(birdData); // Inicialmente, mostrar todas las aves
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [setBirds]);

  const handleFilter = searchTerm => {
    const filteredResults = birds.filter(bird =>
      bird.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBirds(filteredResults);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Bird Names in Spanish</h1>
      <div className="container">
        <div className="row">
          <Buscador onSearch={handleFilter} />
          <Tarjetas birds={filteredBirds} />
        </div>
      </div>
    </div>
  );
}

export default MiApi;



