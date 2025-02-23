import React,{useState} from 'react';

import Academics from './components/Academics';
import Profiles from './components/Profiles';
import StatsCounter from './components/StatsCounter';
import Toppers from './components/Toppers';
import Footer from './components/Footer';
import Hero from './components/Hero';

import { AdmissionContext } from './components/context/AdmissionContext';

const App = () => {
  const [openAdmissionForm,setOpenAdmissionForm]=useState(false);
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full h-full -z-50">
        <div
          className="bg-[url('./bg.jpg')] bg-cover bg-center w-full h-full opacity-[50%]"
        >      
        </div>
      </div>
      <AdmissionContext.Provider value={{openAdmissionForm,setOpenAdmissionForm}}>
            <Hero />
            <Profiles />
            <StatsCounter />
            <Toppers />
            <Academics />
            <Footer />
      </AdmissionContext.Provider>
    </div>
  );
};

export default App;
