import React from 'react';

import Hero from "../Components/Hero";
import Trusted from "../Components/Trusted";
import Transforming from "../Components/Tranforming";
import Businesspage from "../Components/Businessmodel/Businesspage";
import Recruiter from "../Components/Businessmodel/Recruiter";
import Hrms from "../Components/Businessmodel/Hrms.js";
import Jobs from "../Components/Businessmodel/Jobs";
import LMS from "../Components/Businessmodel/Lms";
import Lr from "../Components/Businessmodel/Lr";
import Feature from "../Components/Feature.js";
import Insights from "../Components/Insights";
import FAQ from "../Components/FAQ";
import Contact from "../Common/Contactdetails.js";

const Mainpages = () => {
  return (
    <>
      <Hero/><br/>
      <Trusted/>
      <Transforming/>
      <Businesspage/>
      <Recruiter/>
      <Hrms/>
      <Jobs/>
      <LMS/>
      <Lr/>
      <Feature/>
      <Insights/>
      <hr/>
      <FAQ/>
      <Contact/>
    </>
  );
};

export default Mainpages;
