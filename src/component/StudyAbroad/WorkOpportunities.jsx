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

const WorkOpportunities = ({
  intakeList = intakes,
  sectorList = sectors,
}) => {
  return (
    <section
      style={{
        width: "100%",
        background: "#0E1729",
        padding: "48px 68px 44px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          display: "grid",
          gridTemplateColumns: "1fr 1.15fr 1fr",
          gap: "70px",
          alignItems: "flex-start",
        }}
      >
        {/* University Intakes */}
        <div>
          <div
            style={{
              width: "41px",
              height: "41px",
              background: "#ff7a1a",
              borderRadius: "11px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "16px",
            }}
          >
            <FaCalendarAlt style={{ color: "#fff", fontSize: "18px" }} />
          </div>

          <h3
            style={{
              color: "#fff",
              fontSize: "25px",
              fontWeight: "800",
              margin: "0 0 18px",
            }}
          >
            University Intakes
          </h3>

          {intakeList.map((item, index) => (
            <div key={index} style={{ marginBottom: "18px" }}>
              <h4
                style={{
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: "600",
                  margin: 0,
                }}
              >
                {item.title}
              </h4>
              <p
                style={{
                  color: "#fff",
                  fontSize: "12px",
                  fontWeight: "400",
                  margin: "1px 0 0",
                  lineHeight: "1.25",
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Work Opportunities */}
        <div>
          <div
            style={{
              width: "41px",
              height: "41px",
              background: "#ff7a1a",
              borderRadius: "11px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "16px",
            }}
          >
            <FaStopwatch style={{ color: "#fff", fontSize: "19px" }} />
          </div>

          <h3
            style={{
              color: "#fff",
              fontSize: "25px",
              fontWeight: "800",
              margin: "0 0 18px",
            }}
          >
            Work Opportunities
          </h3>

          <div
            style={{
              width: "260px",
              background: "#1E2A3D",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "9px",
              padding: "16px 16px 18px",
              boxSizing: "border-box",
              marginBottom: "13px",
            }}
          >
            <h2
              style={{
                color: "#ff7a1a",
                fontSize: "25px",
                fontWeight: "900",
                margin: "0 0 5px",
              }}
            >
              48h
            </h2>

            <p
              style={{
                color: "#d4d9e2",
                fontSize: "12px",
                lineHeight: "1.45",
                margin: 0,
              }}
            >
              International students can work up to 48 hours per fortnight
              during sessions.
            </p>
          </div>

          <p
            style={{
              color: "#8994a8",
              fontSize: "10px",
              lineHeight: "1.45",
              margin: 0,
              maxWidth: "230px",
            }}
          >
            Full-time work is allowed during scheduled semester breaks and
            holidays.
          </p>
        </div>

        {/* Career Sectors */}
        <div>
          <div
            style={{
              width: "41px",
              height: "41px",
              background: "#ff7a1a",
              borderRadius: "11px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "16px",
            }}
          >
            <FaRocket style={{ color: "#fff", fontSize: "18px" }} />
          </div>

          <h3
            style={{
              color: "#fff",
              fontSize: "25px",
              fontWeight: "800",
              margin: "0 0 18px",
            }}
          >
            Career Sectors
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {sectorList.map((sector, index) => (
              <span
                key={index}
                style={{
                  width: "fit-content",
                  color: "#fff",
                  fontSize: "14px",
                  background: "#1E2A3D",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "5px",
                  padding: "7px 12px",
                  whiteSpace: "nowrap",
                }}
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkOpportunities;