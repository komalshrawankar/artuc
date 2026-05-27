import React from 'react'
import Navbar from '../../component/Navbar'
import CoursesHero from "../../component/Courses/CoursesHero";
import ProgramInfoSection from "../../component/Courses/ProgramInfoSection";
import CoursesOffered from "../../component/Courses/CoursesOffered";
import CourseHighlights from "../../component/Courses/CourseHighlights";
import CareerOpportunities from "../../component/Courses/CareerOpportunities";
import TopUniversities from "../../component/Courses/TopUniversities";
import BenefitsSection from "../../component/Courses/BenefitsSection";
import InfoSection from "../../component/admission/InfoSection";
import BenefitCards from "../../component/admission/BenefitCards";


import school from "../../assets/admission/smile.png";
import abroad from "../../assets/admission/plane.png";
import graduate from "../../assets/admission/3.png";
import work from "../../assets/admission/work.png";
import img from "../../assets/admission/info-img.png";
import heroImage from "../../assets/studyabroad/japan1.png";
import programImage from "../../assets/studyabroad/japan2.png";
import c1 from "../../assets/images/c1.png";
import c2 from "../../assets/images/c2.png";
import c3 from "../../assets/images/c3.png";
import c4 from "../../assets/images/c4.png";
import c5 from "../../assets/images/c5.png";
import c6 from "../../assets/images/c6.png";
import o1 from "../../assets/images/hospital.png";
import o2 from "../../assets/images/lab.png";
import o3 from "../../assets/images/research.png";
import o4 from "../../assets/images/rehab.png";
import o5 from "../../assets/images/med.png";
import o11 from "../../assets/images/o11.png";
import o22 from "../../assets/images/o22.png";
import o33 from "../../assets/images/o33.png";
import o44 from "../../assets/images/o44.png";
import u1 from "../../assets/images/u1.png";
import u2 from "../../assets/images/u2.png";
import u3 from "../../assets/images/u3.png";
import u4 from "../../assets/images/u4.png";
import u5 from "../../assets/images/u5.png";
import u6 from "../../assets/images/u6.png";
import u7 from "../../assets/images/u7.png";
import u8 from "../../assets/images/u8.png";
import b1 from "../../assets/images/a1.png";
import b2 from "../../assets/images/a2.png";
import b3 from "../../assets/images/a3.png";
import b4 from "../../assets/images/a4.png";
import Testimonials from '../../component/homepage/Testimonials';
import CTASection from '../../component/Testprep/CTASection';
import Footer from '../../component/Footer';
import blueBg from "../../assets/homepage/blue-bg.png";
import TopUni from '../../component/StudyAbroad/TopUni';
import WorkOpportunities from '../../component/StudyAbroad/WorkOpportunities';



const opportunitiesList = [
  { icon: o1, title: "Hospitals and Clinics" },
  { icon: o2, title: "Diagnostic Laboratories" },
  { icon: o3, title: "Medical Research Centers" },
  { icon: o4, title: "Rehabilitation Centers" },
  { icon: o5, title: "Medical Equipment Companies" },
];
const enrollList = [
  { icon: o11, title: "Students interested in healthcare and medical fields" },
  { icon: o22, title: "Individuals seeking stable careers in the healthcare industry" },
  { icon: o33, title: "Students who want practical medical training" },
  { icon: o44, title: "Candidates looking for job-oriented professional courses" },
];
const offeredCourses = [
  {
    icon: c1,
    title: "High-Quality Education",
    description:
      "Study at globally respected universities.",
  },
  {
    icon: c2,
    title: "Focus on Technology & Innovation",
    description:
      "Benefit from strong research and technology-driven programs.",
  },
  {
    icon: c3,
    title: "English-Taught Programs",
    description:
      "Choose from a growing range of programs taught in English.",
  },
  {
    icon: c4,
    title: "Safe Cultural Environment",
    description:
      "Experience a safe and culturally rich lifestyle.",
  },
  {
    icon: c5,
    title: "Scholarship Opportunities",
    description:
      "Access scholarships and financial support options.",
  },
  {
    icon: c6,
    title: "Strong Career Opportunities",
    description:
      "Gain industry exposure and better career prospects.",
  },
];



const AlliedHealthandScience = () => {
  return (
   <>
   <Navbar/>
   <CoursesHero
  title="Study in Japan and Experience Innovation & Tradition"
  description="Gain a world-class education in a country known for advanced technology, rich culture, and global career opportunities."
  buttonText="Book Free Counselling"
  buttonLink="/contact"
  image={heroImage}
/>
<ProgramInfoSection
  image={programImage}
  title="Study in the "
  highlight="Japan"
  description={[
    "Japan is one of the leading education destinations in Asia, known for its advanced technology, strong research programs, and high academic standards. The country offers a wide range of programs in fields such as engineering, robotics, business, and science.",

    "Japanese universities focus on innovation, practical learning, and research-based education. International students benefit from modern laboratories, experienced faculty, and opportunities to work with leading technology companies. Studying in Japan also allows students to experience a unique blend of traditional culture and modern lifestyle."
  ]}
/>

<CoursesOffered
  title="Why Study in "
  highlight="Japan"
  
  courses={offeredCourses}
/>;




<TopUni />

<WorkOpportunities />

<CTASection
  bgImage={blueBg}
  title="Need Career"
  highlight="Guidance?"
  description="Get personalized career advice from our experts and choose the right course to achieve your professional goals."
  buttonText="Explore Courses"
  buttonLink="/courses"
/>
<Footer/>
   </>
  )
}

export default AlliedHealthandScience
