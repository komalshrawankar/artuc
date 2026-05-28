import React from "react";

const CTASection = ({
  bgImage,
  title,
  highlight,
  afterTitle = "",
  description,
  buttonText,
  buttonLink = "/contact",
}) => {
  return (
    <section
      style={{
        backgroundColor: "#f3f4f6",
        padding: "30px 0 60px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="container">
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "#1657b7",
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "40px 40px 40px 0px",
            minHeight: "150px",
            padding: "58px 90px",
          }}
        >
          {/* Blue Overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(22,87,183,.86), rgba(22,87,183,.72))",
            }}
          />

          <div
            className="row align-items-center"
            style={{
              position: "relative",
              zIndex: 2,
            }}
          >
            {/* Left */}
            <div className="col-12 col-lg-8 text-center text-lg-start">
              <h2
                style={{
                  color: "#ffffff",
                  fontSize: "clamp(24px, 2.5vw, 34px)",
                  fontWeight: "600",
                  marginBottom: "14px",
                }}
              >
                {title}{" "}
                <span style={{ color: "#ff7a1a" }}>
                  {highlight}
                </span>{" "}
                {afterTitle}
              </h2>

              <p
                style={{
                  color: "#ffffff",
                  fontSize: "15px",
                  lineHeight: "1.7",
                  marginBottom: 0,
                  maxWidth: "620px",
                }}
              >
                {description}
              </p>
            </div>

            {/* Right */}
            <div className="col-12 col-lg-4 text-center text-lg-end mt-4 mt-lg-0">
              <a
                href={buttonLink}
                style={{
                  backgroundColor: "#ff7a1a",
                  color: "#ffffff",
                  textDecoration: "none",
                  borderRadius: "30px",
                  padding: "12px 28px",
                  fontSize: "14px",
                  fontWeight: "500",
                  display: "inline-block",
                }}
              >
                {buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  
  );
};

export default CTASection;