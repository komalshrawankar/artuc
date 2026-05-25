import React from 'react'
import Navbar from '../../component/Navbar'
import CoursesHero from "../../component/Courses/CoursesHero";
import ProgramInfoSection from "../../component/Courses/ProgramInfoSection";
import CoursesOffered from "../../component/Courses/CoursesOffered";
import CourseHighlights from "../../component/Courses/CourseHighlights";
import CareerOpportunities from "../../component/Courses/CareerOpportunities";
import TopUniversities from "../../component/Courses/TopUniversities";
import BenefitsSection from "../../component/Courses/BenefitsSection";




import heroImage from "../../assets/courses/building-bg.png";
import programImage from "../../assets/courses/build-program.png";
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
import u1 from "../../assets/courses/US.PNG";
import u2 from "../../assets/courses/UK.PNG";
import u3 from "../../assets/courses/canada.png";
import u4 from "../../assets/courses/australia.png";
import u5 from "../../assets/courses/germany.png";
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
  { icon: o1, title: "Architectural Firms" },
  { icon: o2, title: "Construction Companies" },
  { icon: o3, title: "Urban Planning Departments" },
  { icon: o4, title: "Real Estate Development" },
  { icon: o5, title: "Interior and Structural Design Firms" },
];
const enrollList = [
  { icon: o11, title: "Students interested in architecture and building design" },
  { icon: o22, title: "Individuals who enjoy creative and technical work" },
  { icon: o33, title: "Students planning a career in construction or infrastructure development" },
  { icon: o44, title: "Candidates looking for practical and career-oriented courses" },
];
const offeredCourses = [
  {
    icon: c1,
    title: "Architectural Design",
    description:
      "Learn the principles of creative and functional building design, focusing on space planning, aesthetics, and modern architectural concepts.",
  },
  {
    icon: c2,
    title: "Building Construction Technology",
    description:
      "Understand construction methods, materials, and techniques used to build safe, durable, and efficient structures.",
  },
  {
    icon: c3,
    title: "Structural Design Fundamentals",
    description:
      "Gain knowledge of structural systems, load distribution, and basic engineering principles that ensure building stability and strength.",
  },
  {
    icon: c4,
    title: "Construction Project Management",
    description:
      "Develop skills to plan, manage, and supervise construction projects, ensuring timely completion and quality control.",
  },
  {
    icon: c5,
    title: "Building Planning and Drafting",
    description:
      "Learn how to create detailed building plans, layouts, and technical drawings using modern drafting tools and software.",
  },
  {
    icon: c6,
    title: "Sustainable Architecture",
    description:
      "Explore eco-friendly design practices that focus on energy efficiency, environmental responsibility, and sustainable building solutions.",
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
  { image: u1, name: "United States " },
  { image: u2, name: "United Kingdom" },
  { image: u3, name: "Canada" },
  { image: u4, name: "Australia" },
  { image: u5, name: "Germany" },
  { image: u6, name: "Louisiana State University" },
  { image: u7, name: "Northern Alberta Institute" },
  { image: u8, name: "North Seattle College" },
];

const benefitsList = [
  {
    icon: b1,
    title: "Creative and Technical Career",
    description:
      "Architecture combines creativity with technical knowledge to design innovative and functional spaces.",
  },
  {
    icon: b2,
    title: "Hands-On Learning Experience",
    description:
      "Students gain practical experience through projects, design exercises, and real-world case studies.",
  },
  {
    icon: b3,
    title: "Diverse Career Opportunities",
    description:
      "Allied health professionals can choose to work in hospitals, laboratories, diagnostic centers, and specialized healthcare institutions.",
  },
  {
    icon: b4,
    title: "Global Career Opportunities",
    description:
      "Architecture and construction skills are valued worldwide, offering opportunities to work on international projects.",
  },
];


const AlliedHealthandScience = () => {
  return (
   <>
   <Navbar/>
   <CoursesHero
  title="Design the Future with Architecture & Building Courses"
  description="Build a successful career in architecture, construction, and building design with industry-focused training that combines creativity, technical knowledge, and practical skills."
  buttonText="Book Free Counselling"
  buttonLink="/contact"
  image={heroImage}
/>
<ProgramInfoSection
  image={programImage}
  title="About the"
  highlight="Program"
  description={[
    "Architecture and Building courses focus on the planning, design, and construction of buildings and infrastructure. These programs help students develop the technical knowledge and creative skills needed to design functional, sustainable, and visually appealing structures.",

    "Through a combination of theoretical learning and practical training, students gain a strong foundation in architectural design, building materials, construction techniques, and project management."
  ]}
/>

<CoursesOffered
  title="Courses"
  highlight="Offered"
  subtitle="Our Architecture and Building programs provide specialized training in areas such as:"
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
  description="After completing Architecture and Building courses, students can explore careers in various sectors, including:"
  opportunities={opportunitiesList}
  enrollTitle="Who Should"
  enrollHighlight="Enroll?"
  enrollSubtitle="This program is ideal for:"
  enrollList={enrollList}
/>

<TopUniversities
  title="Top Universities for Architecture and "
  highlight="Building Studies"
  subtitle="Here are five destinations where studying architecture offers an inspiring and globally recognized experience:"
  universities={universitiesList}
/>

<BenefitsSection
  title="Benefits of Studying "
  highlight="Architecture & Building"
  subtitle="A career in Architecture & Buildingoffers stability, growth, and the opportunity to make a real difference."
  benefits={benefitsList}
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
