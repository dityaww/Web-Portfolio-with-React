import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import { Routes, Route, Link } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Blogs from './pages/Blogs';
import DetailBlogs from './pages/DetailBlogs';

import NotFound from './pages/NotFound';


function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />

        
        <Route path="/blogs" element={<Blogs />} >
          {/* <Route path="/detail-blogs/:idblogs" element={<DetailBlogs />} /> */}
        </Route>
          

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
