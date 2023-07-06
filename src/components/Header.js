import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div style={{ display: 'flex', gap: '30px', marginBottom: '20px' }}>
      <Link to="/">Main</Link>
      <Link to="/basket">Basket</Link>
    </div>
  );
}

export default Header;
