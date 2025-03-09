import React from 'react';
import HeaderForOthers from './HeaderForOthers';
import Panel from './Panel';
import { PrimarySchoolPage, MiddleSchoolPage, HighSchoolPage } from './SchoolPages';

const AcademicsComp = () => (
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

export default AcademicsComp;
