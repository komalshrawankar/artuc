import { bottom } from "@popperjs/core";
import React from "react";

const BenefitsSection = ({
  title,
  highlight,
  subtitle,
  benefits = [],
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
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "42px" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#111" }}>
            {title} <span style={{ color: "#ff7a1a" }}>{highlight}</span>
          </h2>

          <p
            style={{
              maxWidth: "700px",
              margin: "12px auto 0",
              fontSize: "14px",
              lineHeight: "1.7",
              color: "#333",
            }}
          >
            {subtitle}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="row g-4">
          {benefits.map((item, index) => (
            <div className="col-12 col-md-6" key={index}>
              <div
                style={{
                  
                  alignItems: "flex-start",
                  gap: "12px",
                  background: "#ffffff",
                  padding: "20px",
                  borderRadius: "6px",
                  minHeight: "120px",
                }}
              >
                {item.icon && (
                  <img
                    src={item.icon}
                    alt={item.title}
                    style={{
                       marginBottom:20,
                      flexShrink: 0,
                    }}
                  />
                )}
                <div>
                  <h4
                    style={{
                      fontSize: "16px",
                      fontWeight: "700",
                      color: "#111",
                      marginBottom: "8px",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#333",
                      lineHeight: "1.6",
                      margin: 0,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;