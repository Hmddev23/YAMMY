
import React, { useState } from 'react';
import {
  FaStar,
  FaStarHalfAlt,
  FaUserAlt
} from 'react-icons/fa';

import './Testimonials.css';


const Testimonials = () => {
  const [stars_nbr, setStars_nbr] = useState([5, 3.5, 4.5]);

  const renderStars = (stars_nbr) => {
    const starElements = [];
    const fullStars = Math.floor(stars_nbr);
    const hasHalfStar = stars_nbr % 1 !== 0;
  
    for (let i = 0; i < fullStars; i++)
      starElements.push(<FaStar key={`full-${i}`} className='rating' size={30} fill='var(--accent)' />);
  
    if (hasHalfStar)
      starElements.push(<FaStarHalfAlt key='half' className='rating' size={30} fill='var(--accent)' />);
  
    return starElements;
  };

  return (
    <div className='section column'
         id='testimonials'
    >
      <div className='part-heading center'>
        <h2>
          Testimonials
        </h2>
        <h5>
          What (potential) premium subscribers are saying about this tool.
        </h5>
      </div>
      <div className='section-cards'>
        <div className='section-card'>
          <div className='reviewer'>
            <div className='reviewer-img r-one'>
              <FaUserAlt className='reviewer-icon' size={40} fill='var(--black)' />
            </div>
            <div className='reviewer-name'>
              @CodeMaster
              <br />
              <span style={{opacity: '0.5'}}>
                Software Engineer
              </span>
            </div>
          </div>

          <div className='rating'>
          {
            renderStars(stars_nbr[0])
          }
          </div>
          <p className='review'>
            "Spotidown fuels my creativity. Spotify data in real-time? It's a songwriter's dream."
          </p>
        </div>

        <div className='section-card'>
          <div className='reviewer'>
            <div className='reviewer-img r-two'>
              <FaUserAlt className='reviewer-icon' size={40} fill='var(--black)' />
            </div>
            <div className='reviewer-name'>
              @MelodyExplorer
              <br />
              <span style={{opacity: '0.5'}}>
                Music Blogger
              </span>
            </div>
          </div>

          <div className='rating'>
          {
            renderStars(stars_nbr[1])
          }
          </div>
          <p className='review'>
            "I'm constantly amazed by Spotidown's efficiency. It fetches data from Spotify's web
            API flawlessly, allowing me to explore a world of melodies effortlessly."
          </p>
        </div>

        <div className='section-card'>
          <div className='reviewer'>
            <div className='reviewer-img r-three'>
              <FaUserAlt className='reviewer-icon' size={40} fill='var(--black)' />
            </div>
            <div className='reviewer-name'>
              @GameWizard
              <br />
              <span style={{opacity: '0.5'}}>
                Game Developer
              </span>
            </div>
          </div>

          <div className='rating'>
          {
            renderStars(stars_nbr[2])
          }
          </div>
          <p className='review'>
            "Spotidown is a game-changer for audio professionals. Its accurate data fetching and
            real-time updates ensure I always have the latest information at my fingertips."
          </p>
        </div>
      </div>
    </div>
  );
}


export default Testimonials;