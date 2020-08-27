/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import './Header.scss';

export default function Header() {
  return (
    <header className='navbar'>
      <h3 className='navbar-heading' data-testid='navbar-main'>
        React CryptoCoin AG-Grid
      </h3>
    </header>
  );
}