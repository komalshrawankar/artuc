import React from "react";

const InfoSection = ({
  title,
  highlight,
  description,
  points = [],
  image,
}) => {
  const mobile = window.innerWidth <= 768;

  return (
    <section
      style={{
        background: "#f4f6f8",
        padding: mobile ? "45px 16px" : "70px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          display: "flex",
          flexDirection: mobile ? "column" : "row",
          alignItems: "center",
          gap: mobile ? "35px" : "70px",
        }}
      >
        {/* Left */}
        <div style={{ flex: 1 }}>
          <h2
            style={{
              fontSize: mobile ? "26px" : "34px",
              fontWeight: "800",
              lineHeight: "1.3",
              marginBottom: "22px",
            }}
          >
            {title}
            <br />

            <span style={{ color: "#ff7a1a" }}>
              {highlight}
            </span>
          </h2>

          <p
            style={{
              color: "#444",
              lineHeight: "1.8",
              marginBottom: "25px",
              fontSize: mobile ? "14px" : "15px",
            }}
          >
            {description}
          </p>

          {points.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                gap: "12px",
                marginBottom: "14px",
              }}
            >
              <div
                style={{
                  width: "18px",
                  height: "18px",
                  border: "2px solid #ff7a1a",
                  borderRadius: "50%",
                  color: "#ff7a1a",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "10px",
                  flexShrink: 0,
                }}
              >
                ✓
              </div>

              <span
                style={{
                  fontSize: mobile ? "13px" : "14px",
                  lineHeight: "1.6",
                }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Right */}
        <div style={{ flex: 1 }}>
          <img
            src={image}
            alt={title}
            style={{
              width: "100%",
              maxWidth: "550px",
              height: mobile ? "250px" : "420px",
              objectFit: "cover",
              borderRadius: "18px",
              boxShadow: "0 18px 35px rgba(0,0,0,.15)",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;