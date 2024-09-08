import React, { useState } from 'react';

const AddApparatus = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí agregaríamos la lógica para enviar los datos al backend
    console.log('Añadiendo aparato:', { name, description });
    // Limpiar los campos del formulario
    setName('');
    setDescription('');
  };

  return (
    <div>
      <h2>Añadir Aparato Ortopédico</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre del Aparato:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre del aparato"
          />
        </div>
        <div>
          <label>Descripción:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descripción"
          />
        </div>
        <button type="submit">Añadir Aparato</button>
      </form>
    </div>
  );
};

export default AddApparatus;
