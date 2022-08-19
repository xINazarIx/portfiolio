import React from 'react';

import ConnectButton from '../connect-button/connect-button';
import NavBar from '../nav-bar';
import SocialIcons from '../social-icons';

import './header.scss';

const Header = () => {
  return (
    <div className='header'>
      <div className="container">
        <div className="header-inner">
          <NavBar />
          <div className='header-right'>
            <div className='header-social-links'>
              <SocialIcons />
            </div>
            <ConnectButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;