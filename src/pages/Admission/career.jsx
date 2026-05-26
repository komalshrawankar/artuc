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
import heroImage from "../../assets/admission/career-bg.png";
import programImage from "../../assets/admission/career-p.png";
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
import u1 from "../../assets/courses/UK.png";
import u2 from "../../assets/courses/US.png";
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




const offeredCourses = [
  {
    icon: c1,
    title: "Personalized career guidance",
    description:
      "Tailored advice that matches your personality, values, and career aspirations.",
  },
  {
    icon: c2,
    title: "Course and university selection",
    description:
      "Finding the perfect academic fit based on your background and future goals.",
  },
  {
    icon: c3,
    title: "Study abroad counseling",
    description:
      "End-to-end guidance for international education including visa and cultural prep.",
  },
  {
    icon: c4,
    title: "Career path assessment",
    description:
      "Scientific aptitude tests and psychological assessments to reveal hidden potential.",
  },
  {
    icon: c5,
    title: "Information about global education opportunities",
    description:
      "Up-to-date data on worldwide school rankings, facilities, and market trends.",
  },
  {
    icon: c6,
    title: "Guidance on admission requirements and eligibility",
    description:
      "Step-by-step help with entry requirements, entrance exams, and interviews.",
  },
];

const universitiesList = [
  { image: u1, name: "United States " },
  { image: u2, name: "United Kingdom" },
  { image: u3, name: "Canada" },
  { image: u4, name: "Australia" },
  { image: u5, name: "Germany" },
  
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
  title="Find the Right Career Path with Expert Guidance"
  description="Get personalized career counseling to discover the best courses, universities, and opportunities that match your interests, skills, and future goals."
  buttonText="Book Free Counselling"
  buttonLink="/contact"
  image={heroImage}
/>
<ProgramInfoSection
  image={programImage}
  title="Career "
  highlight="Counseling"
  description={[
    "Choosing the right career path is one of the most important decisions in a student’s life. Our Career Counseling service helps students understand their interests, strengths, and academic goals to make informed decisions about their future studies and careers.",

    "Our experienced counselors provide personalized guidance to help students explore the best courses, universities, and career opportunities available worldwide. We focus on understanding each student’s aspirations and provide expert advice to help them select the right academic path",
    "With proper career counseling, students gain clarity about their goals, learn about different career options, and confidently plan their journey toward a successful future."
  ]}
/>

<CoursesOffered
  title="What We "
  highlight="Offer"
  subtitle="Our Allied Health and Science programs include a variety of specialized courses designed to meet industry demands. These programs provide students with the skills required to work in modern healthcare environments."
  courses={offeredCourses}
/>;


<InfoSection
  title="Why Career"
  highlight="Counseling Matters"
  description="Navigating today’s professional landscape can be overwhelming."
  image={img}
  points={[
    "Avoid confusion and decision paralysis.",
    "Align interests with professional skills.",
    "Maximize long-term success.",
    "Save time and financial resources.",
  ]}
/>

<BenefitCards
  title="Who Can"
  highlight="Benefit"
  items={[
    {
      image: school,
      title: "High School Students",
    },
    {
      image: abroad,
      title: "Students Planning Abroad",
    },
    {
      image: graduate,
      title: "Graduates",
    },
    {
      image: work,
      title: "Working Professionals",
    },
  ]}
/>





<TopUniversities
  title="Top Universities Offering Allied Health"
  highlight="Science Programs"
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
