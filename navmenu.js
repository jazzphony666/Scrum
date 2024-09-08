import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/inventory">Lista de Aparatos</Link></li>
        <li><Link to="/add-apparatus">Añadir Aparato</Link></li>
        <li><Link to="/edit-apparatus">Modificar Aparato</Link></li>
        <li><Link to="/delete-apparatus">Eliminar Aparato</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
