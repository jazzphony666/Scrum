import React, { useState } from 'react';

const EditApparatus = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí agregaríamos la lógica para modificar un aparato existente en el backend
    console.log('Modificando aparato:', { id, name, description });
  };

  return (
    <div>
      <h2>Modificar Aparato Ortopédico</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID del Aparato:</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="ID del aparato a modificar"
          />
        </div>
        <div>
          <label>Nuevo Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nuevo nombre"
          />
        </div>
        <div>
          <label>Nueva Descripción:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Nueva descripción"
          />
        </div>
        <button type="submit">Modificar Aparato</button>
      </form>
    </div>
  );
};

export default EditApparatus;
