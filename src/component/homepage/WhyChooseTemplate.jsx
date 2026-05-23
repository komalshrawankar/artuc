import React from "react";
import whyBg from "../../assets/homepage/why-bg.jpg";
import whyImage from "../../assets/homepage/expert.png";

const WhyChooseTemplate = ({
  bgImage,
  mainImage,
  tag = "Why Choose us",
  beforeText,
  orangeText,
  orangeText2,
  afterText,
  description,
  points = [],
  imageAlt = "Why Choose Us",
}) => {
  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#f3f4f6",
        fontFamily: "'Poppins', sans-serif",
        padding: "0 0 50px",
      }}
    >
      <div
        className="container-fluid"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "360px",
          padding: "55px 40px",
        }}
      >
        <div className="row align-items-center">
          <div className="col-12 col-lg-5 ms-lg-5">
            <span
              style={{
                display: "inline-block",
                fontSize: "12px",
                color: "#111",
                borderBottom: "1px solid #ff7a1a",
                borderRadius: "0 0 12px 12px",
                padding: "0 14px 5px",
                marginBottom: "16px",
              }}
            >
              {tag}
            </span>

           <h2
  style={{
    fontSize: "28px",
    fontWeight: "600",
    lineHeight: "1.35",
    color: "#222",
    marginBottom: "16px",
  }}
>
  {beforeText}{" "}
  <span style={{ color: "#ff7a1a" }}>{orangeText}</span>
  <br />
  <span style={{ color: "#ff7a1a" }}>{orangeText2}</span>{" "}
  {afterText}
</h2>

            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.55",
                color: "#333",
                maxWidth: "430px",
                marginBottom: "18px",
              }}
            >
              {description}
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {points.map((point, index) => (
                <li
                  key={index}
                  style={{
                    fontSize: "14px",
                    color: "#333",
                    marginBottom: "8px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      width: "13px",
                      height: "13px",
                      borderRadius: "50%",
                      border: "1px solid #ff7a1a",
                      color: "#ff7a1a",
                      fontSize: "8px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-12 col-lg-5 text-center mt-4 mt-lg-0">
            <img
              src={mainImage}
              alt={imageAlt}
              style={{
                width: "100%",
                maxWidth: "470px",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseTemplate;