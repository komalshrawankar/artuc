import React from 'react'
import Navbar from '../../component/Navbar'
import CoursesHero from "../../component/Courses/CoursesHero";
import ProgramInfoSection from "../../component/Courses/ProgramInfoSection";
import CoursesOffered from "../../component/Courses/CoursesOffered";
import CourseHighlights from "../../component/Courses/CourseHighlights";
import CareerOpportunities from "../../component/Courses/CareerOpportunities";
import TopUniversities from "../../component/Courses/TopUniversities";
import BenefitsSection from "../../component/Courses/BenefitsSection";




import heroImage from "../../assets/courses/art-bg.png";
import programImage from "../../assets/courses/art-program.png";
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
  { icon: o1, title: "Education and Teaching" },
  { icon: o2, title: "Media and Journalism" },
  { icon: o3, title: "Public Administration" },
  { icon: o4, title: "Social Work and Community Development" },
  { icon: o5, title: "Research and Policy Analysis" },
];
const enrollList = [
  { icon: o11, title: "Students interested in social sciences and cultural studies" },
  { icon: o22, title: "Individuals who enjoy research, writing, and critical analysis" },
  { icon: o33, title: "Students looking for diverse career options in education, media, and public services" },
  { icon: o44, title: "Candidates seeking programs that develop communication and analytical skills" },
];
const offeredCourses = [
  {
    icon: c1,
    title: "Psychology",
    description:
      "Study human behavior, emotions, and mental processes to understand how people think, learn, and interact in different situations.",
  },
  {
    icon: c2,
    title: "Sociology",
    description:
      "Explore how societies function, including social relationships, cultures, institutions, and the factors that shape communities.",
  },
  {
    icon: c3,
    title: "Political Science",
    description:
      "Understand political systems, governance, public policies, and the role of government in shaping society and international relations.",
  },
  {
    icon: c4,
    title: "Literature & Language Studies",
    description:
      "Develop strong communication and analytical skills through the study of literary works, languages, and cultural expression.",
  },
  {
    icon: c5,
    title: "Media & Communication Studies",
    description:
      "Examine how media influences society, communication strategies, digital platforms, and modern information sharing.",
  },
  {
    icon: c6,
    title: "Public Administration",
    description:
      "Gain knowledge of government operations, policy implementation, and administrative practices used in public sector management.",
  },
];
const highlightsList = [
  "Comprehensive academic curriculum",
  "Focus on critical thinking and analysis",
  "Guidance from experienced faculty",
  "Interactive learning and discussions",
  "Research and project opportunities",
  "Career counselling and academic support",
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
  title="Explore Creativity, Culture, and Society"
  description="Build a meaningful career in Arts, Humanities, and Social Sciences with programs that develop critical thinking, communication skills, and a deeper understanding of human society and culture."
  buttonLink="/contact"
  image={heroImage}
/>
<ProgramInfoSection
  image={programImage}
  title="About the"
  highlight="Program"
  description={[
    "Arts, Humanities, and Social Sciences programs focus on understanding human behavior, culture, communication, and social structures. These fields encourage creativity, analytical thinking, and the ability to explore complex social and cultural issues.",

    "Through these programs, students gain knowledge in subjects such as history, psychology, sociology, literature, media studies, and political science, preparing them for diverse career opportunities."
  ]}
/>

<CoursesOffered
  title="Courses"
  highlight="Offered"
  subtitle="Through these programs, students gain knowledge in subjects such as history, psychology, sociology, literature, media studies, and political science, preparing them for diverse career opportunities."
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
  description="Graduates in Arts, Humanities, and Social Sciences can pursue careers in various sectors, including:"
  opportunities={opportunitiesList}
  enrollTitle="Who Should"
  enrollHighlight="Enroll?"
  enrollSubtitle="This program is ideal for:"
  enrollList={enrollList}
/>



<BenefitsSection
  title="Benefits of Studying "
  highlight="Arts & Social Sciences"
  subtitle="A career in allied health offers stability, growth, and the opportunity to make a real difference."
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
