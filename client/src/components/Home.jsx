import React from 'react';

import Hero from './Hero';
import Profiles from './Profiles';
import StatsCounter from './StatsCounter';
import TopperPage from './Toppers';
import Academics from './Academics';

const Home = () => {
  return (
    <div>
        <Hero />
        <Profiles />
        <StatsCounter />
        <TopperPage />
        <Academics />
    </div>
  )
}

export default Home
