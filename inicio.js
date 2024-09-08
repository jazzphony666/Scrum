import React, { useState } from 'react';

const Login = () => {
  // Estado para manejar el correo y la contraseña del formulario
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');

  // Función para manejar cambios en los inputs
  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  // Manejar el envío del formulario de inicio de sesión
  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes realizar la validación del inicio de sesión
    if (loginData.email === '' || loginData.password === '') {
      setError('Por favor ingresa tu correo y contraseña');
    } else {
      // Aquí puedes simular una autenticación exitosa
      console.log('Iniciar sesión con:', loginData);
      setError('');
      // Lógica para redirigir o mostrar la página de selección de donantes
      alert('Inicio de sesión exitoso');
      // Redirigir a la página de selección de donantes o dashboard de miembro
    }
  };

  return (
    <div>
      <h2>Inicio de Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Correo Electrónico:</label>
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
