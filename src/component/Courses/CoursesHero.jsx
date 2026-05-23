import React from "react";

const CoursesHero = ({
  title,
  description,
  buttonText = "Book Free Counselling",
  buttonLink = "/contact",
  image,
  reverse = false,
  bgColor = "#eaf5ff",
  radius = "0 20px 20px 0",
}) => {
  return (
    <section
      style={{
        padding: "0px 0",
        fontFamily: "'Poppins', sans-serif",
        background: "#ffffff",
      }}
    >
      <div className="container">

        <div
          style={{
            background: bgColor,
            borderRadius: radius,
            padding: "55px 45px",
          }}
        >
          <div
            className={`row align-items-center ${
              reverse ? "flex-row-reverse" : ""
            }`}
          >

            {/* Left */}
            <div className="col-12 col-lg-6">

              <h1
                style={{
                  color: "#222",
                  fontWeight: "700",
                  lineHeight: "1.25",
                  fontSize: "clamp(34px,4vw,58px)",
                  marginBottom: "22px",
                  maxWidth: "560px",
                }}
              >
                {title}
              </h1>

              <p
                style={{
                  color: "#444",
                  fontSize: "15px",
                  lineHeight: "1.9",
                  maxWidth: "520px",
                  marginBottom: "28px",
                }}
              >
                {description}
              </p>

              <a
                href={buttonLink}
                style={{
                  background: "#ff7a1a",
                  color: "#fff",
                  textDecoration: "none",
                  padding: "14px 28px",
                  borderRadius: "5px",
                  display: "inline-block",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                {buttonText}
              </a>

            </div>

            {/* Right */}
            <div className="col-12 col-lg-6 text-center mt-5 mt-lg-0">

              <div
                style={{
                  display: "inline-block",
                
                  borderRadius: "18px",
                  overflow: "hidden",
                  maxWidth: "520px",
                  width: "100%",
                }}
              >
                <img
                  src={image}
                  alt={title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesHero;