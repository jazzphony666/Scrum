import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import UserProfile from './UserProfile';
import MemberProfile from './MemberProfile';

function App() {
  const currentUser = {
    name: 'Juan Pérez',
    email: 'juanperez@example.com',
    role: 'miembro'
  };

  return (
    <Router>
      <Routes>
        {/* Ruta para inicio de sesión */}
        <Route path="/login" element={<Login />} />

        {/* Rutas para perfiles según el rol */}
        <Route
          path="/profile"
          element={
            currentUser.role === 'miembro' ? (
              <MemberProfile member={currentUser} />
            ) : (
              <UserProfile user={currentUser} />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
