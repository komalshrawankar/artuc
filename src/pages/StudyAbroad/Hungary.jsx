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
import heroImage from "../../assets/studyabroad/hyngary1.png";
import programImage from "../../assets/studyabroad/hungary2.png";
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
    title: "Medical Laboratory Technology (MLT)",
    description:
      "Learn to perform complex medical tests to help physicians diagnose, treat, and prevent diseases.",
  },
  {
    icon: c2,
    title: "Radiology & Imaging Technology",
    description:
      "Master the use of medical imaging equipment like X-rays, MRI, and CT scanners for patient diagnosis.",
  },
  {
    icon: c3,
    title: "Operation Theatre Technology",
    description:
      "Gain expertise in managing operation theatre equipment and assisting surgeons during procedures.",
  },
  {
    icon: c4,
    title: "Dialysis Technology",
    description:
      "Specialized training in operating dialysis machines and providing vital care for patients with kidney disorders.",
  },
  {
    icon: c5,
    title: "Hospital Administration",
    description:
      "Develop leadership skills to manage hospital operations, healthcare policies, and facility administration.",
  },
  {
    icon: c6,
    title: "Healthcare Assistant Programs",
    description:
      "Train to provide essential patient care and support nursing staff in hospitals and clinics.",
  },
];
const highlightsList = [
  "Industry-relevant healthcare training",
  "Practical learning and lab sessions",
  "Experienced faculty and trainers",
  "Modern learning facilities",
  "Internship and practical exposure",
  "Career guidance and job support",
];
const universitiesList = [
  { image: u1, name: "St. Lawrence College" },
  { image: u2, name: "Northern College" },
  { image: u3, name: "De Anza College" },
  { image: u4, name: "San Mateo Colleges" },
  { image: u5, name: "Sacred Heart University" },
  { image: u6, name: "Louisiana State University" },
  { image: u7, name: "Northern Alberta Institute" },
  { image: u8, name: "North Seattle College" },
];

const benefitsList = [
  {
    icon: b1,
    title: "Globally Recognized Universities",
    description:
      "Earn internationally respected degrees.",
  },
  {
    icon: b2,
    title: "Affordable Education",
    description:
      "Lower tuition fees and living expenses.",
  },
  {
    icon: b3,
    title: "English-Taught Courses",
    description:
      "Choose from a wide range of programs in English.",
  },
  {
    icon: b4,
    title: "Rich Culture & History",
    description:
      "Experience historic cities and vibrant culture.",
  },
];


const AlliedHealthandScience = () => {
  return (
   <>
   <Navbar/>
   <CoursesHero
  title="Study in Hungary and Access Quality European Education"
  description="Gain a globally recognized degree while studying in one of Europe’s most affordable and student-friendly countries."
  buttonText="Book Free Counselling"
  buttonLink="/contact"
  image={heroImage}
/>
<ProgramInfoSection
  image={programImage}
  title="Study in "
  highlight="Hungary"
  description={[
    "Hungary is an increasingly popular destination for international students seeking high-quality education in Europe at affordable costs. The country offers a wide range of undergraduate, postgraduate, and doctoral programs across fields such as medicine, engineering, business, and information technology.",

    "Hungarian universities are known for their strong academic tradition, research opportunities, and modern teaching methods. Students also benefit from a multicultural environment and the chance to explore Europe while studying."
  ]}
/>

<CoursesOffered
  title="Why Study in "
  highlight="Hungary?"
  
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
