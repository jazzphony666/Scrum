import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Ruta de la página de solicitud de restablecimiento */}
          <Route path="/forgot-password" element={<ForgotPassword />} />
          {/* Ruta de la página de restablecimiento con el token */}
          <Route path="/reset-password/:token" element={<ResetPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
