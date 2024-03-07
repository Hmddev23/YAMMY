
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
            Tasty
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
        <a href='/Donate'
           target='_blank'
           className='menu-item menu-item-mobile exclude'
        >
          Donate&nbsp;
          <BsArrowUpRightSquare size={14} />
        </a>
        <a href='/download'
           className='menu-item menu-item-mobile'
        >
          Download
        </a>

        <div className='dropdown'>
          <button className='dropbutton'
                  onClick={(e) => handleToggle(e)}
          >
            Language&nbsp;
            <IoIosArrowDown />
          </button>
          <div className='dropdown-content'>
            <a href='/'
               className='menu-item-mobile'
            >
              English
            </a>
            <a href='/sp'
               className='menu-item-mobile'
            >
              Spanish
            </a>
            <a href='/fr'
               className='menu-item-mobile'
            >
              Frensh
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}


export default NavBar;