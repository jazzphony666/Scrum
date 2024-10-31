// Contact.jsx
import React from 'react';

function Contact({ name, phone }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '5px' }}>
      <h3>{name}</h3>
      <p>{phone}</p>
    </div>
  );
}

export default Contact;
