import React, { useState } from 'react';

const InviteDonor = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState('');

  const handleInvite = (e) => {
    e.preventDefault();
    if (email === '') {
      setSuccess('Por favor, ingresa el correo del donante.');
    } else {
      setSuccess(`Invitación enviada a ${email}`);
      setEmail(''); // Limpiar el campo después de la invitación
    }
  };

  return (
    <div>
      <h2>Invitar a un Donante</h2>
      <form onSubmit={handleInvite}>
        <div>
          <label>Correo Electrónico del Donante:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Enviar Invitación</button>
      </form>
      {success && <p>{success}</p>}
    </div>
  );
};

export default InviteDonor;
