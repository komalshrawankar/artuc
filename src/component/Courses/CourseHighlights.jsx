import React from "react";

const CourseHighlights = ({
  title,
  highlight,
  subtitle,
  highlights = [],
  bgColor = "#eaf5ff",
}) => {
  return (
    <section
      style={{
        width: "100%",
        background: bgColor,
        padding: "70px 20px",
        fontFamily: "'Poppins', sans-serif",
       
      }}
    >
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "42px" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#111" }}>
            {title} <span style={{ color: "#ff7a1a" }}>{highlight}</span>
          </h2>

          <p
            style={{
              maxWidth: "650px",
              margin: "14px auto 0",
              fontSize: "14px",
              lineHeight: "1.7",
              color: "#333",
            }}
          >
            {subtitle}
          </p>
        </div>

        <div className="row g-4">
          {highlights.map((item, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "6px",
                  padding: "24px 20px",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <span
                  style={{
                    width: "18px",
                    height: "18px",
                    minWidth: "18px",
                    borderRadius: "50%",
                    border: "2px solid #ff7a1a",
                    color: "#ff7a1a",
                    fontSize: "10px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  ✓
                </span>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#111",
                    margin: 0,
                    lineHeight: "1.6",
                  }}
                >
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseHighlights;