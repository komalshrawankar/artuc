import React from "react";

const ExamStructure = ({ title, highlight, subtitle, items = [] }) => {
  return (
    <section
      style={{
        width: "100%",
        background: "#eaf3ff",
        padding: "60px 20px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "42px" }}>
          <h2
            style={{
              fontSize: "clamp(26px, 3vw, 34px)",
              fontWeight: "700",
              color: "#111",
              marginBottom: "14px",
            }}
          >
            {title} <span style={{ color: "#ff7a1a" }}>{highlight}</span>
          </h2>

          <p
            style={{
              fontSize: "15px",
              color: "#5d6b82",
              lineHeight: "1.6",
              maxWidth: "650px",
              margin: "0 auto",
            }}
          >
            {subtitle}
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {items.map((item, index) => (
            <div className="col-12 col-sm-6 col-lg-3" key={index}>
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "16px",
                  padding: "28px 26px",
                  minHeight: "275px",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "4px",
                    background: "#fff3ec",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "28px",
                  }}
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    
                  />
                </div>

                <h4
                  style={{
                    fontSize: "17px",
                    fontWeight: "700",
                    color: "#111",
                    lineHeight: "1.45",
                    marginBottom: "14px",
                  }}
                >
                  {item.title}
                </h4>

                <p
                  style={{
                    fontSize: "14px",
                    color: "#333",
                    lineHeight: "1.65",
                    margin: 0,
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamStructure;