import React from 'react';
import HeaderForOthers from './HeaderForOthers';
import Panel from './Panel';
import { PrimarySchoolPage } from './SchoolPages'; // Updated import
import { MiddleSchoolPage } from "./SchoolPages";   // Updated import
import { HighSchoolPage } from "./SchoolPages"; // Updated import with alias

const AcademicsComp = () => {
  return (
    <div>
      <HeaderForOthers />
      <Panel src="/gal2.jpg" content="Academics" />
      <div>
        <PrimarySchoolPage />
        <MiddleSchoolPage />
        <HighSchoolPage />
      </div>
    </div>
  );
};

export default AcademicsComp;