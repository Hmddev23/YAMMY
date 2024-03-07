
import React from 'react';
import { GiPolarStar } from 'react-icons/gi';
import { FaCheck } from 'react-icons/fa';

import './Pricing.css';


const Pricing = () => {
  return (
    <div className='pricing'
         id='sub'
    >
      <div className='part-heading center'>
        <h2>
          Plans &amp; Pricing
        </h2>
        <h5>
          The tool comes at absolutely no cost! This section is for testing UI.
        </h5>
      </div>
      
      <div className='pricing-cards'>
        <div className='pricing-card'>
          <div className='pricing-card-text'>
            <div className='promo'
                 style={{visibility: 'hidden'}}
            >
              <p className='promo-text'>
                None
              </p>
            </div>
            <h4>
              Basic
            </h4>
            <p>
              $0.00 / month
            </p>
            <div className='pricing-list'>
              <div className='list'>
                <FaCheck className='check-icon' size={29} fill='var(--accent)' />
                <p className='list-item'>
                  Access to basic metadata for Spotify songs.
                </p>
              </div>
              <div className='list'>
                <FaCheck className='check-icon' size={29} fill='var(--accent)' />
                <p className='list-item'>
                  Limited number of requests per day
                </p>
              </div>
            </div>
          </div>
          <a className='secondary-button secondary-text-contrast highlight-toolbar'
             href='/pricing'
             target='_blank'
             style={{color: 'var(--text)'}}
          >
            Try for Free
          </a>
          <div className='pricing-bg'></div>
        </div>

        <div className='pricing-card'>
          <div className='pricing-card-text'>
            <div className='promo'>
              <GiPolarStar size={28} fill='var(--primary)' />
              <p className='promo-text'>
                Most Popular
              </p>
            </div>
            <h4>
              Pro
            </h4>
            <p>
              $15.00 / month
            </p>
            <div className='pricing-list'>
              <div className='list'>
                <FaCheck className='check-icon' size={29} fill='var(--accent)' />
                <p className='list-item'>
                  Unlimited access to metadata for Spotify songs.
                </p>
              </div>
              <div className='list'>
                <FaCheck className='check-icon' size={29} fill='var(--accent)' />
                <p className='list-item'>
                  Ad-free experience.
                </p>
              </div>
              <div className='list'>
                <FaCheck className='check-icon' size={29} fill='var(--accent)' />
                <p className='list-item'>
                  24/7 priority customer support.
                </p>
              </div>
              <div className='list'>
                <FaCheck className='check-icon' size={29} fill='var(--accent)' />
                <p className='list-item'>
                  Dedicated server resources for high-volume requests.
                </p>
              </div>
            </div>
          </div>
          <a className='primary-button primary-text-contrast'
             href='/pricing'
             target='_blank'
             style={{color: 'rgb(0, 0, 0)'}}
          >
            Upgrade now
          </a>
          <div className='pricing-bg best'></div>
        </div>

        <div className='pricing-card'>
          <div className='pricing-card-text'>
            <div className='promo'
                 style={{visibility: 'hidden'}}
            >
              <p className='promo-text'>
                None
              </p>
            </div>
            <h4>
              Enterprise
            </h4>
            <p>
              $19.00 / month
            </p>
            <div className='pricing-list'>
              <div className='list'>
                <FaCheck className='check-icon' size={29} fill='var(--accent)' />
                <p className='list-item'>
                  Unlimited access to metadata for Spotify songs.
                </p>
              </div>
              <div className='list'>
                <FaCheck className='check-icon' size={29} fill='var(--accent)' />
                <p className='list-item'>
                  Ad-free experience.
                </p>
              </div>
              <div className='list'>
                <FaCheck className='check-icon' size={29} fill='var(--accent)' />
                <p className='list-item'>
                  24/7 priority customer support.
                </p>
              </div>
              <div className='list'>
                <FaCheck className='check-icon' size={29} fill='var(--accent)' />
                <p className='list-item'>
                  Dedicated server resources for high-volume requests.
                </p>
              </div>
              <div className='list'>
                <FaCheck className='check-icon' size={29} fill='var(--accent)' />
                <p className='list-item'>
                  Detailed analytics and insights about the Spotify music data.
                </p>
              </div>
            </div>
          </div>

          <a className='secondary-button secondary-text-contrast'
             href='/pricing'
             target='_blank'
             style={{color: 'var(--text)'}}
          >
            Contact Sales
          </a>
          <div className='pricing-bg'></div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;