
import React from 'react';

import './Tools.css';


const Tools = () => {
  return (
    <div className='section column'
         id='tools'
    >
      <div className='part-heading center'>
        <h2>
          Highlighted Tools
        </h2>
        <h5>
          Just a selection of valuable tools and assets.
        </h5>
      </div>

      <div className='section-cards tools-col'>
        <div className='tool-item main-page'>
          <a className='tool-link'
             style={{fontSize: 'var(--p)', padding: '2em 1em'}}
             href='/xipper'
             target='_blank'
          >
            Xipper: Your Ultimate X Scraper Solution.
          </a>
          <div className='col1-tool-link-bg'></div>
        </div>

        <div className='tool-item main-page'>
          <a className='tool-link'
             style={{fontSize: 'var(--p)', padding: '2em 1em'}}
             href='/textify'
             target='_blank'
          >
            Textify: Edit and Convert Text to Word Files Effortlessly.
          </a>
          <div className='col1-tool-link-bg'></div>
        </div>

        <div className='tool-item main-page'>
          <a className='tool-link'
             style={{fontSize: 'var(--p)', padding: '2em 1em'}}
             href='/redditor'
             target='_blank'
          >
            Redittor: A streamlined Reddit scraper for efficient data extraction.
          </a>
          <div className='col1-tool-link-bg'></div>
        </div>
      </div>
    </div>
  );
}


export default Tools;