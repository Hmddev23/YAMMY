 
import React from 'react';

import './Search.css';


const SearchLoader = () => {
  return (
    <>
      <svg className='loader-1'
           xmlns='http://www.w3.org/2000/svg'
           x='0px' y='0px'
           viewBox='0 0 100 100'
      >
        <rect fill='none' stroke='var(--primary)'
              strokeWidth='4'
              x='25' y='25'
              width='50' height='50'
        >
          <animateTransform id='strokeBox'
                            attributeName='transform' attributeType='XML'
                            begin='rectBox.end' dur='0.5s' type='rotate'
                            from='0 50 50' to='180 50 50'
          />
        </rect>
        <rect x='27' y='27' fill='var(--primary)' width='46' height='50'>
          <animate id='rectBox'
                   attributeName='height' attributeType='XML'
                   begin='0s;strokeBox.end' dur='0.7s'
                   from='50' to='0' fill='freeze'
          />
        </rect>
      </svg>
    </>
  );
}


export default SearchLoader;