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
import heroImage from "../../assets/studyabroad/poland1.png";
import programImage from "../../assets/studyabroad/poland2.png";
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




const offeredCourses = [
  {
    icon: c1,
    title: "Globally Recognized Universities",
    description:
      "Earn internationally respected degrees.",
  },
  {
    icon: c2,
    title: "Affordable Education",
    description:
      "Lower tuition fees and living expenses.",
  },
  {
    icon: c3,
    title: "English-Taught Courses",
    description:
      "Choose from a wide range of programs in English.",
  },
  {
    icon: c4,
    title: "Student-Friendly Cities",
    description:
      "Live and study in safe and welcoming cities.",
  },
  {
    icon: c5,
    title: "Internship Opportunities",
    description:
      "Gain practical work experience during studies.",
  },
  {
    icon: c6,
    title: "Travel Across Europe",
    description:
      "Enjoy easy travel to other European countries.",
  },
];



const AlliedHealthandScience = () => {
  return (
   <>
   <Navbar/>
   <CoursesHero
  title="Study in Poland and Experience Quality European Education"
  description="Gain internationally recognized degrees while studying in one of Europe’s fastest-growing education destinations."
  buttonText="Book Free Counselling"
  buttonLink="/contact"
  image={heroImage}
/>
<ProgramInfoSection
  image={programImage}
  title="Study in "
  highlight="Poland"
  description={[
    "Poland has become an increasingly popular destination for international students due to its strong education system, affordable costs, and globally recognized degrees. The country offers a wide range of undergraduate and postgraduate programs in fields such as engineering, business, medicine, and information technology.",

    "Polish universities combine modern education methods with strong academic traditions, providing students with high-quality learning environments and advanced research opportunities. Students also benefit from a multicultural environment and the opportunity to travel across Europe while studying."
  ]}
/>

<CoursesOffered
  title="Why Study in "
  highlight="Poland?"

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
