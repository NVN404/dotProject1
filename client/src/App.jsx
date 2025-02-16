import React from 'react';

import Header from './components/Header';
import Academics from './components/Academics';
import Profiles from './components/Profiles';
import StatsCounter from './components/StatsCounter';



const App = () => {
  return (
    <div>
      <Header />
      <Profiles />
      <StatsCounter />
      <Academics />
    </div>
  )
}

export default App
