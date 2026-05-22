import React from "react";

const PageHero = ({
  title,
  highlight,
  subtitle,
  backgroundImage,
  height = "330px",
}) => {
  return (
    <section
      style={{
        width: "100%",
        height: height,
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
         
        }}
      />

      {/* Content */}
      <div
        className="container h-100"
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          className="d-flex flex-column justify-content-center align-items-center text-center h-100"
        >
          <h1
            style={{
              color: "#ffffff",
              fontWeight: "600",
              fontSize: "clamp(40px, 5vw, 64px)",
              marginBottom: "14px",
            }}
          >
            {title}{" "}
            <span
              style={{
                color: "#ff7a1a",
              }}
            >
              {highlight}
            </span>
          </h1>

          <p
            style={{
              color: "#ffffff",
              fontSize: "clamp(16px, 2vw, 22px)",
              fontWeight: "400",
              marginBottom: 0,
              maxWidth: "900px",
            }}
          >
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageHero;