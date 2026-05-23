import React from "react";

const TopUniversities = ({
  title,
  highlight,
  subtitle,
  universities = [],
  bgColor = "#f9fafc",
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
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#111" }}>
            {title} <span style={{ color: "#ff7a1a" }}>{highlight}</span>
          </h2>

          <p
            style={{
              maxWidth: "700px",
              margin: "12px auto 0",
              fontSize: "14px",
              lineHeight: "1.7",
              color: "#333",
            }}
          >
            {subtitle}
          </p>
        </div>

        {/* Universities grid */}
        <div className="row g-4 justify-content-center">
          {universities.map((uni, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-3 text-center"
            >
              <div
                style={{
                  background: "#fff",
                  borderRadius: "20px 20px 20px 0px",
                  overflow: "hidden",
                  boxShadow: "2px 2px 1px rgba(0,0,0,0.08)",
                }}
              >
                <img
                  src={uni.image}
                  alt={uni.name}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <h5
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#111",
                    padding: "12px 8px",
                    margin: 0,
                  }}
                >
                  {uni.name}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopUniversities;