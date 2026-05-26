import React from "react";
import { useParams } from "react-router-dom";
import TopUni from "../../component/StudyAbroad/TopUni";
import WorkOpportunities from "../../component/StudyAbroad/WorkOpportunities";

const StudyAbroadDetails = () => {
  const { slug } = useParams();

  return (
    <>
      <div style={{ padding: "100px 20px", textAlign: "center" }}>
        <h1 style={{ color: "#ff7a1a", textTransform: "capitalize" }}>
          Study in {slug.replace(/-/g, " ")}
        </h1>

        <p style={{ fontSize: "18px", marginTop: "15px" }}>
          This is the study abroad page for {slug.replace(/-/g, " ")}.
        </p>
      </div>

      <TopUni />

      <WorkOpportunities />
    </>
  );
};

export default StudyAbroadDetails;
