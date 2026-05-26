import React from 'react'
import Navbar from '../../component/Navbar'
import CoursesHero from "../../component/Courses/CoursesHero";
import ProgramInfoSection from "../../component/Courses/ProgramInfoSection";
import CoursesOffered from "../../component/Courses/CoursesOffered";
import CourseHighlights from "../../component/Courses/CourseHighlights";
import CareerOpportunities from "../../component/Courses/CareerOpportunities";
import TopUniversities from "../../component/Courses/TopUniversities";
import BenefitsSection from "../../component/Courses/BenefitsSection";




import heroImage from "../../assets/courses/law-bg.png";
import programImage from "../../assets/courses/law-p.png";
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
  { icon: o1, title: "Legal Practice and Advocacy" },
  { icon: o2, title: "Corporate Legal Departments" },
  { icon: o3, title: "Judiciary and Public Service" },
  { icon: o4, title: "Legal Consulting" },
  { icon: o5, title: "Compliance and Regulatory Roles" },
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
    title: "Strong Professional Career",
    description:
      "Law graduates have opportunities to work in legal practice, corporate sectors, and public service.",
  },
  {
    icon: c2,
    title: "Develop Critical Thinking Skills",
    description:
      "Legal education enhances analytical thinking, reasoning, and decision-making abilities.",
  },
  {
    icon: c3,
    title: "Diverse Career Paths",
    description:
      "Law professionals can work in courts, corporations, government organizations, and international institutions.",
  },
  {
    icon: c4,
    title: "Dialysis Technology",
    description:
      "Specialized training in operating dialysis machines and providing vital care for patients with kidney disorders.",
  },
  {
    icon: c5,
    title: "Opportunities for Higher Studies",
    description:
      "Law provides a strong foundation for advanced legal education and specialized legal careers.",
  },
  
];
const highlightsList = [
  "Comprehensive legal curriculum",
  " Case study and legal research training",
  "Guidance from experienced legal professionals",
  "Development of analytical and critical thinking skills",
  "Exposure to legal procedures and documentation",
  "Career guidance for legal professions",
];


const benefitsList = [
  {
    icon: b1,
    title: "Strong Professional Career",
    description:
      "Law graduates have opportunities to work in legal practice, corporate sectors, and public service.",
  },
  {
    icon: b2,
    title: "Develop Critical Thinking Skills",
    description:
      "Legal education enhances analytical thinking, reasoning, and decision-making abilities.",
  },
  {
    icon: b3,
    title: "Diverse Career Paths",
    description:
      "Law professionals can work in courts, corporations, government organizations, and international institutions.",
  },
  {
    icon: b4,
    title: "Opportunities for Higher Studies",
    description:
      "Law provides a strong foundation for advanced legal education and specialized legal careers.",
  },
];


const AlliedHealthandScience = () => {
  return (
   <>
   <Navbar/>
   <CoursesHero
  title="Build a Career in Law and Justice"
  description="Pursue your passion for justice and legal studies with programs designed to develop strong analytical, research, and advocacy skills for a successful legal career."
  buttonText="Book Free Counselling"
  buttonLink="/contact"
  image={heroImage}
/>
<ProgramInfoSection
  image={programImage}
  title="About the"
  highlight="Program"
  description={[
    "Law programs focus on understanding legal systems, regulations, and the principles of justice that govern society. These courses provide students with in-depth knowledge of legal frameworks, critical thinking skills, and the ability to analyze complex legal issues.",

    "Students gain insights into various areas of law, including civil law, criminal law, corporate law, and international law, preparing them for diverse legal careers."
  ]}
/>

<CoursesOffered
  title="Areas of "
  highlight="Study"
  subtitle="Our law programs cover important legal disciplines such as:"
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
  description="Graduates in law can pursue careers in various sectors, including:"
  opportunities={opportunitiesList}
  enrollTitle="Who Should"
  enrollHighlight="Enroll?"
  enrollSubtitle="This program is ideal for:"
  enrollList={enrollList}
/>



<BenefitsSection
  title="Benefits of Studying "
  highlight="Information Technology"
 
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
