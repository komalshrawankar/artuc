import React from "react";
import { useParams } from "react-router-dom";

const AdmissionService = () => {
  const { slug } = useParams();

  const services = {
    "student-accommodation-support": {
      title: "Student Accommodation Support",
      description:
        "We help students find safe, affordable, and comfortable accommodation options abroad.",
    },

    "scholarship-application-assistance": {
      title: "Scholarship Application Assistance",
      description:
        "Get expert guidance for applying and improving scholarship opportunities.",
    },

    "international-student-insurance": {
      title: "International Student Insurance",
      description:
        "Assistance in choosing suitable insurance plans for international students.",
    },

    "course-and-university-selection": {
      title: "Course and University Selection",
      description:
        "Choose the right course and university based on your goals and profile.",
    },

    "end-to-end-applications": {
      title: "End to End Applications",
      description:
        "Complete support from application submission to final admission.",
    },

    "interview-preparation": {
      title: "Interview Preparation",
      description:
        "Mock interviews and preparation guidance for admissions success.",
    },

    "letter-of-recommendation": {
      title: "Letter of Recommendation",
      description:
        "Support in preparing impactful recommendation documents.",
    },

    "visa-application-support": {
      title: "Visa Application Support",
      description:
        "Step-by-step assistance for student visa processing.",
    },

    "education-loan-assistance": {
      title: "Education Loan Assistance",
      description:
        "Guidance for selecting and applying for education loans.",
    },

    "forex-assistance": {
      title: "Forex Assistance",
      description:
        "Help with international currency exchange services.",
    },

    "test-preparations": {
      title: "Test Preparations",
      description:
        "Preparation support for entrance and language exams.",
    },

    "career-counseling": {
      title: "Career Counseling",
      description:
        "Professional advice for career and academic planning.",
    },

    "travel-assistance": {
      title: "Travel Assistance",
      description:
        "Support for travel planning and departure arrangements.",
    },
  };

  const service = services[slug];

  if (!service) {
    return (
      <div style={{ padding: "80px", textAlign: "center" }}>
        <h2>Service Not Found</h2>
      </div>
    );
  }

  return (
   <>
   </>
  );
};

export default AdmissionService;