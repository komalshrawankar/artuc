import React from 'react'
import Navbar from "../../component/Navbar"
import heroBg from "../../assets/images/about-bg2.png"
import PageHero from '../../component/About/PageHero'
import InfoSection from '../../component/Testprep/InfoSection'
import gmatImage   from "../../assets/images/infosection.png"
import whyBg from "../../assets/homepage/why-bg.jpg"
import whyImage from "../../assets/homepage/expert.png"
import WhyChooseTemplate from '../../component/homepage/WhyChooseTemplate';
import HighlightsSection from "../../component/Testprep/HighlightsSection";
import ExamStructure from "../../component/Testprep/ExamStructure";
import WhoShouldTake from "../../component/Testprep/WhoShouldTake";
import whoImage from "../../assets/images/who-should-take.png";
import ProcessBenefitsSection from "../../component/Testprep/ProcessBenefitsSection";
import CTASection from "../../component/Testprep/CTASection";
import blueBg from "../../assets/homepage/blue-bg.png";
import h1 from "../../assets/images/h1.png"
import h2 from "../../assets/images/h2.png"
import h3 from "../../assets/images/h3.png"
import h4 from "../../assets/images/h4.png"
import h5 from "../../assets/images/h5.png"
import h6 from "../../assets/images/h6.png"
import e1 from "../../assets/images/e1.png";
import e2 from "../../assets/images/e2.png";
import e3 from "../../assets/images/e3.png";
import e4 from "../../assets/images/e4.png";
import b1 from "../../assets/images/b1.png";
import b2 from "../../assets/images/b2.png";
import b3 from "../../assets/images/b3.png";
import b4 from "../../assets/images/b4.png";
import ctaBg from "../../assets/homepage/blue-bg.png";
import Testimonials from '../../component/homepage/Testimonials'
import Footer from '../../component/Footer'

const examStructure = [
  {
    icon: e1,
    title: "Analytical Writing",
    description: "Evaluate arguments and express ideas clearly in written form.",
  },
  {
    icon: e2,
    title: "Integrated Reasoning",
    description: "Interpret data presented in multiple formats such as graphs and tables.",
  },
  {
    icon: e3,
    title: "Quantitative Reasoning",
    description: "Solve mathematical problems involving algebra, arithmetic, and data analysis.",
  },
  {
    icon: e4,
    title: "Verbal Reasoning",
    description: "Test reading comprehension, grammar, and critical reasoning skills.",
  },
];



const points = [
  "Expert GMAT trainers",
  "Structured course curriculum",
  "Regular practice tests",
  "Personalized performance analysis",
  "Doubt-solving sessions",
  "Exam strategy guidance",
];
const courseHighlights = [
  {
    icon: h1,
    title: "Experienced GMAT trainers",
    description: "Learn from top-tier instructors with years of proven success.",
  },
  {
    icon: h2,
    title: "Structured learning modules",
    description: "Step-by-step curriculum designed for maximum retention.",
  },
  {
    icon: h3,
    title: "Practice tests and mock exams",
    description: "Simulate the real test environment to build confidence.",
  },
  {
    icon: h4,
    title: "Personalized performance analysis",
    description: "Detailed insights into your strengths and areas for improvement.",
  },
  {
    icon: h5,
    title: "Doubt-solving sessions",
    description: "1-on-1 support to resolve your queries quickly.",
  },
  {
    icon: h6,
    title: "Study materials and exam strategies",
    description: "Comprehensive guides and proven tactics for high scores.",
  },
];
const whoPoints = [
  "Students planning to pursue an MBA abroad",
  "Professionals seeking admission to international business schools",
  "Candidates aiming for global management programs",
  "Students applying to top universities in the UK, USA, Canada, and Australia",
];


const processSteps = [
  {
    number: "01",
    title: "Skill Assessment",
    description: "We evaluate your current level to create a personalized learning plan.",
  },
  {
    number: "02",
    title: "Concept Training",
    description: "Learn GMAT concepts through structured lessons and practice sessions.",
  },
  {
    number: "03",
    title: "Mock Tests",
    description: "Practice with full-length mock exams that simulate the real GMAT experience.",
  },
  {
    number: "04",
    title: "Performance Improvement",
    description: "Analyze results and improve weak areas through targeted practice.",
  },
];

const benefits = [
  {
    icon: b1,
    title: "Admission to top MBA universities",
  },
  {
    icon: b2,
    title: "Increased chances of scholarships",
  },
  {
    icon: b3,
    title: "Global career opportunities",
  },
  {
    icon: b4,
    title: "Stronger academic profile",
  },
];

const Gmat = () => {
  return (
   <>
  <Navbar/>
  <PageHero
  title="GMAT Preparation"
  highlight="Course"
  subtitle="Prepare for the GMAT with expert guidance and proven strategies to secure admission to top business schools worldwide."
  backgroundImage={heroBg}
  buttonText="Book Free Counseling"
  buttonLink="/contact"
/>
<InfoSection
  image={gmatImage}
  title="What is the"
  highlight="GMAT?"
  description={[
    "The Graduate Management Admission Test (GMAT) is a globally recognized entrance exam required by many leading business schools for MBA and management programs.",
    "The exam evaluates a candidate’s analytical thinking, quantitative ability, verbal reasoning, and problem-solving skills.",
    "A strong GMAT score can significantly increase your chances of getting admitted to top universities and qualifying for scholarships.",
  ]}
/>
<WhyChooseTemplate
  bgImage={whyBg}
  mainImage={whyImage}
  tag="Why Choose us"
  beforeText="Why Choose Artuc for"
  orangeText="GMAT"
  orangeText2="Preparation?"
//   afterText="For Your Goal"
  description="At Artuc, we provide comprehensive GMAT coaching that focuses on concept clarity, test strategies, and real exam practice. Our training programs are designed to help students improve their scores and approach the exam with confidence."
  points={points}
/>
<HighlightsSection
  title="Course"
  highlight="Highlights"
  subtitle="Everything you need to succeed in your GMAT journey"
  items={courseHighlights}
/>
<ExamStructure
  title="GMAT Exam"
  highlight="Structure"
  subtitle="The exam consists of four main sections designed to test different analytical and reasoning skills."
  items={examStructure}
/>
<WhoShouldTake
  image={whoImage}
  title="Who Should Take the"
  highlight="GMAT?"
  description="This course is carefully designed for ambitious individuals aiming for top-tier education and global career opportunities."
  points={whoPoints}
/>

<ProcessBenefitsSection
  processTitle="Our GMAT Preparation"
  processHighlight="Process"
  processSubtitle="A proven 4-step methodology to maximize your score and reach your dream school."
  processSteps={processSteps}
  benefitsTitle="Benefits of a High"
  benefitsHighlight="GMAT Score"
  benefits={benefits}
/>;

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

export default Gmat
