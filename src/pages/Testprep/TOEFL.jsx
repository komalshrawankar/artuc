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
  "Expert TOEFL trainers",
  "Structured learning modules",
  "Practice exercises and mock tests",
  "Personalized feedback and performance tracking",
  "Doubt-solving sessions",
  "Exam preparation strategies",
];
const courseHighlights = [
  {
    icon: h1,
    title: "Expert Faculty Guidance",
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
    description: "Learn TOEFL concepts through structured lessons and practice sessions.",
  },
  {
    number: "03",
    title: "Mock Tests",
    description: "Practice with full-length mock exams that simulate the real TOEFL experience.",
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
  title="TOEFL Preparation "
  highlight="Course"
  subtitle="Achieve your target TOEFL score with expert coaching, structured training, and practice tests designed to help you gain admission to top universities worldwide."
  backgroundImage={heroBg}
  buttonText="Book Free Counseling"
  buttonLink="/contact"
/>
<InfoSection
  image={gmatImage}
  title="What is the"
  highlight="TOEFL?"
  description={[
    "The Graduate Record Examination (TOEFL) is a globally recognized standardized test required for admission to many graduate and postgraduate programs abroad. Universities use TOEFL scores to evaluate a candidate’s analytical writing, quantitative reasoning, and verbal reasoning skills.",
    "A strong TOEFL score can increase your chances of getting admitted to top universities and improve opportunities for scholarships",
  ]}
/>
<WhyChooseTemplate
  bgImage={whyBg}
  mainImage={whyImage}
  tag="Why Choose us"
  beforeText="Why Choose Artuc for"
  orangeText="TOEFL"
  orangeText2="Preparation?"
//   afterText="For Your Goal"
  description="At Artuc, we provide comprehensive TOEFL coaching designed to help students understand the exam format, strengthen their concepts, and improve their performance through regular practice.
Our experienced trainers guide students with effective strategies and personalized support to help them achieve their desired scores."
  points={points}
/>
<HighlightsSection
  title="Course"
  highlight="Highlights"
  subtitle="Everything you need to succeed in your TOEFL journey"
  items={courseHighlights}
/>
<ExamStructure
  title="TOEFL Exam"
  highlight="Structure"
  subtitle="The exam consists of four main sections designed to test different analytical and reasoning skills."
  items={examStructure}
/>
<WhoShouldTake
  image={whoImage}
  title="Who Should Take the"
  highlight="TOEFL?"
  description="This course is carefully designed for ambitious individuals aiming for top-tier education and global career opportunities."
  points={whoPoints}
/>

<ProcessBenefitsSection
  processTitle="Our TOEFL Preparation"
  processHighlight="Process"
  processSubtitle="A proven 4-step methodology to maximize your score and reach your dream school."
  processSteps={processSteps}
  benefitsTitle="Benefits of a High"
  benefitsHighlight="TOEFL Score"
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
