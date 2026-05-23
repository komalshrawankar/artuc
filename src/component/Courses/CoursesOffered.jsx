import React from "react";

const CoursesOffered = ({
  title,
  highlight,
  subtitle,
  courses = [],
  bgColor = "#f3f4f6",
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
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "42px" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#111" }}>
            {title} <span style={{ color: "#ff7a1a" }}>{highlight}</span>
          </h2>

          <p
            style={{
              maxWidth: "650px",
              margin: "14px auto 0",
              fontSize: "14px",
              lineHeight: "1.7",
              color: "#333",
            }}
          >
            {subtitle}
          </p>
        </div>

        <div className="row g-4">
          {courses.map((item, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  padding: "28px",
                  height: "100%",
                  minHeight: "210px",
                }}
              >
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "5px",
                   
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "24px",
                  }}
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                  
                  />
                </div>

                <h4
                  style={{
                    fontSize: "15px",
                    fontWeight: "700",
                    color: "#111",
                    lineHeight: "1.5",
                    marginBottom: "14px",
                  }}
                >
                  {item.title}
                </h4>

                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: "1.7",
                    color: "#333",
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

export default CoursesOffered;