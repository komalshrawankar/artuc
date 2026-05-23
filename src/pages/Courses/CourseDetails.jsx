import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../component/Navbar";

const CourseDetails = () => {
  const { slug } = useParams();

  const courseName = slug ? slug.replace(/-/g, " ") : "Courses";

  return (
    <>
      

      
    </>
  );
};

export default CourseDetails;