import React from 'react';
import './UserProfile.css';

const UserProfile = () => {
    const user = {
        profilePicture: 'https://via.placeholder.com/150', 
        name: 'Juan Pérez',
        email: 'juan.perez@example.com',
        phone: '+1234567890',
        details: 'Desarrollador Full Stack con experiencia en React y Node.js.'
    };

    return (
        <div className="user-profile">
            <img src={user.profilePicture} alt="Foto de perfil" className="profile-picture" />
            <h2>{user.name}</h2>
            <p><strong>Correo:</strong> {user.email}</p>
            <p><strong>Teléfono:</strong> {user.phone}</p>
            <p><strong>Detalles:</strong> {user.details}</p>
        </div>
    );
};

export default UserProfile;
