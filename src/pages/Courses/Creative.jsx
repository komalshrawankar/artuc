import React from 'react'
import Navbar from '../../component/Navbar'
import CoursesHero from "../../component/Courses/CoursesHero";
import ProgramInfoSection from "../../component/Courses/ProgramInfoSection";
import CoursesOffered from "../../component/Courses/CoursesOffered";
import CourseHighlights from "../../component/Courses/CourseHighlights";
import CareerOpportunities from "../../component/Courses/CareerOpportunities";
import TopUniversities from "../../component/Courses/TopUniversities";
import BenefitsSection from "../../component/Courses/BenefitsSection";




import heroImage from "../../assets/courses/create-bg.png";
import programImage from "../../assets/courses/create-p.png";
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
  { icon: o1, title: "Graphic Design Studios" },
  { icon: o2, title: "Advertising and Marketing Agencies" },
  { icon: o3, title: "Media and Entertainment Companies" },
  { icon: o4, title: "Digital Content Creation" },
  { icon: o5, title: "Film and Production Houses" },
];
const enrollList = [
  { icon: o11, title: "Students passionate about art, design, and creativity" },
  { icon: o22, title: "Individuals interested in media, communication, and visual storytelling" },
  { icon: o33, title: "Students looking to build careers in creative industries" },
  { icon: o44, title: "Candidates who enjoy creative thinking and innovative design" },
];
const offeredCourses = [
  {
    icon: c1,
    title: "Graphic Design",
    description:
      "Learn to create visual designs for branding, marketing, and digital media.",
  },
  {
    icon: c2,
    title: "Visual Communication",
    description:
      "Understand how images, graphics, and layouts convey messages effectively.",
  },
  {
    icon: c3,
    title: "Multimedia and Animation",
    description:
      "Develop skills in digital animation, video editing, and interactive media.",
  },
  {
    icon: c4,
    title: "Photography and Videography",
    description:
      "Learn techniques for capturing and producing professional photos and videos.",
  },
  {
    icon: c5,
    title: "Hospital Administration",
    description:
      "Develop leadership skills to manage hospital operations, healthcare policies, and facility administration.",
  },
  {
    icon: c6,
    title: "Media and Communication Studies",
    description:
      "Explore how media platforms communicate information and influence audiences.",
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
    title: "Develop Critical Thinking",
    description:
      "Students learn to analyze social issues, understand human behavior, and evaluate different perspectives.",
  },
  {
    icon: b2,
    title: "Strong Communication Skills",
    description:
      "These programs enhance writing, speaking, and presentation skills essential for many careers.",
  },
  {
    icon: b3,
    title: "Foundation for Higher Studies",
    description:
      "Arts and social science programs provide a strong base for advanced studies in specialized fields.",
  },
  {
    icon: b4,
    title: "Diverse Career Opportunities",
    description:
      "Graduates can work in multiple industries including media, education, research, and public service.",
  },
];


const AlliedHealthandScience = () => {
  return (
   <>
   <Navbar/>
   <CoursesHero
  title="Turn Your Creativity into a Successful Career"
  description="Explore your creative potential with programs in arts, design, and communication that help you develop innovative ideas, visual storytelling skills, and modern creative techniques."
  buttonText="Book Free Counselling"
  buttonLink="/contact"
  image={heroImage}
/>
<ProgramInfoSection
  image={programImage}
  title="About the"
  highlight="Program"
  description={[
    "Creative Arts, Design, and Communication programs focus on developing artistic talent, creative thinking, and communication skills. These courses combine creativity with practical techniques to prepare students for careers in design, media, advertising, and creative industries.",

    "Students learn how to transform ideas into visual concepts, develop engaging content, and communicate messages effectively through modern creative tools and techniques."
  ]}
/>

<CoursesOffered
  title="Courses"
  highlight="Offered"
  subtitle="Our Creative Arts, Design, and Communication programs include various creative fields such as:"
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
  title="Benefits of Creative"
  highlight="Courses"
  subtitle="A career in creative successful career offers stability, growth, and the opportunity to make a real difference."
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
