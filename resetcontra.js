import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // Para obtener el token del enlace

const ResetPassword = () => {
  const { token } = useParams(); // El token que viene del enlace del correo
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Las contraseñas no coinciden.');
      return;
    }

    // Simulación de la llamada al backend para restablecer la contraseña con el token
    console.log('Token:', token);
    console.log('Nueva contraseña:', password);

    // Aquí deberías hacer la llamada a tu backend para restablecer la contraseña usando el token
    setMessage('Tu contraseña ha sido restablecida con éxito.');
  };

  return (
    <div>
      <h2>Establecer Nueva Contraseña</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nueva Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingresa tu nueva contraseña"
          />
        </div>
        <div>
          <label>Confirmar Contraseña:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirma tu nueva contraseña"
          />
        </div>
        <button type="submit">Restablecer Contraseña</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPassword;
