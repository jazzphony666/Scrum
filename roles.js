import React, { useState } from 'react';
import UserProfile from './UserProfile';
import MemberProfile from './MemberProfile';

function App() {
  // Simulación de usuarios
  const [currentUser] = useState({
    name: 'Juan Pérez',
    email: 'juanperez@example.com',
    phone: '555-1234',
    role: 'miembro', // Puede ser 'usuario' o 'miembro'
    group: 'Amigos sobre ruedas' // Solo si es miembro
  });

  return (
    <div className="App">
      {currentUser.role === 'miembro' ? (
        <MemberProfile member={currentUser} />
      ) : (
        <UserProfile user={currentUser} />
      )}
    </div>
  );
}

export default App;
