import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import MiApi from './components/MiApi';
import Buscador from './components/Buscador';

function App() {
  const [birds, setBirds] = useState([]);
  const [filteredBirds, setFilteredBirds] = useState([]);

  useEffect(() => {
    console.log("Birds from API:", birds);
    setFilteredBirds(birds);
  }, [birds]);

  const handleSearch = (searchTerm) => {
    console.log("Search Term:", searchTerm);
    const filteredResults = birds.filter(bird =>
      bird.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log("Filtered Birds:", filteredResults);
    setFilteredBirds(filteredResults);
  };

  console.log("Filtered Birds (State):", filteredBirds);

  return (
    <div>
      <Buscador onSearch={handleSearch} />
      <MiApi birds={filteredBirds} setBirds={setBirds} />
    </div>
  );
}

export default App;
