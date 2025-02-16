import React from 'react';

import Header from './components/Header';
import Academics from './components/Academics';
import Profiles from './components/Profiles';
import StatsCounter from './components/StatsCounter';
import ComponentCar from './components/Carousel';

const App = () => {
  return (
    <div>
      <Header />
      <ComponentCar/>
      <Profiles />
      <StatsCounter />
      <Academics />
    </div>
  )
}

export default App
