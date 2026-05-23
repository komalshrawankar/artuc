import React from "react";

const ProcessBenefitsSection = ({
  processTitle,
  processHighlight,
  processSubtitle,
  processSteps = [],
  benefitsTitle,
  benefitsHighlight,
  benefits = [],
}) => {
  return (
    <section
      style={{
        width: "100%",
        background: "#f3f4f6",
        padding: "55px 20px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 700, color: "#111" }}>
            {processTitle}{" "}
            <span style={{ color: "#ff7a1a" }}>{processHighlight}</span>
          </h2>

          <p style={{ fontSize: "14px", color: "#333", marginTop: "12px" }}>
            {processSubtitle}
          </p>
        </div>

        <div className="row g-4 justify-content-center mb-5">
          {processSteps.map((step, index) => (
            <div className="col-12 col-sm-6 col-lg-3" key={index}>
              <div
                style={{
                  background: "#fff",
                  borderRadius: "4px",
                  padding: "28px 24px",
                  minHeight: "230px",
                  height: "100%",
                }}
              >
                <h3
                  style={{
                    fontSize: "42px",
                    fontWeight: 700,
                    color: "#ffe6d6",
                    marginBottom: "18px",
                  }}
                >
                  {step.number}
                </h3>

                <h4
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#111",
                    marginBottom: "14px",
                  }}
                >
                  {step.title}
                </h4>

                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: "1.6",
                    color: "#333",
                    margin: 0,
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 700, color: "#111" }}>
            {benefitsTitle}{" "}
            <span style={{ color: "#ff7a1a" }}>{benefitsHighlight}</span>
          </h2>
        </div>

        <div className="row g-4 justify-content-center">
          {benefits.map((benefit, index) => (
            <div className="col-12 col-sm-6 col-lg-3 text-center" key={index}>
              <div
                style={{
                  width: "54px",
                  height: "54px",
                  borderRadius: "50%",
                  background: "#fff3ec",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 18px",
                }}
              >
                <img
                  src={benefit.icon}
                  alt={benefit.title}
                 
                />
              </div>

              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#111",
                  lineHeight: "1.45",
                  margin: 0,
                }}
              >
                {benefit.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessBenefitsSection;