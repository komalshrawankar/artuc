import React from 'react'
import Navbar from '../../component/Navbar'
import CoursesHero from "../../component/Courses/CoursesHero";
import ProgramInfoSection from "../../component/Courses/ProgramInfoSection";
import CoursesOffered from "../../component/Courses/CoursesOffered";
import CourseHighlights from "../../component/Courses/CourseHighlights";
import CareerOpportunities from "../../component/Courses/CareerOpportunities";
import TopUniversities from "../../component/Courses/TopUniversities";
import BenefitsSection from "../../component/Courses/BenefitsSection";




import heroImage from "../../assets/courses/business-bg.png";
import programImage from "../../assets/courses/buisness-p.png";
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
  { icon: o1, title: "Business Manager" },
  { icon: o2, title: "Marketing Executive" },
  { icon: o3, title: "Financial Analyst" },
  { icon: o4, title: "Human Resource Manager" },
  { icon: o5, title: "Entrepreneur / Business Owner" },
];
const enrollList = [
  { icon: o11, title: "Students interested in business and management careers" },
  { icon: o22, title: "Individuals who want to develop leadership and decision-making skills" },
  { icon: o33, title: "Students planning to work in corporate or entrepreneurial roles" },
  { icon: o44, title: "Candidates seeking practical business knowledge and career growth" },
];
const offeredCourses = [
  {
    icon: c1,
    title: "Education and Teaching",
    description:
      "Learn teaching methods, classroom management, and curriculum planning.",
  },
  {
    icon: c2,
    title: "Media and Journalism",
    description:
      "Develop skills in news reporting, media writing, and digital communication.",
  },
  {
    icon: c3,
    title: "Public Administration",
    description:
      "Understand government systems and public service management.",
  },
  {
    icon: c4,
    title: "Social Work and Community Development",
    description:
      "Support communities and address social issues through development programs.",
  },
  {
    icon: c5,
    title: "Research and Policy Analysis",
    description:
      "Analyze data and develop policies for better decision-making.",
  },
  {
    icon: c6,
    title: "Corporate Communication and HR",
    description:
      "Learn workplace communication and human resource management.",
  },
];
const highlightsList = [
  "Industry-focused curriculum",
  "Practical business case studies",
  "Experienced faculty and mentors",
  "Leadership and management skill development",
  "Internship and project opportunities",
  "Career guidance and professional development",
];


const benefitsList = [
  {
    icon: b1,
    title: "Strong Career Opportunities",
    description:
      "Business graduates are in demand across industries including finance, marketing, consulting, and management.",
  },
  {
    icon: b2,
    title: "Leadership Skill Development",
    description:
      "Students learn management strategies, decision-making skills, and leadership techniques required in modern organizations.",
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
  title="Build a Successful Career in Business & Management"
  description="Gain the knowledge and leadership skills needed to succeed in the modern business world through our comprehensive Business, Commerce, and Management programs."
  buttonText="Book Free Counselling"
  buttonLink="/contact"
  image={heroImage}
/>
<ProgramInfoSection
  image={programImage}
  title="About the"
  highlight="Program"
  description={[
    "Business, Commerce, and Management programs focus on developing essential skills in finance, marketing, entrepreneurship, leadership, and business strategy. These courses prepare students to understand how organizations operate and how to manage business operations effectively.",

    "Students gain practical knowledge of business practices, financial management, market analysis, and organizational leadership, preparing them for dynamic roles in the corporate world."
  ]}
/>

<CoursesOffered
  title="Courses"
  highlight="Offered"
  subtitle="Our Business, Commerce, and Management programs include a wide range of specialized fields such as:"
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
  description="Graduates in Business, Commerce, and Management can explore a variety of career opportunities, including:"
  opportunities={opportunitiesList}
  enrollTitle="Who Should"
  enrollHighlight="Enroll?"
  enrollSubtitle="This program is ideal for:"
  enrollList={enrollList}
/>



<BenefitsSection
  title="Benefits of  Business & Management"
  highlight="Courses"
  subtitle="A career in Business & Management offers stability, growth, and the opportunity to make a real difference."
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
