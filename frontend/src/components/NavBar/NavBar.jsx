
import React, { useState } from 'react';
import { BsArrowUpRightSquare } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';

import './NavBar.css';
import Favicon from '../../assets/favicon.png';


const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = (e) => {
    const dropdownButton = document.querySelector('.dropbutton');
    if (dropdownButton && dropdownButton.contains(event.target)) {
      return;
    }
    setIsActive(!isActive);
  };

  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={Favicon} alt='logoface' className='logoface' />
        <a href='/'>
          <p className='sitename'>
            Yammy
          </p>
        </a>
      </div>

      <div className='ham-menu'>
        <button id='hamburger'
                className={isActive ? 'active' : ''}
                onClick={(e) => handleToggle(e)}
        >
          <span ></span>
          <span ></span>
        </button>
      </div>

      <div className={`menu ${isActive ? '' : 'hide'}`}
           onClick={(e) => handleToggle(e)}   
      >
        <a href='/login'
            className='primary-button primary-text-contrast highlight-toolbar'
            style={{color: 'rgb(0, 0, 0)'}}
        >
          Login
        </a>
        <a href='/register'
            className='secondary-button secondary-text-contrast'
            style={{color: 'var(--text)'}}
        >
          Register
        </a>
      </div>
    </div>
  )
}


export default NavBar;