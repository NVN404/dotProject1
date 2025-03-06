import React from 'react';

import Hero from './Hero';
import Profiles from './Profiles';
import StatsCounter from './StatsCounter';
import TopperPage from './Toppers';
import Academics from './Academics';
import Motto from './motto';

const Home = () => {
  return (
    <div className='snap-mandatory'>
        <Hero />
        <div className='snap-center'>
          <Profiles />
        </div>
        <StatsCounter />
        {/* <Motto /> */}
        <div className='snap-center'>
          <TopperPage />
        </div>
        <div className='snap-center'>
          <Academics />
        </div>
    </div>
  )
}

export default Home
