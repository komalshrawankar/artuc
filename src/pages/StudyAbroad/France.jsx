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
import heroImage from "../../assets/studyabroad/france1.png";
import programImage from "../../assets/studyabroad/france2.png";
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
    title: "Top Universities & Business Schools",
    description:
      "Study at globally recognized institutions.",
  },
  {
    icon: c2,
    title: "High-Quality Education",
    description:
      "Access modern research facilities and learning resources.",
  },
  {
    icon: c3,
    title: "English-Taught Programs",
    description:
      "Choose from a wide range of programs in English.",
  },
  {
    icon: c4,
    title: "Affordable Tuition Fees",
    description:
      "Lower study costs compared to many European countries.",
  },
  {
    icon: c5,
    title: "Rich Culture & Student Life",
    description:
      "Enjoy a vibrant lifestyle with deep cultural heritage.",
  },
  {
    icon: c6,
    title: "Internship Opportunities",
    description:
      "Gain practical experience through internships and industry exposure.",
  },
];

const AlliedHealthandScience = () => {
  return (
   <>
   <Navbar/>
   <CoursesHero
  title="Study in France and Experience Excellence in Education"
  description="Gain a globally recognized degree while studying in one of Europe’s leading centers for culture, innovation, and higher education."
  buttonText="Book Free Counselling"
  buttonLink="/contact"
  image={heroImage}
/>
<ProgramInfoSection
  image={programImage}
  title="Study in the "
  highlight="France"
  description={[
    "France is one of the most attractive destinations for international students due to its high academic standards, globally respected institutions, and rich cultural heritage. The country offers a wide range of undergraduate, postgraduate, and specialized programs in fields such as business, engineering, arts, and hospitality.",

    "French universities and Grandes Écoles are known for their strong focus on research, innovation, and practical learning. Many institutions also offer English-taught programs, making it easier for international students to study in France while experiencing the country’s unique culture and lifestyle."
  ]}
/>

<CoursesOffered
  title="Study in the "
  highlight="France"
 
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
