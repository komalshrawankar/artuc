/* eslint-disable no-unused-vars */
import React from "react";
import { FaCalendarAlt, FaStopwatch, FaRocket } from "react-icons/fa";

const intakes = [
  {
    title: "February Intake",
    desc: "Major intake for most programs",
  },
  {
    title: "July Intake",
    desc: "Second major intake period",
  },
  {
    title: "November Intake",
    desc: "Selected specialized programs",
  },
];

const sectors = [
  "Business & Finance",
  "Engineering",
  "Healthcare",
  "Information Technology",
  "Education & Research",
];

const WorkOpportunities = ({ intakeList = intakes, sectorList = sectors }) => {
  return (
    <>
      <style>
        {`
          .work-opportunities-section {
            width: 100%;
            background: #0E1729;
            padding: 48px 68px 44px;
            box-sizing: border-box;
          }

          .work-opportunities-container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1.15fr 1fr;
            gap: 70px;
            align-items: flex-start;
          }

          .work-icon-box {
            width: 41px;
            height: 41px;
            background: #ff7a1a;
            border-radius: 11px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 16px;
          }

          .work-icon-box svg {
            color: #fff;
            font-size: 18px;
          }

          .work-title {
            color: #fff;
            font-size: 25px;
            font-weight: 800;
            margin: 0 0 18px;
            line-height: 1.2;
          }

          .intake-item {
            margin-bottom: 18px;
          }

          .intake-item h4 {
            color: #fff;
            font-size: 18px;
            font-weight: 600;
            margin: 0;
          }

          .intake-item p {
            color: #fff;
            font-size: 12px;
            font-weight: 400;
            margin: 1px 0 0;
            line-height: 1.25;
          }

          .work-card {
            width: 260px;
            background: #1E2A3D;
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 9px;
            padding: 16px 16px 18px;
            box-sizing: border-box;
            margin-bottom: 13px;
          }

          .work-card h2 {
            color: #ff7a1a;
            font-size: 25px;
            font-weight: 900;
            margin: 0 0 5px;
          }

          .work-card p {
            color: #d4d9e2;
            font-size: 12px;
            line-height: 1.45;
            margin: 0;
          }

          .work-note {
            color: #8994a8;
            font-size: 10px;
            line-height: 1.45;
            margin: 0;
            max-width: 230px;
          }

          .sector-list {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          .sector-pill {
            width: fit-content;
            color: #fff;
            font-size: 14px;
            background: #1E2A3D;
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 5px;
            padding: 7px 12px;
            white-space: nowrap;
          }

          @media (max-width: 991px) {
            .work-opportunities-section {
              padding: 45px 35px;
            }

            .work-opportunities-container {
              grid-template-columns: 1fr 1fr;
              gap: 45px;
            }

            .work-opportunities-container > div:nth-child(2) {
              order: 3;
            }

            .work-card {
              width: 100%;
              max-width: 320px;
            }
          }

          @media (max-width: 575px) {
            .work-opportunities-section {
              padding: 40px 18px;
            }

            .work-opportunities-container {
              grid-template-columns: 1fr;
              gap: 34px;
            }

            .work-opportunities-container > div:nth-child(2) {
              order: initial;
            }

            .work-icon-box {
              width: 38px;
              height: 38px;
              border-radius: 10px;
              margin-bottom: 14px;
            }

            .work-title {
              font-size: 22px;
              margin-bottom: 16px;
            }

            .intake-item {
              margin-bottom: 15px;
            }

            .intake-item h4 {
              font-size: 16px;
            }

            .intake-item p {
              font-size: 12px;
              line-height: 1.4;
            }

            .work-card {
              width: 100%;
              max-width: 100%;
              padding: 15px;
            }

            .work-card h2 {
              font-size: 24px;
            }

            .work-card p {
              font-size: 12px;
            }

            .work-note {
              max-width: 100%;
              font-size: 11px;
            }

            .sector-list {
              gap: 9px;
            }

            .sector-pill {
              width: 100%;
              font-size: 13px;
              padding: 8px 12px;
              white-space: normal;
            }
          }
        `}
      </style>

      <section className="work-opportunities-section">
        <div className="work-opportunities-container">
          {/* University Intakes */}
          <div>
            <div className="work-icon-box">
              <FaCalendarAlt />
            </div>

            <h3 className="work-title">University Intakes</h3>

            {intakeList.map((item, index) => (
              <div key={index} className="intake-item">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Work Opportunities */}
          <div>
            <div className="work-icon-box">
              <FaStopwatch />
            </div>

            <h3 className="work-title">Work Opportunities</h3>

            <div className="work-card">
              <h2>48h</h2>

              <p>
                International students can work up to 48 hours per fortnight
                during sessions.
              </p>
            </div>

            <p className="work-note">
              Full-time work is allowed during scheduled semester breaks and
              holidays.
            </p>
          </div>

          {/* Career Sectors */}
          <div>
            <div className="work-icon-box">
              <FaRocket />
            </div>

            <h3 className="work-title">Career Sectors</h3>

            <div className="sector-list">
              {sectorList.map((sector, index) => (
                <span key={index} className="sector-pill">
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkOpportunities;