import React from "react";

const ProgramInfoSection = ({
  image,
  title,
  highlight,
  description = [],
  reverse = false,
  bgColor = "#ffffff",
}) => {
  return (
    <section
      style={{
        padding: "70px 0",
        background: bgColor,
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="container">
        <div
          className={`row align-items-center ${
            reverse ? "flex-row-reverse" : ""
          }`}
        >
          {/* Image */}
          <div className="col-12 col-lg-5 text-center mb-4 mb-lg-0">
            <div
              style={{
                maxWidth: "420px",
                margin: "0 auto",
                overflow: "hidden",
                borderRadius: "6px",
              }}
            >
              <img
                src={image}
                alt={title}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="col-12 col-lg-7">

            <h2
              style={{
                fontSize: "clamp(30px,3vw,42px)",
                fontWeight: "700",
                color: "#222",
                marginBottom: "26px",
              }}
            >
              {title}{" "}
              <span style={{ color: "#ff7a1a" }}>
                {highlight}
              </span>
            </h2>

            {description.map((para, index) => (
              <p
                key={index}
                style={{
                  color: "#444",
                  fontSize: "15px",
                  lineHeight: "1.9",
                  marginBottom: "24px",
                  maxWidth: "620px",
                }}
              >
                {para}
              </p>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramInfoSection;