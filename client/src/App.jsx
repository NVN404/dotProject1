import React from 'react';

import Header from './components/Header';
import Academics from './components/Academics';
import Profiles from './components/Profiles';
import StatsCounter from './components/StatsCounter';
import MainCarousel from './components/Carousel';
import Toppers from './components/Toppers';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

const App = () => {
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full h-full -z-50">
        <div 
          className="bg-[url('./bg.jpg')] bg-cover bg-center w-full h-full opacity-5"
        ></div>
      </div>

      <Header />
      <MainCarousel />
      <Profiles />
      <StatsCounter />
      <Academics />
      <Toppers />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
