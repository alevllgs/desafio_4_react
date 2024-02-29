import React from 'react';
import Orden from './Orden';
import Buscador from './Buscador';
import Button from 'react-bootstrap/Button';

function MiApi({ birds, setBirds }) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [filteredBirds, setFilteredBirds] = React.useState([]);
  const [sortOrder, setSortOrder] = React.useState('asc');

  React.useEffect(() => {
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
        setFilteredBirds(birdData);
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

  const toggleSortOrder = () => {
    setSortOrder(order => (order === 'asc' ? 'desc' : 'asc'));
  };

  if (loading) {
    return <div>Aves de Chile...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1 className='titulo'>Aves de Chile</h1>
     
        <div className="panel">
          <div className="buscador_boton">
            <Buscador className="buscador" onSearch={handleFilter} />
            <Button className="boton" variant="secondary" onClick={toggleSortOrder}>
              {sortOrder === 'asc' ? 'Ordenar Z-A' : 'Ordenar A-Z'}
            </Button>
          </div>
          <Orden birds={filteredBirds} order={sortOrder} />
        </div>
      </div>
   
  );
}

export default MiApi;





