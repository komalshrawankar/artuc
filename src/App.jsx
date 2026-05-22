import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"
import Blog from "./pages/Blogs/blog"
import Contact from "./pages/Contactus"
import Termcondition from "./pages/Term&consition"

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/blogs" element={<Blog/>} />
    <Route path="/contact" element={< Contact/>} />
    <Route path="/term&condition" element={< Termcondition/>} />
    </Routes>
    
    </>
  );
}

export default App;