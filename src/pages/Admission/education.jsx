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
import heroImage from "../../assets/admission/educase-bg.png";
import programImage from "../../assets/admission/edu-p.png";
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
  { icon: o1, title: "Hospitals and Clinics" },
  { icon: o2, title: "Diagnostic Laboratories" },
  { icon: o3, title: "Medical Research Centers" },
  { icon: o4, title: "Rehabilitation Centers" },
  { icon: o5, title: "Medical Equipment Companies" },
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
    title: "Medical Laboratory Technology (MLT)",
    description:
      "Learn to perform complex medical tests to help physicians diagnose, treat, and prevent diseases.",
  },
  {
    icon: c2,
    title: "Radiology & Imaging Technology",
    description:
      "Master the use of medical imaging equipment like X-rays, MRI, and CT scanners for patient diagnosis.",
  },
  {
    icon: c3,
    title: "Operation Theatre Technology",
    description:
      "Gain expertise in managing operation theatre equipment and assisting surgeons during procedures.",
  },
  {
    icon: c4,
    title: "Dialysis Technology",
    description:
      "Specialized training in operating dialysis machines and providing vital care for patients with kidney disorders.",
  },
  {
    icon: c5,
    title: "Hospital Administration",
    description:
      "Develop leadership skills to manage hospital operations, healthcare policies, and facility administration.",
  },
  {
    icon: c6,
    title: "Healthcare Assistant Programs",
    description:
      "Train to provide essential patient care and support nursing staff in hospitals and clinics.",
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
  title="Education Loan Assistance for Your Study Abroad Dreams"
  description="Get expert support in securing the right education loan to fund your studies and achieve your academic goals with confidence."
  buttonText="Book Free Counselling"
  buttonLink="/contact"
  image={heroImage}
/>
<ProgramInfoSection
  image={programImage}
  title="Education Loan "
  highlight="Assistance"
  description={[
    "Pursuing higher education, especially abroad, can require significant financial planning. Our Education Loan Assistance service helps students secure the financial support they need to achieve their academic goals without unnecessary stress. We guide students and their families through the entire loan process, making it easier to access funding for tuition fees, living expenses, travel, and other education-related costs.",

    "Our team works closely with trusted financial institutions and banks to help students find suitable loan options with competitive interest rates and flexible repayment plans. From selecting the right lender to preparing the required documents, we provide complete support at every step of the loan application process."
  ]}
/>

<CoursesOffered
  title="What We "
  highlight="Help With"
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
  subtitle="If you’re planning to pursue Allied Health Sciences abroad, here are some of the world’s top institutions offering high-quality education and practical training in this field:"
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
