import React from "react";
import AdmissionForm from "./AdmissionForm";
import Panel from "./Panel";
import HeaderForOthers from "./HeaderForOthers";
const Admission = () => {
  return (
    <div>
      <HeaderForOthers />
      <Panel src={"./gal6.jpg"} content={"Admission"} />
      <AdmissionForm />
    </div>
  );
};

export default Admission;
