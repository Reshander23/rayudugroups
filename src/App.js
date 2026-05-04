import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/global.css';

import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";

import Mainpages from "./Pages/Mainpages";
import Aboutpage from "./Pages/Aboutpage";
import Contactpage from "./Pages/Contactpage";
import Blogpage from "./Pages/Blog/Blogpage";
import Blogdetails from "./Pages/Blog/Blogdetails";
import Newspage from "./Pages/News/Newspage";
import Newsdetails from "./Pages/News/Newsdetails";

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Mainpages />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/blogs" element={<Blogpage />} />
        <Route path="/blog/:id" element={<Blogdetails />} />
        <Route path="/news" element={<Newspage />} />
        <Route path="/news/:id" element={<Newsdetails />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
