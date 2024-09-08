import React from 'react';

const ApparatusList = () => {
  // Simulación de un inventario de aparatos
  const apparatusList = [
    { id: 1, name: 'Silla de ruedas', description: 'Silla de ruedas ligera' },
    { id: 2, name: 'Muletas', description: 'Muletas ajustables' },
    { id: 3, name: 'Andador', description: 'Andador plegable con ruedas' },
    { id: 4, name: 'Prótesis de pierna', description: 'Prótesis modular' },
  ];

  return (
    <div>
      <h2>Inventario de Aparatos Ortopédicos</h2>
      <ul>
        {apparatusList.map((apparatus) => (
          <li key={apparatus.id}>
            <h3>{apparatus.name}</h3>
            <p>{apparatus.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApparatusList;
