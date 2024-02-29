import React, { useEffect, useState } from 'react';

function App() {
  const [birds, setBirds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://aves.ninjas.cl/api/birds');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        // Extraer solo los nombres en español y el enlace principal de la imagen
        const birdInfo = data.map(bird => ({
          name: bird.name.spanish,
          image: bird.images.main
        }));
        setBirds(birdInfo);

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Bird Names in Spanish</h1>
      <ul>
        {birds.map((bird, index) => (
          <li key={index}>
            <p>{bird.name}</p>
            <img src={bird.image} alt={bird.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
