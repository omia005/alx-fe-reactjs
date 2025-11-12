import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
  return (
    <nav style={{ padding: '20px', borderBottom: '1px solid #ccc', backgroundColour: 'white', justifyContent:'center' }}>
      <ul style = {{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0, padding: 0 }}>
        <li>
          <link to="/" style={{ textDecoration: 'none', color: 'blue' }}>Home</link>
        </li>
        <li>
          <link to="/About" style={{ textDecoration: 'none', color: 'blue' }}>About</link>
        </li>
        <li>
          <link to="/Services" style={{ textDecoration: 'none', color: 'blue' }}>Services</link>
        </li>
        <li>
          <link to="/Contact" style={{ textDecoration: 'none', color: 'blue' }}>Contacts</link>
        </li>
      </ul> 
    </nav>
  );
}


export default Navbar;            
