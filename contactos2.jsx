// ContactList.jsx
import React, { useState } from 'react';
import Contact from './Contact';

function ContactList() {
  // Lista de contactos de ejemplo
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Juan Pérez', phone: '123-456-7890' },
    { id: 2, name: 'Ana García', phone: '987-654-3210' },
    { id: 3, name: 'Luis Sánchez', phone: '555-123-4567' },
  ]);

  return (
    <div>
      <h2>Lista de Contactos</h2>
      {contacts.map((contact) => (
        <Contact key={contact.id} name={contact.name} phone={contact.phone} />
      ))}
    </div>
  );
}

export default ContactList;
