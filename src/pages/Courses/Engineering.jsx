import React from 'react'
import Navbar from '../../component/Navbar'
import CoursesHero from "../../component/Courses/CoursesHero";
import ProgramInfoSection from "../../component/Courses/ProgramInfoSection";
import CoursesOffered from "../../component/Courses/CoursesOffered";
import CourseHighlights from "../../component/Courses/CourseHighlights";
import CareerOpportunities from "../../component/Courses/CareerOpportunities";
import TopUniversities from "../../component/Courses/TopUniversities";
import BenefitsSection from "../../component/Courses/BenefitsSection";




import heroImage from "../../assets/courses/engineering-bg.png";
import programImage from "../../assets/courses/engineering-p.png";
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
  { icon: o1, title: "Technology and IT" },
  { icon: o2, title: "Construction and Infrastructure" },
  { icon: o3, title: "Manufacturing and Production" },
  { icon: o4, title: "Energy and Environmental Engineering" },
  { icon: o5, title: "Research and Development" },
];
const enrollList = [
  { icon: o11, title: "University selection guidance" },
  { icon: o22, title: "Application and admission support" },
  { icon: o33, title: "Visa assistance" },
  { icon: o44, title: "Scholarship guidance" },
];
const offeredCourses = [
  {
    icon: c1,
    title: "Mechanical Engineering",
    
  },
  {
    icon: c2,
    title: "Civil Engineering",
   
  },
  {
    icon: c3,
    title: "Electrical Engineering",
   
  },
  {
    icon: c4,
    title: "Computer Engineering",
   
  },
  {
    icon: c5,
    title: "Aerospace Engineering",
   
  },
  {
    icon: c6,
    title: "Chemical Engineering",
   
  },
];
const highlightsList = [
  "Internationally recognized engineering degrees",
  "Access to modern labs and research facilities",
  "Internship and practical training opportunities",
  " Guidance from experienced faculty",
  "Global career exposure",
  "Strong academic and professional development",
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
  title="Study Engineering Abroad and Build a Global Career"
  description="Explore world-class engineering programs at top international universities and gain the knowledge, skills, and global exposure needed to succeed in the modern technology-driven world."
  buttonText="Book Free Counselling"
  buttonLink="/contact"
  image={heroImage}
/>
<ProgramInfoSection
  image={programImage}
  title="About the"
  highlight="Program"
  description={[
    "Engineering is one of the most sought-after fields for students planning to study abroad. International universities offer advanced engineering programs that combine theoretical knowledge with practical innovation and research opportunities.",

    "By studying engineering abroad, students gain access to modern laboratories, cutting-edge technologies, and global career opportunities across industries such as technology, manufacturing, construction, and research."
  ]}
/>

<CoursesOffered
  title="Popular Engineering"
  highlight=" Fields"
  subtitle="Students can choose from a wide range of engineering specializations, including:"
  courses={offeredCourses}
/>;

<CourseHighlights
  title="Course"
  highlight="Highlights"
  subtitle="Experience a comprehensive curriculum designed to build practical skills."
  highlights={highlightsList}
/>

<CareerOpportunities
  title="Career"
  highlight="Opportunities"
  description="Engineering graduates from international universities can pursue careers in industries such as:"
  opportunities={opportunitiesList}
  enrollTitle="Who Should"
  enrollHighlight="Enroll?"
  enrollSubtitle="This program is ideal for:"
  enrollList={enrollList}
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
