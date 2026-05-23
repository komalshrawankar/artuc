import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"
import Blog from "./pages/Blogs/blog"
import Contact from "./pages/Contactus"
import Termcondition from "./pages/Term&consition"
import Gmat from "./pages/Testprep/Gmat";
import GRE from "./pages/Testprep/Gre";
import IELTS from "./pages/Testprep/IELTS";
import SAT from "./pages/Testprep/SAT";
import TOEFL from "./pages/Testprep/TOEFL";
import CourseDetails from "./pages/Courses/CourseDetails";
import Allied from "./pages/Courses/AlliedHealthandScience";
import Architecture from "./pages/Courses/ArchitectureandBuilding";
import Art from "./pages/Courses/ArtsHumanitie";
import Business from "./pages/Courses/Business";
import Creative from "./pages/Courses/Creative";
import Engineering from "./pages/Courses/Engineering";
import Food from "./pages/Courses/Food";
import Information from "./pages/Courses/InformatiomTechnology";
import Law from "./pages/Courses/Law";
import Medicine from "./pages/Courses/Medicine";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/contact" element={< Contact />} />
        <Route path="/term&condition" element={< Termcondition />} />
        <Route path="/courses/gmat" element={<Gmat />} />
        <Route path="/courses/gre" element={<GRE />} />
        <Route path="/courses/ielts" element={< IELTS />} />
        <Route path="/courses/sat" element={<SAT />} />
        <Route path="/courses/toefl" element={<TOEFL />} />
     
        <Route path="/courses" element={<CourseDetails />} />
        <Route path="/courses/:slug" element={<CourseDetails />} />
        <Route path="/courses/allied-health-and-science" element={<Allied />} />
        <Route path="/courses/architecture-and-building" element={<Architecture />} />
        <Route path="/courses/engineering" element={<Engineering />} />
        <Route path="/courses/medicine" element={<Medicine />} />
        <Route path="/courses/business-commerce-and-management" element={<Business />} />
        <Route path="/courses/creative-arts-design-and-communication" element={<Creative />} />
        <Route path="/courses/arts-humanities-and-social-sciences" element={<Art />} />
        <Route path="/courses/food-hospitality-and-personal-services" element={<Food />} />
        <Route path="/courses/information-technology" element={<Information />} />
        <Route path="/courses/law" element={<Law/>} />


      </Routes>

    </>
  );
}

export default App;