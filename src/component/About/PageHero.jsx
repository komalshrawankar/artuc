import React from "react";

const PageHero = ({
  title,
  highlight,
  subtitle,
  backgroundImage,
  height = "330px",
  buttonText,
  buttonLink,
}) => {
  return (
    <section
      style={{
        width: "100%",
        height,
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

      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0, 0, 0, 0.55)",
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
        <div className="d-flex flex-column justify-content-center align-items-center text-center h-100">
          <h1
            style={{
              color: "#ffffff",
              fontWeight: "600",
              fontSize: "clamp(34px, 4vw, 54px)",
              marginBottom: "12px",
            }}
          >
            {title}{" "}
            <span style={{ color: "#ff7a1a" }}>{highlight}</span>
          </h1>

          <p
            style={{
              color: "#ffffff",
              fontSize: "clamp(14px, 1.6vw, 18px)",
              fontWeight: "400",
              marginBottom: buttonText ? "18px" : 0,
              maxWidth: "800px",
            }}
          >
            {subtitle}
          </p>

          {buttonText && (
            <a
              href={buttonLink || "#"}
              style={{
                background: "#ff7a1a",
                color: "#ffffff",
                padding: "10px 24px",
                borderRadius: "6px",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              {buttonText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;