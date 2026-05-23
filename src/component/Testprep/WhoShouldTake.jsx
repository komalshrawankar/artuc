import React from "react";

const WhoShouldTake = ({
  image,
  title,
  highlight,
  description,
  points = [],
  reverse = false,
}) => {
  return (
    <section
      style={{
        width: "100%",
        background: "#f3f4f6",
        padding: "70px 20px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <div
          className={`row align-items-center ${
            reverse ? "flex-row-reverse" : ""
          }`}
        >
          <div className="col-12 col-lg-6 text-center">
            <img
              src={image}
              alt={title}
              style={{
                width: "100%",
                maxWidth: "450px",
                height: "450px",
                objectFit: "cover",
                borderRadius: "6px",
              }}
            />
          </div>

          <div className="col-12 col-lg-6 mt-4 mt-lg-0">
            <h2
              style={{
                fontSize: "clamp(26px, 3vw, 36px)",
                fontWeight: "700",
                lineHeight: "1.35",
                color: "#222",
                marginBottom: "18px",
              }}
            >
              {title}
              <br />
              <span style={{ color: "#ff7a1a" }}>{highlight}</span>
            </h2>

            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.7",
                color: "#333",
                maxWidth: "520px",
                marginBottom: "28px",
              }}
            >
              {description}
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {points.map((point, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    fontSize: "14px",
                    color: "#222",
                    lineHeight: "1.55",
                    marginBottom: "18px",
                    maxWidth: "520px",
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
                      marginTop: "2px",
                    }}
                  >
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldTake;