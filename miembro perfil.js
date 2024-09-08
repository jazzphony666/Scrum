import React from 'react';

const MemberProfile = ({ member }) => {
  return (
    <div>
      <h2>Perfil del Miembro</h2>
      <p><strong>Nombre:</strong> {member.name}</p>
      <p><strong>Correo:</strong> {member.email}</p>
      <p><strong>Rol:</strong> Miembro</p>
      <p><strong>Teléfono:</strong> {member.phone}</p>
      <p><strong>Grupo:</strong> {member.group}</p>

      {/* Funcionalidad adicional solo para miembros */}
      <div>
        <h3>Invitar Donantes</h3>
        <button>Invitar Donante</button>
      </div>
    </div>
  );
};

export default MemberProfile;
