import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faInstagram, faViber } from '@fortawesome/free-brands-svg-icons';

import './social-icons.scss';

const SocialIcons = () => {
  return (
    <div className='social-icons'>
      <a className='social-icons__icon' href="#">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a className='social-icons__icon' href="#">
        <FontAwesomeIcon icon={faTelegram} />
      </a>
      <a className='social-icons__icon' href="#">
        <FontAwesomeIcon icon={faViber} />
      </a>
    </div>
  );
};

export default SocialIcons;
