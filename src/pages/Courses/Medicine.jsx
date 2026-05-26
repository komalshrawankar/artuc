import React from 'react'
import Navbar from '../../component/Navbar'
import CoursesHero from "../../component/Courses/CoursesHero";
import ProgramInfoSection from "../../component/Courses/ProgramInfoSection";
import CoursesOffered from "../../component/Courses/CoursesOffered";
import CourseHighlights from "../../component/Courses/CourseHighlights";
import CareerOpportunities from "../../component/Courses/CareerOpportunities";
import TopUniversities from "../../component/Courses/TopUniversities";
import BenefitsSection from "../../component/Courses/BenefitsSection";




import heroImage from "../../assets/courses/med-bg.png";
import programImage from "../../assets/courses/med-p.png";
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
  { icon: o1, title: "General Physician" },
  { icon: o2, title: "Surgeon" },
  { icon: o3, title: "Dentist" },
  { icon: o4, title: "Pharmacist" },
  { icon: o5, title: "Medical Researcher" },
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
    title: "Globally Recognized Degree",
    description:
      "Earn a medical qualification that is respected and recognized worldwide.",
  },
  {
    icon: c2,
    title: "Advanced Medical Training",
    description:
      "Learn using modern laboratories, advanced technology, and innovative teaching methods.",
  },
  {
    icon: c3,
    title: "Better Career Opportunities",
    description:
      "Access a wide range of global job opportunities in hospitals, research centers, and healthcare organizations.",
  },
 
];
const highlightsList = [
  "Globally recognized medical degrees",
  "Practical training in hospitals and clinics",
  "Access to modern laboratories and research centers",
  "Opportunities to work with experienced medical professionals",
  "Exposure to international healthcare systems",
  "Career guidance and job support",
];


const benefitsList = [
  {
    icon: b1,
    title: "Globally Recognized Degree",
    description:
      "Earn a medical qualification that is respected and recognized worldwide.",
  },
  {
    icon: b2,
    title: "Advanced Medical Training",
    description:
      "Learn using modern laboratories, advanced technology, and innovative teaching methods.",
  },
  {
    icon: b3,
    title: "Better Career Opportunities",
    description:
      "Access a wide range of global job opportunities in hospitals, research centers, and healthcare organizations.",
  },
  {
    icon: b4,
    title: "International Clinical Exposure",
    description:
      "Gain hands-on experience in hospitals and healthcare facilities across different countries.",
  },
];


const AlliedHealthandScience = () => {
  return (
   <>
  <Navbar/>
  <CoursesHero
  title="Study Medicine Abroad & Build a Global Healthcare Career"
  description="Pursue world-class medical education with advanced training, modern facilities, and international exposure. Start your journey to becoming a skilled healthcare professional at top universities around the world."
  buttonText="Book Free Counselling"
  buttonLink="/contact"
  image={heroImage}
/>
<ProgramInfoSection
  image={programImage}
  title="About the"
  highlight="Program"
  description={[
    "Studying Medicine abroad provides students with access to world-class medical education, advanced research facilities, and hands-on clinical training. Many international universities offer comprehensive medical programs designed to build strong knowledge in human health, disease prevention, diagnosis, and patient care. Students benefit from modern laboratories, experienced faculty, and practical exposure in well-equipped hospitals.",

    "Pursuing a medical degree internationally also allows students to experience different healthcare systems and gain valuable global perspectives. With a strong focus on research, innovation, and clinical practice, medical programs abroad prepare students to become skilled healthcare professionals capable of making a positive impact on society."
  ]}
/>

<CoursesOffered
  title="Popular Medicine "
  highlight="Programs"
 
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
  description="Graduates in Medicine can pursue a variety of rewarding careers, including:"
  opportunities={opportunitiesList}
  enrollTitle="Who Should"
  enrollHighlight="Enroll?"
  enrollSubtitle="This program is ideal for:"
  enrollList={enrollList}
/>



<BenefitsSection
  title="Benefits of Studying Medicine"
  highlight="Courses"
 
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
