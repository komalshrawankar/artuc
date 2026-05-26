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
import heroImage from "../../assets/admission/courses-bg.png";
import programImage from "../../assets/admission/courses-p.png";
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





const offeredCourses = [
  {
    icon: c1,
    title: "Global Reputation",
    description:
      "Learn to perform complex medical tests to help physicians diagnose, treat, and prevent diseases.",
  },
  {
    icon: c2,
    title: "Curriculum Detail",
    description:
  "Analyzing course modules to ensure they align with modern industry requirements",
  },
  {
    icon: c3,
    title: "Fees & Scholarships",
    description:
      "Evaluating total cost of attendance and availability  financial aid for you.",
  },
  {
    icon: c4,
    title: "Internship Links",
    description:
      "Industry partnerships and practicaltraining opportunities offered by the school.",
  },
  {
    icon: c5,
    title: "Facilities",
    description:
      "Labs, libraries, sports centers, andstudent housing quality assessments.",
  },
  {
    icon: c6,
    title: "Healthcare Assistant Programs",
    description:
      "Train to provide essential patient care and support nursing staff in hospitals and clinics.",
  },
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
    title: "High Demand in Healthcare Industry",
    description:
      "The healthcare sector continues to grow rapidly, creating strong, persistent demand for trained allied health professionals globally.",
  },
  {
    icon: b2,
    title: "Practical Skill Development",
    description:
      "Students gain hands-on training and real-world experience through comprehensive practical sessions and internships.",
  },
  {
    icon: b3,
    title: "Diverse Career Opportunities",
    description:
      "Allied health professionals can choose to work in hospitals, laboratories, diagnostic centers, and specialized healthcare institutions.",
  },
  {
    icon: b4,
    title: "Opportunities in India and Abroad",
    description:
      "Qualified healthcare professionals have exceptional opportunities to work, migrate, and establish careers in various countries around the world.",
  },
];


const AlliedHealthandScience = () => {
  return (
   <>
   <Navbar/>
   <CoursesHero
  title="Choose the Right Course & University for Your Future"
  description="Get expert guidance to select the best course and university that matches your interests, academic background, and career goals."
  buttonText="Book Free Counselling"
  buttonLink="/contact"
  image={heroImage}
/>
<ProgramInfoSection
  image={programImage}
  title="Course & "
  highlight="University Selection"
  description={[
    "Selecting the right course and university is a crucial step in building a successful academic and professional future. With countless programs and institutions available across the world, making the right choice can feel overwhelming. Our Course & University Selection service helps students identify the best options based on their interests, academic background, and long-term career goals.",

    "Our experienced advisors provide personalized guidance to help students explore suitable programs and shortlist universities that offer high-quality education, strong career prospects, and global recognition. We focus on ensuring that every student chooses a path that supports both their academic success and future career growth."
  ]}
/>

<CoursesOffered
  title="Factors "
  highlight="We Consider"

  courses={offeredCourses}
/>;









<TopUniversities
  title="Top Universities for "
  highlight="Career Counseling"
  subtitle="Here are five destinations where studying architecture offers an inspiring and globally recognized experience:"
  universities={universitiesList}
/>



<Testimonials/>
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
