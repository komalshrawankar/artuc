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
import heroImage from "../../assets/admission/international-bg.png";
import programImage from "../../assets/admission/internatinal-p.png";
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
  "Medical emergencies and hospitalization",
  "Doctor consultations and treatment",
  "Emergency medical evacuation",
  "Travel delays or interruptions",
  "Personal accident coverage",
  "Loss of baggage or important documents",
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




const AlliedHealthandScience = () => {
  return (
    <>
      <Navbar />
      <CoursesHero
        title="Stay Protected with International Student Insurance"
        description="Secure your health and well-being while studying abroad with reliable international student insurance coverage."
        buttonText="Book Free Counselling"
        buttonLink="/contact"
        image={heroImage}
      />
      <ProgramInfoSection
        image={programImage}
        title="International Student"
        highlight="Insurance"
        description={[
          "Studying abroad is an exciting opportunity, but it also comes with certain responsibilities, including ensuring your health and safety. International Student Insurance provides essential coverage for medical emergencies, hospitalization, travel issues, and other unexpected situations while studying in another country.",

          "Many universities and countries require international students to have valid health insurance before beginning their studies. Our team helps students understand different insurance options and choose the best policy that meets university requirements and personal needs."
        ]}
      />

      <CourseHighlights
        title="Course"
        highlight="Highlights"
        subtitle="Experience a comprehensive curriculum designed to build practical skills."
        highlights={highlightsList}
      />

<Testimonials />
      <CTASection
        bgImage={blueBg}
        title="Need Career"
        highlight="Guidance?"
        description="Get personalized career advice from our experts and choose the right course to achieve your professional goals."
        buttonText="Explore Courses"
        buttonLink="/courses"
      />
      <Footer />
    </>
  )
}

export default AlliedHealthandScience
