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
import StudyAbroadDetails from "./pages/StudyAbroad/StudyAbroadDetails";





import AdmissionService from "./pages/Admission/AdmissionService";
import Career from "./pages/Admission/career"
import Courses from "./pages/Admission/courses"
import Education from "./pages/Admission/education"
import Endtoend from "./pages/Admission/endtoend"
import Forex from "./pages/Admission/forex"
import International from "./pages/Admission/international"
import Interview from "./pages/Admission/interview"
import Letter from "./pages/Admission/letter"
import Scholarship from "./pages/Admission/scholarship"
import Student from "./pages/Admission/student"
import Test from "./pages/Admission/test"
import Travel from "./pages/Admission/travel"
import Visa from "./pages/Admission/visa"


import Australia from "./pages/StudyAbroad/Australia";
import Mauritius from "./pages/StudyAbroad/Mauritius";
import Ireland from "./pages/StudyAbroad/Ireland";
import China from "./pages/StudyAbroad/China";
import UK from "./pages/StudyAbroad/UK";
import Singapore from "./pages/StudyAbroad/Singapore";
import UAE from "./pages/StudyAbroad/UAE";
import Philippines from "./pages/StudyAbroad/Philippines";
import USA from "./pages/StudyAbroad/USA";
import Finland from "./pages/StudyAbroad/Finland";
import Malaysia from "./pages/StudyAbroad/Malaysia";
import Malta from "./pages/StudyAbroad/Malta";
import Canada from "./pages/StudyAbroad/Canada";
import Italy from "./pages/StudyAbroad/Italy";
import Hungary from "./pages/StudyAbroad/Hungary";
import Denmark from "./pages/StudyAbroad/Denmark";
import Netherlands from "./pages/StudyAbroad/Netherlands";
import France from "./pages/StudyAbroad/France";
import Poland from "./pages/StudyAbroad/Poland";
import Switzerland from "./pages/StudyAbroad/Switzerland";
import Japan from "./pages/StudyAbroad/Japan";
import NewZealand from "./pages/StudyAbroad/NewZealand";
import Lithuania from "./pages/StudyAbroad/Lithuania";
import Germany from "./pages/StudyAbroad/Germany";
import Spain from "./pages/StudyAbroad/Spain";
import Cyprus from "./pages/StudyAbroad/Cyprus";
import Vietnam from "./pages/StudyAbroad/Vietnam";







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
        <Route path="/courses/law" element={<Law />} />



        <Route
          path="/courses/admission-services/:slug"
          element={<AdmissionService />}
        />
<Route path="/courses/admission-services/student-accommodation-support" element={<Career/>} />
<Route path="/courses/admission-services/scholarship-application-assistance" element={<Scholarship />} />
<Route path="/courses/admission-services/international-student-insurance" element={<International />} />
<Route path="/courses/admission-services/course-and-university-selection" element={<Courses />} />
<Route path="/courses/admission-services/end-to-end-applications" element={<Endtoend />} />
<Route path="/courses/admission-services/interview-preparation" element={<Interview />} />
<Route path="/courses/admission-services/letter-of-recommendation" element={<Letter />} />
<Route path="/courses/admission-services/visa-application-support" element={<Visa />} />
<Route path="/courses/admission-services/education-loan-assistance" element={<Education />} />
<Route path="/courses/admission-services/forex-assistance" element={<Forex />} />
<Route path="/courses/admission-services/test-preparations" element={<Test />} />
<Route path="/courses/admission-services/career-counseling" element={<Career />} />
<Route path="/courses/admission-services/travel-assistance" element={<Travel/>} />



<Route path="/study-abroad/:slug" element={<StudyAbroadDetails />} />
      

      <Route path="/study-abroad/australia" element={<Australia />} />
<Route path="/study-abroad/mauritius" element={<Mauritius />} />
<Route path="/study-abroad/ireland" element={<Ireland />} />
<Route path="/study-abroad/china" element={<China />} />

<Route path="/study-abroad/uk" element={<UK />} />
<Route path="/study-abroad/singapore" element={<Singapore />} />
<Route path="/study-abroad/uae" element={<UAE />} />
<Route path="/study-abroad/philippines" element={<Philippines />} />

<Route path="/study-abroad/usa" element={<USA />} />
<Route path="/study-abroad/finland" element={<Finland />} />
<Route path="/study-abroad/malaysia" element={<Malaysia />} />
<Route path="/study-abroad/malta" element={<Malta />} />

<Route path="/study-abroad/canada" element={<Canada />} />
<Route path="/study-abroad/italy" element={<Italy />} />
<Route path="/study-abroad/hungary" element={<Hungary />} />
<Route path="/study-abroad/denmark" element={<Denmark />} />

<Route path="/study-abroad/netherlands" element={<Netherlands />} />
<Route path="/study-abroad/france" element={<France />} />
<Route path="/study-abroad/poland" element={<Poland />} />
<Route path="/study-abroad/switzerland" element={<Switzerland />} />

<Route path="/study-abroad/japan" element={<Japan />} />
<Route path="/study-abroad/new-zealand" element={<NewZealand />} />
<Route path="/study-abroad/lithuania" element={<Lithuania />} />
<Route path="/study-abroad/germany" element={<Germany />} />

<Route path="/study-abroad/spain" element={<Spain />} />
<Route path="/study-abroad/cyprus" element={<Cyprus />} />
<Route path="/study-abroad/vietnam" element={<Vietnam />} />



</Routes>
    </>
    
  );
}

export default App;