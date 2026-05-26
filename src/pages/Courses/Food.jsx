import React from 'react'
import Navbar from '../../component/Navbar'
import CoursesHero from "../../component/Courses/CoursesHero";
import ProgramInfoSection from "../../component/Courses/ProgramInfoSection";
import CoursesOffered from "../../component/Courses/CoursesOffered";
import CourseHighlights from "../../component/Courses/CourseHighlights";
import CareerOpportunities from "../../component/Courses/CareerOpportunities";
import TopUniversities from "../../component/Courses/TopUniversities";
import BenefitsSection from "../../component/Courses/BenefitsSection";




import heroImage from "../../assets/courses/food-bg.png";
import programImage from "../../assets/courses/food-p.png";
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
  { icon: o1, title: "Hotels and Resorts" },
  { icon: o2, title: "Restaurants and Catering Services" },
  { icon: o3, title: "Airlines and Cruise Lines" },
  { icon: o4, title: "Event Management Companies" },
  { icon: o5, title: "Travel and Tourism Agencies" },
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
    title: "Hospitality Management",
    description:
      "Study human behavior, emotions, and mental processes to understand how people think, learn, and interact in different situations.",
  },
  {
    icon: c2,
    title: "Hotel and Resort Management",
    description:
      "Explore how societies function, including social relationships, cultures, institutions, and the factors that shape communities.",
  },
  {
    icon: c3,
    title: "Culinary Arts and Food Production",
    description:
      "Understand political systems, governance, public policies, and the role of government in shaping society and international relations.",
  },
  {
    icon: c4,
    title: "Tourism and Travel Management",
    description:
      "Develop strong communication and analytical skills through the study of literary works, languages, and cultural expression.",
  },
  {
    icon: c5,
    title: "Event Management",
    description:
      "Examine how media influences society, communication strategies, digital platforms, and modern information sharing.",
  },
  {
    icon: c6,
    title: "Personal and Customer Service Training",
    description:
      "Gain knowledge of government operations, policy implementation, and administrative practices used in public sector management.",
  },
];
const highlightsList = [
  "Practical and industry-focused training",
  "Hands-on learning experience",
  "Guidance from experienced professionals",
  "Exposure to modern hospitality practices",
  "Internship and training opportunities",
  "Career support and industry insights",
];


const benefitsList = [
  {
    icon: b1,
    title: "Practical Skill Development",
    description:
      "Students gain hands-on training and real-world experience in hospitality operations.",
  },
  {
    icon: b2,
    title: "Growing Industry Demand",
    description:
      "Tourism and hospitality industries continue to grow, creating demand for skilled professionals.",
  },
  {
    icon: b3,
    title: "Customer Service Expertise",
    description:
      "Students learn valuable communication and customer service skills essential for service-based careers.",
  },
  {
    icon: b4,
    title: " Global Career Opportunities",
    description:
      "The hospitality industry offers job opportunities worldwide in hotels, resorts, and tourism organizations.",
  },
];


const AlliedHealthandScience = () => {
  return (
   <>
   <Navbar/>
   <CoursesHero
  title="Build a Career in Food, Hospitality & Personal Services"
  description="Discover exciting opportunities in the hospitality and service industry with programs designed to develop practical skills, customer service expertise, and professional knowledge."
  buttonText="Book Free Counselling"
  buttonLink="/contact"
  image={heroImage}
/>
<ProgramInfoSection
  image={programImage}
  title="About the"
  highlight="Program"
  description={[
    "Food, Hospitality, and Personal Services programs focus on preparing students for careers in hospitality management, culinary arts, tourism, and personal service industries. These courses combine practical training with industry knowledge to help students develop the skills required in hotels, restaurants, resorts, and service organizations.",

    "Students gain hands-on experience in hospitality operations, customer service, food preparation, and service management."
  ]}
/>

<CoursesOffered
  title="Courses"
  highlight="Offered"
  subtitle="Our Food, Hospitality, and Personal Services programs include various specializations such as"
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
  description="Graduates of Food, Hospitality, and Personal Services programs can explore careers in various sectors, including:"
  opportunities={opportunitiesList}
  enrollTitle="Who Should"
  enrollHighlight="Enroll?"
  enrollSubtitle="This program is ideal for:"
  enrollList={enrollList}
/>



<BenefitsSection
  title="Benefits of Studying "
  highlight="Arts & Social Sciences"
 
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
