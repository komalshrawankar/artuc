import React from "react";

const CareerOpportunities = ({
  title,
  highlight,
  description,
  opportunities = [],
  enrollTitle,
  enrollHighlight,
  enrollSubtitle,
  enrollList = [],
  bgColor = "#f9fafc",
  enrollBgColor = "#eaf5ff",
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
      <div className="container" style={{ maxWidth: "1180px" }}>
        <div className="row align-items-start g-4">

          {/* Left Column */}
          <div className="col-12 col-lg-6">
            <h2 style={{ fontSize: "28px", fontWeight: 700, color: "#111", marginBottom: "16px" }}>
              {title} <span style={{ color: "#ff7a1a" }}>{highlight}</span>
            </h2>

            <p style={{ fontSize: "16px", color: "#333", marginBottom: "28px", lineHeight: "1.7" }}>
              {description}
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {opportunities.map((item, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    fontSize: "16px",
                    color: "#111",
                    marginBottom: "16px",
                  }}
                >
                  {item.icon && (
                    <img src={item.icon} alt={item.title} style={{ width: "20px", height: "20px" }} />
                  )}
                  {item.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="col-12 col-lg-6">
            <div
              style={{
                background: enrollBgColor,
                borderRadius: "10px",
                padding: "30px 25px",
              }}
            >
              <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#111", marginBottom: "12px" }}>
                {enrollTitle} <span style={{ color: "#ff7a1a" }}>{enrollHighlight}</span>
              </h3>
              <p style={{ fontSize: "14px", color: "#333", marginBottom: "20px", lineHeight: "1.6" }}>
                {enrollSubtitle}
              </p>

              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {enrollList.map((item, index) => (
                  <li
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "14px",
                      color: "#111",
                      marginBottom: "14px",
                    }}
                  >
                    {item.icon && (
                      <img src={item.icon} alt={item.title} style={{ }} />
                    )}
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CareerOpportunities;