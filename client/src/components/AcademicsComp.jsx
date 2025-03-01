import React from 'react';
import HeaderForOthers from './HeaderForOthers';
import Panel from './Panel';
import { KindergartenPage } from './SchoolPages'; // Updated import
import { PrimarySchool } from "./SchoolPages";   // Updated import
import { HighSchoolPage as HighSchool } from "./SchoolPages"; // Updated import with alias

const AcademicsComp = () => {
  return (
    <div>
      <HeaderForOthers />
      <Panel src="/gal2.jpg" content="Academics" />
      <div>
        <KindergartenPage />
        <PrimarySchool />
        <HighSchool />
      </div>
    </div>
  );
};

export default AcademicsComp;