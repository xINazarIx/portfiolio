import React from "react";
import { NavLink } from 'react-router-dom';

import './nav-bar.scss';

const NavBar = () => {
  return (

    <div className='nav-bar'>
      <NavLink to='/' className='nav-bar__link'>Home</NavLink>
      <NavLink to='/skills' className='nav-bar__link'>Skills</NavLink>
      <NavLink to='/projects' className='nav-bar__link'>Projects</NavLink>
      <NavLink to='/resume' className='nav-bar__link'>Resume</NavLink>
    </div>

  );
};

export default NavBar;