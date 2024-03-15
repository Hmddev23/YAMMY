
import React from 'react';
import {
  SiSimpleanalytics,
  SiRealm,
  SiRescuetime
} from 'react-icons/si';

import './Why.css';


const Why = () => {

  return (
    <div className='section column'
         id='why'
    >
      <h2>
        Why Yammy?
      </h2>
      
      <div className='section-cards' >
        <div className='section-card' >
          <SiRescuetime size={112} className='section-card-img' />
          <h4 className='highlight'>
            Time-saving
          </h4>
          <p>
            Effortlessly discover delicious recipes without the search hassle. No wasted time, just tasty results
          </p>
        </div>

        <div className='section-card'>
          <SiRealm size={112} className='section-card-img' />
          <h4 className='highlight'>
            RealMatters
          </h4>
          <p>
            Enjoy seamless recipe discovery, mimicking real-life cooking experiences with Yammy's intuitive interface
          </p>
        </div>

        <div className='section-card'>
          <SiSimpleanalytics size={112} className='section-card-img' />
          <h4 className='highlight'>
            It’s Easy
          </h4>
          <p>
            Explore recipes effortlessly with a few clicks. Discover favorite dishes instantly, hassle-free."
          </p>
        </div>
      </div>
    </div>
  );
}


export default Why;