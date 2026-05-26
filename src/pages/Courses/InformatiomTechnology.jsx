import React from 'react'
import Navbar from '../../component/Navbar'
import CoursesHero from "../../component/Courses/CoursesHero";
import ProgramInfoSection from "../../component/Courses/ProgramInfoSection";
import CoursesOffered from "../../component/Courses/CoursesOffered";
import CourseHighlights from "../../component/Courses/CourseHighlights";
import CareerOpportunities from "../../component/Courses/CareerOpportunities";
import TopUniversities from "../../component/Courses/TopUniversities";
import BenefitsSection from "../../component/Courses/BenefitsSection";




import heroImage from "../../assets/courses/it-bg.png";
import programImage from "../../assets/courses/it-p.png";
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
  { icon: o1, title: "Software Developer" },
  { icon: o2, title: "Web Developer" },
  { icon: o3, title: "Data Analyst" },
  { icon: o4, title: "Cybersecurity Specialist" },
  { icon: o5, title: "IT Consultant" },
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
    title: "Software Development",
    description:
      "Learn to design and build software applications and systems.",
  },
  {
    icon: c2,
    title: "Web Development",
    description:
      "Develop websites and web applications using modern technologies.",
  },
  {
    icon: c3,
    title: "Data Analytics",
    description:
      "Analyze data to gain insights and support business decisions.",
  },
  {
    icon: c4,
    title: "Cybersecurity",
    description:
      "Protect systems, networks, and data from cyber threats.",
  },
  {
    icon: c5,
    title: "Artificial Intelligence & Machine Learning",
    description:
      "Build intelligent systems that learn from data and automate tasks.",
  },
  {
    icon: c6,
    title: "Cloud Computing",
    description:
      "Learn to manage and deploy applications using cloud platforms.",
  },
];
const highlightsList = [
  "Industry-focused IT curriculum",
  "Practical coding and development projects",
  "Guidance from experienced trainers",
  "Exposure to modern programming tools and technologies",
  "Hands-on learning and real-world projects",
  "Career guidance and placement support",
];


const benefitsList = [
  {
    icon: b1,
    title: "High-Demand Career Field",
    description:
      "Technology professionals are needed across industries, creating strong job opportunities.",
  },
  {
    icon: b2,
    title: "Continuous Innovation",
    description:
      "The IT industry constantly evolves, offering opportunities to learn new technologies and advance your career.",
  },
  {
    icon: b3,
    title: "Competitive Salaries",
    description:
      "IT professionals often receive attractive salary packages and career growth opportunities.",
  },
  {
    icon: b4,
    title: "Global Career Opportunities",
    description:
      "IT skills are in demand worldwide, allowing professionals to work with international companies.",
  },
];


const AlliedHealthandScience = () => {
  return (
   <>
   <Navbar/>
   <CoursesHero
  title="Build a Future in Information Technology"
  description="Step into the world of technology with programs designed to develop skills in software development, data management, cybersecurity, and modern digital technologies."
  buttonText="Book Free Counselling"
  buttonLink="/contact"
  image={heroImage}
/>
<ProgramInfoSection
  image={programImage}
  title="About the"
  highlight="Program"
  description={[
    "Information Technology programs focus on developing technical knowledge and practical skills required in today’s digital world. These courses prepare students to understand computer systems, software development, data management, and emerging technologies.",

    "With technology transforming every industry, IT professionals are in high demand across sectors such as software development, finance, healthcare, and e-commerce."
  ]}
/>

<CoursesOffered
  title="Courses"
  highlight="Offered"
  subtitle="Our Information Technology programs include a range of specialized areas such as:"
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
  description="Graduates of Information Technology programs can pursue careers in various fields, including:"
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
