import React from 'react';

import Header from './components/Header';
import Academics from './components/Academics';
import Profiles from './components/Profiles';
import StatsCounter from './components/StatsCounter';
import MainCarousel from './components/Carousel';
import Toppers from './components/Toppers';

const App = () => {
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full h-full -z-50">
        <div 
          className="bg-[url('./bg.jpg')] bg-cover bg-center w-full h-full opacity-15"
        ></div>
      </div>

      <Header />
      <MainCarousel />
      <Profiles />
      <StatsCounter />
      <Academics />
      <Toppers />
    </div>
  );
};

export default App;
