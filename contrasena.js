import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      setMessage('Por favor, ingresa tu correo electrónico.');
      return;
    }

    // Simulación de la llamada al backend para enviar el enlace de restablecimiento
    console.log('Enviando enlace de restablecimiento a:', email);

    // Aquí deberías realizar una llamada al backend que envíe el enlace al correo
    setMessage('Se ha enviado un enlace de restablecimiento a tu correo.');
    setEmail(''); // Limpiar el campo del email
  };

  return (
    <div>
      <h2>Restablecer Contraseña</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Correo Electrónico:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingresa tu correo"
          />
        </div>
        <button type="submit">Enviar Enlace</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgotPassword;
