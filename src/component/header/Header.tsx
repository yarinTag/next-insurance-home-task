import React from 'react';

import './Header.css';

const Header = () => {
  return (
    <header className='site-header'>
      <div className='logo-container'>
        <img
          src='/image/Logo2@2x.png'
          alt='Desktop Logo'
          className='desktop-logo'
        />
        <img src='/image/Logo2.png' alt='Mobile Logo' className='mobile-logo' />
      </div>
    </header>
  );
};

export default Header;
