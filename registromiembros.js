import React, { useState } from 'react';

const Register = () => {
  // Estado para almacenar los valores del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    group: 'Amigos sobre ruedas' // Valor por defecto
  });

  // Estado para almacenar errores del formulario
  const [errors, setErrors] = useState({});

  // Función para manejar cambios en los inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Validar el formulario antes de enviarlo
  const validateForm = () => {
    let formErrors = {};

    if (!formData.name) {
      formErrors.name = "El nombre es obligatorio";
    }
    if (!formData.email) {
      formErrors.email = "El correo es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "El correo no es válido";
    }
    if (!formData.password) {
      formErrors.password = "La contraseña es obligatoria";
    } else if (formData.password.length < 6) {
      formErrors.password = "La contraseña debe tener al menos 6 caracteres";
    }
    if (!formData.phone) {
      formErrors.phone = "El teléfono es obligatorio";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      formErrors.phone = "El teléfono debe tener 10 dígitos";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Datos del formulario:', formData);
      // Aquí podrías hacer la llamada al servidor o API
    }
  };

  return (
    <div>
      <h2>Registro de Miembro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>
        <div>
          <label>Correo Electrónico:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>
        <div>
          <label>Teléfono:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
        </div>
        <div>
          <label>Grupo:</label>
          <select
            name="group"
            value={formData.group}
            onChange={handleChange}
          >
            <option value="Amigos sobre ruedas">Amigos sobre ruedas</option>
            <option value="Asociación California">Asociación California</option>
            <option value="Voluntarios">Voluntarios</option>
            <option value="Asociación Jalisco">Asociación Jalisco</option>
          </select>
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
