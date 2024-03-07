
import React, { useEffect } from 'react';
import { GiPolarStar } from 'react-icons/gi';

import '../components/Hero/Hero';


const useGlitterTextEffect = (text) => {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const animate = (star) => {
    star.style.setProperty('--star-left', `${rand(-10, 100)}%`);
    star.style.setProperty('--star-top', `${rand(-40, 80)}%`);

    star.style.animation = 'none';
    star.offsetHeight;
    star.style.animation = '';
  }

  useEffect(() => {
   let index = 0;
    const interval = 500;
    const stars = document.getElementsByClassName('magic-star');

    const intervalId = setInterval(() => {
      animate(stars[index % stars.length]);
      index++;
    }, interval / 3);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <span className='glitter-effect'>
      <span className='magic-star'>
        <GiPolarStar/>
      </span>
      <span className='magic-star'>
        <GiPolarStar/>
      </span>
      <span className='magic-star'>
        <GiPolarStar/>
      </span>
      {text}
    </span>
  );
}


export default useGlitterTextEffect;