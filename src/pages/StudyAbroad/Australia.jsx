/* eslint-disable no-unused-vars */
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
import heroImage from "../../assets/studyabroad/s1.png";
import programImage from "../../assets/studyabroad/s2.png";
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
    title: "Globally Recognized",
    description:
      "Degrees from Australian institutions are accepted and respected by employers worldwide.",
  },
  {
    icon: c2,
    title: "Modern Research",
    description:
      "Access high-quality education and state-of-the-art research facilities across all disciplines.",
  },
  {
    icon: c3,
    title: "Multicultural Culture",
    description:
      "Experience a diverse, inclusive, and welcoming environment with people from all over the world.",
  },
  {
    icon: c4,
    title: "Part-time Work",
    description:
      "Manage living expenses with opportunities for part-time work while you study.",
  },
  {
    icon: c5,
    title: "Post-study Career",
    description:
      "Benefit from generous post-study work opportunities to kickstart your global career.",
  },
  {
    icon: c6,
    title: "Safe Environments",
    description:
      "Live and study in some of the safest and most student-friendly cities on the planet.",
  },
];



const AlliedHealthandScience = () => {
  return (
   <>
   <Navbar/>
   <CoursesHero
  title="Study in Australia and Unlock Global Opportunities"
  description="Experience world-class education, innovative research, and a vibrant student lifestyle in one of the most popular study destinations."
  buttonText="Book Free Counselling"
  buttonLink="/contact"
  image={heroImage}
/>
<ProgramInfoSection
  image={programImage}
  title="Study in "
  highlight="Australia"
  description={[
    "Australia is one of the most preferred destinations for international students due to its high academic standards, globally recognized universities, and excellent quality of life. The country offers a wide range of programs across various fields, including business, engineering, health sciences, information technology, and creative arts.",

    "Students studying in Australia benefit from innovative teaching methods, advanced research facilities, and a multicultural learning environment. The country also provides opportunities for part-time work during studies and post-study work visas, making it easier for students to gain international work experience."
  ]}
/>

<CoursesOffered
  title="Why Study in "
  highlight="Australia?"
 
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
