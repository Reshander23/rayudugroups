import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import './styles/global.css';

import Navbar from "./Common/Navbar";

import Hero from "./Components/Hero";

import Trusted from "./Components/Trusted";

import Transforming from "./Components/Tranforming";

import Businesspage from "./Components/Businessmodel/Businesspage";

import Recruiter from "./Components/Businessmodel/Recruiter";

import HRMS from "./Components/Businessmodel/Hrms";
import Jobs from "./Components/Businessmodel/Jobs";
import LMS from "./Components/Businessmodel/Lms";

import Insights from "./Components/Insights";

import FAQ from "./Components/FAQ";

import Contact from "./Common/Contact";





function App() {

  return (

    <Router>

      <Navbar/>

      <Hero/><br/>

      <Trusted/>

      <Transforming/>

      <Businesspage/>

      <Recruiter/>

      <HRMS/>
      <Jobs/>
<LMS/>
      <Insights/>

      <hr/>

      <FAQ/>

      <Contact/>

    </Router>

  );

}



export default App;

