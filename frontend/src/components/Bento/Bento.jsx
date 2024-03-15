
import React from 'react';
import { BsSpotify } from 'react-icons/bs';

import './Bento.css';


const Bento = () => {
  return (
    <div className='part6 bento'
         id='bento'
    >
      <ul className='bento-wrapper'>
        <li className='first-row-col1 primary-color-box primary-text-contrast'
            style={{color: 'rgb(0, 0, 0)'}}
        >
          <h2>
            1M+ Recipes
          </h2>
          <span style={{fontSize: 'var(--p)', fontWeight: 'normal'}}>
            and still growing!
          </span>
        </li>

        <li className='first-row-col2 secondary-color-box secondary-text-contrast'
            style={{color: 'var(--text)'}}
        >
          <h3>
            100% Free!
          </h3>
          <span style={{fontSize: 'var(--p)', fontWeight: 'normal'}}>
            Forever.
          </span>
        </li>

        <li className='second-row-col1 text-color-box'>
          <span style={{fontWeight: 'bold', zIndex: '5'}}>
            <h4>
              On the Spot Metadata
            </h4>
          </span>
          <a className='link bento-link exclude'
             style={{fontSize: 'var(--p)', fontWeight: 'normal'}}
             href='https://rapidapi.com/'
             target='_blank'
          >
            Rapid's Web API
          </a>
        </li>

        <li className='second-row-col2 accent-color-box'
            style={{color: 'rgb(255, 255, 255)'}}
        >
          <span style={{fontWeight: 'bold'}}>
            <h4>
              7M+ Users
            </h4>
          </span>
          <a className='link bento-link exclude blue-bento-box'
             style={{fontSize: 'var(--p)', fontWeight: 'normal'}}
             href='#search'
          >
            Check it out on Yammy.io
          </a>
        </li>
      </ul>
    </div>
  );
}


export default Bento;