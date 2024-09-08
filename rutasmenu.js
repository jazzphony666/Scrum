import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import ApparatusList from './ApparatusList';
import AddApparatus from './AddApparatus';
import EditApparatus from './EditApparatus';
import DeleteApparatus from './DeleteApparatus';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/inventory" element={<ApparatusList />} />
          <Route path="/add-apparatus" element={<AddApparatus />} />
          <Route path="/edit-apparatus" element={<EditApparatus />} />
          <Route path="/delete-apparatus" element={<DeleteApparatus />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
