import React, { useState } from 'react';
import './UserProfile.css';

const UserProfile = () => {
    // Estado para los datos del usuario y para el modo de edición
    const [user, setUser] = useState({
        profilePicture: 'https://via.placeholder.com/150',
        name: 'Juan Pérez',
        email: 'juan.perez@example.com',
        phone: '+1234567890',
        details: 'Desarrollador Full Stack con experiencia en React y Node.js.'
    });
    const [isEditing, setIsEditing] = useState(false);

    // Manejar cambios en el formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    };

    // Guardar cambios
    const handleSave = () => {
        setIsEditing(false);
        // Aquí podrías agregar lógica para guardar los datos en una base de datos o API
    };

    return (
        <div className="user-profile">
            <img src={user.profilePicture} alt="Foto de perfil" className="profile-picture" />
            
            {isEditing ? (
                // Modo edición
                <div className="edit-profile">
                    <input 
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        placeholder="Nombre"
                    />
                    <input 
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        placeholder="Correo"
                    />
                    <input 
                        type="tel"
                        name="phone"
                        value={user.phone}
                        onChange={handleChange}
                        placeholder="Teléfono"
                    />
                    <textarea 
                        name="details"
                        value={user.details}
                        onChange={handleChange}
                        placeholder="Detalles"
                    />
                    <button onClick={handleSave}>Guardar</button>
                    <button onClick={() => setIsEditing(false)}>Cancelar</button>
                </div>
            ) : (
                // Modo vista
                <div className="view-profile">
                    <h2>{user.name}</h2>
                    <p><strong>Correo:</strong> {user.email}</p>
                    <p><strong>Teléfono:</strong> {user.phone}</p>
                    <p><strong>Detalles:</strong> {user.details}</p>
                    <button onClick={() => setIsEditing(true)}>Editar Perfil</button>
                </div>
            )}
        </div>
    );
};

export default UserProfile;
