
import React from 'react';

import './Cta.css';


const Cta = () => {
  return (
    <div className='last-cta'
         id='cta'
    >
      <h2>
        Endless
        <span className='color-effect'> culinary </span>
        delights with Yammy.
      </h2>

      <h5>
        Follow us for more updates!
      </h5>

      <a className='primary-button primary-text-contrast exclude'
         href='https://twitter.com/AbdelhamidMa23'
         target='_blank'
         style={{color: 'rgb(0, 0, 0)'}}
      >
        Explore More
      </a>
    </div>
  );
}


export default Cta;