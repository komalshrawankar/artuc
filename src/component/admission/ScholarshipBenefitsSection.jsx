import React from "react";

const ScholarshipBenefitsSection = ({
  leftTitle,
  leftHighlight,
  benefits = [],
  rightTitle,
  rightHighlight,
  scholarshipTypes = [],
}) => {
  return (
    <section className="py-5" style={{ background: "#f5f5f5" }}>
      <div className="container">
        <div className="row align-items-start justify-content-between g-5">

          <div className="col-lg-6">
            <h2
              className="fw-bold mb-4"
              style={{ fontSize: "28px", color: "#222" }}
            >
              {leftTitle}{" "}
              <span style={{ color: "#ff7a00" }}>{leftHighlight}</span>
            </h2>

            {benefits.map((item, index) => (
              <div
                key={index}
                className="d-flex align-items-start gap-3"
                style={{
                  padding: "15px 0",
                  borderBottom: "1px solid #d6d6d6",
                }}
              >
                <span
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: "18px",
                    height: "18px",
                    border: "1px solid #ff7a00",
                    borderRadius: "50%",
                    color: "#ff7a00",
                    fontSize: "10px",
                    flexShrink: 0,
                    marginTop: "3px",
                  }}
                >
                  ✓
                </span>

                <p className="mb-0" style={{ fontSize: "15px", color: "#222" }}>
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="col-lg-5">
            <div
              style={{
                background: "#eaf4ff",
                padding: "35px",
                borderRadius: "6px",
              }}
            >
              <h3
                className="fw-bold mb-3"
                style={{ fontSize: "24px", color: "#222" }}
              >
                {rightTitle}{" "}
                <span style={{ color: "#ff7a00" }}>{rightHighlight}</span>
              </h3>

              <ul className="mb-0 ps-3">
                {scholarshipTypes.map((item, index) => (
                  <li
                    key={index}
                    className="fw-semibold mb-2"
                    style={{ fontSize: "14px", color: "#111" }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ScholarshipBenefitsSection;