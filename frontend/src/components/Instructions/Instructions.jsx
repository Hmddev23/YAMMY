
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
          Uncover your distinctive culinary style in just 6 simple steps with Yammy.
        </h5>
      </div>

      <div className='info-box-right'>
        <p className='one step'>
          Explore Diverse Recipes: Browse through a wide variety of recipes spanning different cuisines, ingredients, and cooking methods.
        </p>
        <p className='two step'>
          Save Favorites: Save your favorite recipes to your profile for easy access and reference later on.
        </p>
        <p className='three step'>
          Personalized Recommendations: Receive tailored recipe suggestions based on your browsing history, likes, and preferences.
        </p>
        <p className='four step'>
          Try New Flavors: Experiment with new ingredients, flavors, and cooking techniques to expand your culinary horizons.
        </p>
        <p className='five step'>
          Share Culinary Adventures: Connect with fellow food enthusiasts, share cooking experiences, and exchange tips and tricks.
        </p>
        <p className='six step'>
          Find Your Signature Dish: Discover the recipe that resonates with your taste buds and reflects your unique culinary style.
        </p>
      </div>
    </div>
  );
}


export default Instructions;