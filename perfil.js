import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div>
      <h2>Perfil del Usuario</h2>
      <p><strong>Nombre:</strong> {user.name}</p>
      <p><strong>Correo:</strong> {user.email}</p>
      <p><strong>Rol:</strong> Usuario</p>
      <p><strong>Teléfono:</strong> {user.phone}</p>
    </div>
  );
};

export default UserProfile;
