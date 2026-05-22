import React from "react";

import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import icon3 from "../../assets/images/icon3.png";
import icon4 from "../../assets/images/icon4.png";

const items = [
  {
    icon: icon1,
    title: "Skill-Based Training",
  },
  {
    icon: icon2,
    title: "Placement Assistance",
  },
  {
    icon: icon3,
    title: "Study Abroad Consultancy",
  },
  {
    icon: icon4,
    title: "Career Counselling",
  },
];

const WhatWeDo = () => {
  return (
    <section
      style={{
        backgroundColor: "#f3f4f6",
        padding: "45px 0 60px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="container">
        <h2
          className="text-center"
          style={{
            fontSize: "32px",
            fontWeight: "600",
            marginBottom: "40px",
            color: "#111",
          }}
        >
          What We <span style={{ color: "#ff7a1a" }}>Do</span>
        </h2>

        <div className="row g-4">
          {items.map((item, index) => (
            <div
              className="col-12 col-sm-6 col-lg-3"
              key={index}
            >
              <div
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid #d9d9d9",
                  borderRadius: "8px",
                  borderBottom: "3px solid #ff7a1a",
                  minHeight: "160px",
                  padding: "26px 20px",
                  textAlign: "center",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  style={{
                    width: "42px",
                    height: "42px",
                    objectFit: "contain",
                    marginBottom: "28px",
                  }}
                />

                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#111",
                    margin: 0,
                  }}
                >
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;