
import React from 'react';
import { BiSearch } from 'react-icons/bi';

import './Search.css';


const Search3 = () => {

  return (
    <div className='search'
         id='search'
    >
      <h2>
        Search for recipes Now!
      </h2>

      <div className='search-row'>
        <div className='search-input-cont'>
          <input className='search-input'
                 id='search-input'
                 type='text'
                 placeholder='panecackes...'
          />
        </div>

        <div className='search-separator'></div>
        
        <button className='search-button'
                id='search-button'
                type='button'
        >
          <BiSearch className='search-icon' />
          Search
        </button>
      </div>
    </div>
  );
};


export default Search3;