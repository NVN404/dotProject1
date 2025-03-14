import React from "react";

import Hero from "./Hero";
import Profiles from "./Profiles";
import StatsCounter from "./StatsCounter";
import TopperPage from "./Toppers";
import Academics from "./Academics";

const Home = () => {
  return (
    <div className="snap-mandatory">
      <Hero />
      <Profiles className="snap-center" />
      <StatsCounter />
      <TopperPage className="snap-center" />
      <Academics className="snap-center" />
    </div>
  );
};

export default Home;
