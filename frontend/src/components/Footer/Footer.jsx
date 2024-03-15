
import React from 'react';

import './Footer.css';
import Favicon from '../../assets/favicon.png';

const Footer = () => {

  return (
    <div className='footer'>
      <div className='footer-container'
           id='footer'
      >
        <div className='logo'>
          <img src={Favicon} alt='logoface' className='logoface' />
          <a href='/'>
            <p className='sitename reversed'>
              Yammy
            </p>
          </a>
        </div>

        <div className='footer-cols'>
          <div className='footer-col'>
            <p style={{margin: '0px'}}>
              Explore wild tastes effortlessly.
            </p>

            <div className='btn-container'>
              <a className='support-button'
                 title='Support Dev'
                 style={{backgroundColor: 'rgb(26, 26, 26)'}}
                 href='/support-dev'
                 target='_blank'
              >
                <span className='support-text'>
                <img className='support-img'
                     src={Favicon}
                     alt='Support Dev'
                />
                  Support Dev
                </span>
              </a>
            </div>
          </div>

          <div className='footer-col'>
            <div className='reversed menu-item-header'>
              LEGAL
            </div>
            <a href='/about-us'
               className='menu-item reversed' 
            >
              About Us
            </a>
            <a className='menu-item exclude'
               href='/contact-us'
            >
              Contact Us
            </a>
            <a className='menu-item reversed'
               href='/terms'
            >
              Terms of service
            </a>
            <a className='menu-item reversed' 
               href='/privacy-policy'
            >
              Privacy Policy
            </a>
          </div>

          <div className='footer-col'>
            <div className='reversed menu-item-header'>
              LET'S CONNECT
            </div>
            <a className='menu-item reversed'
               href='https://www.youtube.com/'
               target='_blank'
            >
              Youtube
            </a>
            <a className='menu-item reversed exclude'
               href='https://www.twitter.com/'
               target='_blank'
            >
              Twitter
            </a>
            <a className='menu-item reversed exclude'
               href='https://facebook.com/'
               target='_blank'
            >
              Facebook
            </a>
            <a className='menu-item reversed exclude'
               href='https://instagram.com/'
               target='_blank'
            >
              Instagram
            </a>
          </div>
        </div>

        <div style={{width: '100%', height: '1px', backgroundColor: 'var(--text)', opacity: 0.1, marginTop: '1em'}}></div>

        <div>
          <p>
            Made by&nbsp;
            <a className='link reversed exclude'
               href='https://twitter.com/LightRyuma/'
               target='_blank'
            >
              @LightRyuma
            </a>
            &nbsp;
            <a className='link reversed exclude'
               href='https://twitter.com/AbdelhamidMa23/'
               target='_blank'
            >
              @AbdelhamidMa23
            </a>
          </p>

          <small>
            Copyright © 2024 All Rights Reserved.&nbsp;
            <a className='link reversed exclude'
               href='https://github.com/Hmddev23/YAMMY/blob/main/README.md'
               target='_blank'
            >
              Yammy
            </a>
          </small>
        </div>
      </div>
    </div>
  )
}


export default Footer;