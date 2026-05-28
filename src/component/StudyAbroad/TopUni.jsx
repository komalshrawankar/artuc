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

const TopUni = ({ universityList = universities, courseList = courses }) => {
  return (
    <>
      <style>
        {`
          .top-uni-section {
            width: 100%;
            background: #EEF2FA;
            padding: 58px 78px;
          }

          .top-uni-container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1.15fr 1fr;
            gap: 90px;
          }

          .top-uni-heading {
            display: flex;
            align-items: center;
            gap: 15px;
            font-size: 40px;
            font-weight: 800;
            color: #252525;
            margin-bottom: 24px;
            line-height: 1.2;
          }

          .top-uni-heading svg {
            color: #ff6b1a;
            font-size: 30px;
            flex-shrink: 0;
          }

          .orange-text {
            color: #ff6b1a;
          }

          .uni-row {
            height: 60px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid rgba(255,255,255,0.7);
            padding-right: 10px;
            gap: 15px;
          }

          .uni-row p {
            font-size: 20px;
            font-weight: 500;
            color: #101827;
            margin: 0;
          }

          .uni-star {
            color: #8ea1bd;
            font-size: 18px;
            flex-shrink: 0;
          }

          .course-list {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          .course-card {
            width: fit-content;
            display: flex;
            align-items: center;
            gap: 10px;
            background: #F7F9FD;
            border-radius: 8px;
            padding: 10px 11px;
            box-shadow: 0 1px 4px rgba(0,0,0,.05);
          }

          .course-icon {
            color: #ff6b1a;
            font-size: 18px;
            display: flex;
          }

          .course-title {
            font-size: 11px;
            color: #222;
            font-weight: 500;
            white-space: nowrap;
          }

          @media (max-width: 991px) {
            .top-uni-section {
              padding: 45px 35px;
            }

            .top-uni-container {
              grid-template-columns: 1fr;
              gap: 45px;
            }

            .top-uni-heading {
              font-size: 34px;
            }

            .uni-row p {
              font-size: 18px;
            }
          }

          @media (max-width: 575px) {
            .top-uni-section {
              padding: 38px 18px;
            }

            .top-uni-container {
              gap: 38px;
            }

            .top-uni-heading {
              font-size: 27px;
              gap: 10px;
              margin-bottom: 18px;
              flex-wrap: wrap;
            }

            .top-uni-heading svg {
              font-size: 24px;
            }

            .uni-row {
              height: auto;
              min-height: 52px;
              padding: 10px 4px 10px 0;
            }

            .uni-row p {
              font-size: 15px;
              line-height: 1.4;
            }

            .uni-star {
              font-size: 15px;
            }

            .course-list {
              gap: 12px;
            }

            .course-card {
              width: 100%;
              padding: 11px 12px;
            }

            .course-title {
              font-size: 13px;
              white-space: normal;
            }

            .course-icon {
              font-size: 17px;
              flex-shrink: 0;
            }
          }
        `}
      </style>

      <section className="top-uni-section">
        <div className="top-uni-container">
          {/* Left */}
          <div>
            <h2 className="top-uni-heading">
              <FaUniversity />
              Top <span className="orange-text">Universities</span>
            </h2>

            <div style={{ width: "100%" }}>
              {universityList.map((item, index) => (
                <div key={index} className="uni-row">
                  <p>{item}</p>
                  <FaRegStar className="uni-star" />
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <h2 className="top-uni-heading">
              <FaBookOpen />
              Popular <span className="orange-text">Courses</span>
            </h2>

            <div className="course-list">
              {courseList.map((course, index) => (
                <div key={index} className="course-card">
                  <span className="course-icon">{course.icon}</span>
                  <span className="course-title">{course.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopUni;