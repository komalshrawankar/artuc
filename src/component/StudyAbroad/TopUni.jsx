/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaUniversity,
  FaRegStar,
  FaBookOpen,
  FaChartBar,
  FaDraftingCompass,
  FaLaptop,
  FaBriefcaseMedical,
  FaUtensils,
  FaPalette,
} from "react-icons/fa";

const universities = [
  "Australian National University",
  "University of Melbourne",
  "University of Sydney",
  "University of Queensland",
  "Monash University",
  "University of Western Australia",
];

const courses = [
  { title: "Business & Management", icon: <FaChartBar /> },
  { title: "Engineering & Technology", icon: <FaDraftingCompass /> },
  { title: "Information Technology", icon: <FaLaptop /> },
  { title: "Health Sciences", icon: <FaBriefcaseMedical /> },
  { title: "Hospitality & Tourism", icon: <FaUtensils /> },
  { title: "Creative Arts & Design", icon: <FaPalette /> },
];

const TopUni = ({
  universityList = universities,
  courseList = courses,
}) => {
  return (
    <section
      style={{
        width: "100%",
        background: "#EEF2FA",
        padding: "58px 78px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          display: "grid",
          gridTemplateColumns: "1.15fr 1fr",
          gap: "90px",
        }}
      >
        {/* Left */}
        <div>
          <h2
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              fontSize: "40px",
              fontWeight: "800",
              color: "#252525",
              marginBottom: "24px",
            }}
          >
            <FaUniversity
              style={{
                color: "#ff6b1a",
                fontSize: "30px",
              }}
            />

            Top
            <span style={{ color: "#ff6b1a" }}>
              Universities
            </span>
          </h2>

          <div style={{ width: "100%" }}>
            {universityList.map((item, index) => (
              <div
                key={index}
                style={{
                  height: "60px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid rgba(255,255,255,0.7)",
                  paddingRight: "10px",
                }}
              >
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    color: "#101827",
                    margin: 0,
                  }}
                >
                  {item}
                </p>

                <FaRegStar
                  style={{
                    color: "#8ea1bd",
                    fontSize: "18px",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div>
          <h2
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              fontSize: "40px",
              fontWeight: "800",
              color: "#252525",
              marginBottom: "20px",
            }}
          >
            <FaBookOpen
              style={{
                color: "#ff6b1a",
                fontSize: "30px",
              }}
            />

            Popular
            <span style={{ color: "#ff6b1a" }}>
              Courses
            </span>
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            {courseList.map((course, index) => (
              <div
                key={index}
                style={{
                  width: "fit-content",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "#F7F9FD",
                  borderRadius: "8px",
                  padding: "10px 11px",
                  boxShadow: "0 1px 4px rgba(0,0,0,.05)",
                }}
              >
                <span
                  style={{
                    color: "#ff6b1a",
                    fontSize: "18px",
                  }}
                >
                  {course.icon}
                </span>

                <span
                  style={{
                    fontSize: "11px",
                    color: "#222",
                    fontWeight: "500",
                    whiteSpace: "nowrap",
                  }}
                >
                  {course.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopUni;