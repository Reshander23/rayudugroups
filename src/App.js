
import { BrowserRouter as Router } from 'react-router-dom';

import './styles/global.css';

import Navbar from "./Common/Navbar";

import Hero from "./Components/Hero";

import Trusted from "./Components/Trusted";

import Transforming from "./Components/Tranforming";

import Businesspage from "./Components/Businessmodel/Businesspage";

import Recruiter from "./Components/Businessmodel/Recruiter";
import Hrms from "./Components/Businessmodel/Hrms.js"

import Jobs from "./Components/Businessmodel/Jobs";


import LMS from "./Components/Businessmodel/Lms";
import Lr from "./Components/Businessmodel/Lr";
import Feature from "./Components/Feature.js";
import Insights from "./Components/Insights";
import FAQ from "./Components/FAQ";
import Contact from "./Common/Contact";
import Footer from "./Common/Footer.js"






function App() {

  return (

    <Router>

      <Navbar/>

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
      <Footer/>

    </Router>

  );

}



export default App;

