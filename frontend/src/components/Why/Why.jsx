
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
        Why Tasty?
      </h2>
      
      <div className='section-cards' >
        <div className='section-card' >
          <SiRescuetime size={112} className='section-card-img' />
          <h4 className='highlight'>
            Time-saving
          </h4>
          <p>
            Instantly find music data without the search hassle. No wasted hours, just quick results!
          </p>
        </div>

        <div className='section-card'>
          <SiRealm size={112} className='section-card-img' />
          <h4 className='highlight'>
            RealMatters
          </h4>
          <p>
            Experience effortless music discovery mirroring real Spotify interactions.
          </p>
        </div>

        <div className='section-card'>
          <SiSimpleanalytics size={112} className='section-card-img' />
          <h4 className='highlight'>
            It’s Easy
          </h4>
          <p>
            Explore music seamlessly with just a few clicks. Discover your favorite tracks, albums, and playlists instantly.
          </p>
        </div>
      </div>
    </div>
  );
}


export default Why;