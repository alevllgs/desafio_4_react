import React from 'react';

function Buscador({ onSearch }) {
  const handleChange = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  return (
    <div className="container mt-4">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Buscador de aves"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Buscador;

