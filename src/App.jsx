import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import MiApi from './components/MiApi';
import './App.css';


function App() {
  const [birds, setBirds] = useState([]);
  const [filteredBirds, setFilteredBirds] = useState([]);

  useEffect(() => {
    console.log("Birds from API:", birds);
    setFilteredBirds(birds);
  }, [birds]);

  const handleSearch = (searchTerm) => {
    const filteredResults = birds.filter(bird =>
      bird.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBirds(filteredResults);
  };


  return (
    <div>
          <MiApi birds={filteredBirds} setBirds={setBirds} />
    </div>
  );
}

export default App;
