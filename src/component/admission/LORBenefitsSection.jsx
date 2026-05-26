import React from "react";

const LORBenefitsSection = ({
  leftTitle,
  leftHighlight,
  benefits = [],
  rightTitle,
  rightHighlight,
  recommendationTypes = [],
}) => {
  return (
    <section
      className="py-5"
      style={{
        background: "#f5f5f5",
      }}
    >
      <div className="container">

        <div className="row g-5 align-items-start">

          {/* LEFT SIDE */}
          <div className="col-lg-6">

            <h2
              style={{
                fontSize: "40px",
                fontWeight: "700",
                marginBottom: "40px",
              }}
            >
              {leftTitle}{" "}
              <span style={{ color: "#ff7a00" }}>
                {leftHighlight}
              </span>
            </h2>

            {benefits.map((item, index) => (
              <div
                key={index}
                className="d-flex align-items-start"
                style={{
                  padding: "22px 0",
                  borderBottom: "1px solid #d9d9d9",
                  gap: "15px",
                }}
              >
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    border: "1px solid #ff7a00",
                    borderRadius: "50%",
                    color: "#ff7a00",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "11px",
                    flexShrink: 0,
                    marginTop: "4px",
                  }}
                >
                  ✓
                </div>

                <p
                  style={{
                    margin: 0,
                    fontSize: "18px",
                    lineHeight: "1.7",
                    color: "#222",
                  }}
                >
                  {item}
                </p>
              </div>
            ))}

          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-6">

            <div
              style={{
                background: "#edf3fa",
                padding: "40px",
                borderRadius: "8px",
              }}
            >

              <h2
                style={{
                  fontSize: "40px",
                  fontWeight: "700",
                  marginBottom: "35px",
                }}
              >
                {rightTitle}{" "}
                <span style={{ color: "#ff7a00" }}>
                  {rightHighlight}
                </span>
              </h2>

              {recommendationTypes.map((item, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: "30px",
                  }}
                >
                  <h5
                    style={{
                      fontWeight: "700",
                      marginBottom: "12px",
                    }}
                  >
                    {item.title}
                  </h5>

                  <p
                    style={{
                      color: "#444",
                      lineHeight: "1.8",
                      marginBottom: 0,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default LORBenefitsSection;