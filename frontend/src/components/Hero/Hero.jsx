
import React from 'react';
import { CgMouse } from 'react-icons/cg';

import { FormImg } from '../../assets/svgs';
import './Hero.css';


const Hero = () => {
  return (
    <div className='hero' >
      <div className='hero-text' >
        <a href='/announcement'
           className='latest'
        >
        	✨ Welcome my friend!
        </a>
        <h1>
					{/* Explore {useEncryptTextEffect('Sounds')}: */}
          Yammy: Flavorful
          <br />
          <span className='color-effect'>
            Fuel
          </span>
          &nbsp;,&nbsp;
          <span className='font-effect'>
            for
          </span>
					<br />
					<span className='font-effect'>
            Fitness!
          </span>
          &nbsp;
        </h1>

        <h5>
          Culinary sanctuary with diverse recipes, vibrant
          <br />community and personalized experiences for all.
        </h5>

        <div className='hero-cta'>
          <a href='/get-started'
             className='primary-button primary-text-contrast highlight-toolbar'
             style={{color: 'rgb(0, 0, 0)'}}
          >
            Get Started
          </a>
          <a href='/how'
             className='secondary-button secondary-text-contrast'
             style={{color: 'var(--text)'}}
          >
            How does it work?
          </a>
        </div>

        <div className='hero-scroll'>
					<CgMouse size={34} />
          <p>
						Scroll below to discover more.
          </p>
        </div>
      </div>

      <div className='hero-img' >
            <FormImg className='mondrian' />
      </div>
    </div>
  );
}


export default Hero;