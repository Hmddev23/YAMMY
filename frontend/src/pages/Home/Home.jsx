
import React from 'react';

import Hero from '../../components/Hero/Hero';
import Why from '../../components/Why/Why';
import Search from '../../components/Search/Search';
import Bento from '../../components/Bento/Bento';
import Instructions from '../../components/Instructions/Instructions';
import Pricing from '../../components/Pricing/Pricing';
import Testimonials from '../../components/Testimonials/Testimonials';
import Faq from '../../components/Faq/Faq';
import Tools from '../../components/Tools/Tools';
import Cta from '../../components/Cta/Cta';
import './Home.css';


const Home = () => {

  return (
    <div className='home'>
      <main> 
				<Hero />
				<Why />
        <Search />
        <Bento />
        <Instructions />
        <Pricing />
        <Testimonials />
        <Faq />
        {/* <Tools /> */}
        <Cta />
      </main>
    </div>
  )
}


export default Home;