
import React from 'react';

import './Instructions.css';


const Instructions = () => {
  return (
    <div className='info-box secondary-text-contrast'
         id='how'
         style={{color: 'var(--text)'}}
    >
      <div className='info-box-left'>
        <h3 style={{margin: '0px'}}>
          How Does it Work?
        </h3>
        <h5>
          Discover your unique musical vibe in just 6 step.
        </h5>
      </div>

      <div className='info-box-right'>
        <p className='one step'>
          Open the Spotify app or website and search for the song you want to get the link for.
        </p>
        <p className='two step'>
          Once you find the song, click on it to open the song page.
        </p>
        <p className='three step'>
          On the song page, locate the "..." button next to the song title and click on it.
        </p>
        <p className='four step'>
          From the dropdown menu that appears, select either "Copy Song Link" or "Share,"
          and then choose the "Copy Link" option.
        </p>
        <p className='five step'>
          Copy the song link by right-clicking and selecting 'Copy' or using the shortcut Ctrl+C (Windows) or Command+C (Mac).
        </p>
        <p className='six step'>
          Next, navigate to the dedicated search bar where you want to input the song link.
        </p>
      </div>
    </div>
  );
}


export default Instructions;