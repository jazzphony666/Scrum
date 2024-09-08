import React, { useState } from 'react';

const DeleteApparatus = () => {
  const [id, setId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí agregaríamos la lógica para eliminar un aparato en el backend
    console.log('Eliminando aparato con ID:', id);
  };

  return (
    <div>
      <h2>Eliminar Aparato Ortopédico</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID del Aparato:</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="ID del aparato a eliminar"
          />
        </div>
        <button type="submit">Eliminar Aparato</button>
      </form>
    </div>
  );
};

export default DeleteApparatus;
