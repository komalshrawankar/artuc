import React from "react";

import testimonialBg from "../../assets/homepage/testimonial-bg.jpg";
import user1 from "../../assets/homepage/user1.png";
import user2 from "../../assets/homepage/user2.png";
import user3 from "../../assets/homepage/user3.png";
import user4 from "../../assets/homepage/user4.png";

const testimonials = [
  {
    img: user1,
    name: "Rahul Sharma",
    course: "Digital Marketing",
    text: "Artuc EduTech helped me get my first IT job. The training and placement support were excellent.",
  },
  {
    img: user2,
    name: "Mohit Singh",
    course: "Study Abroad - UK",
    text: "Their study abroad guidance made my UK admission process smooth and easy.",
  },
  {
    img: user3,
    name: "Priya Verma",
    course: "Data Analytics",
    text: "The trainers explain concepts in a very simple and practical way. Working on live projects gave me real industry exposure.",
  },
  {
    img: user4,
    name: "Sneha Kulkarni",
    course: "Study Abroad - USA",
    text: "The entire admission and visa process was handled smoothly by the team.",
  },
];

const Testimonials = () => {
  return (
    <section
      style={{
        position: "relative",
        backgroundImage: `url(${testimonialBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "35px 0 55px",
        fontFamily: "'Poppins', sans-serif",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 54, 110, 0.72)",
        }}
      ></div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="text-center mb-4">
          <span
            style={{
              display: "inline-block",
              fontSize: "14px",
              color: "#fff",
              borderBottom: "1px solid #ff7a1a",
              borderRadius: "0 0 12px 12px",
              padding: "0 14px 5px",
              marginBottom: "12px",
            }}
          >
            Testimonials
          </span>

          <h2
            style={{
              fontSize: "32px",
              fontWeight: "600",
              color: "#fff",
              marginBottom: "12px",
            }}
          >
            What Our Students <span style={{ color: "#ff7a1a" }}>Say's</span>
          </h2>

          <p
            style={{
              maxWidth: "620px",
              margin: "0 auto",
              color: "#fff",
              fontSize: "16px",
              lineHeight: "1.5",
            }}
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {testimonials.map((item, index) => (
            <div className="col-12 col-sm-6 col-lg-3" key={index}>
              <div
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "18px 18px 18px 0px",
                  padding: "22px 20px 18px",
                  height: "100%",
                  borderBottom: "4px solid #ff7a1a",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
                }}
              >
                <div
                  style={{
                    color: "#ffb000",
                    fontSize: "16px",
                    letterSpacing: "1px",
                    marginBottom: "14px",
                  }}
                >
                  ★★★★★
                </div>

                <p
                  style={{
                    fontSize: "15px",
                    color: "#222",
                    lineHeight: "1.5",
                    marginBottom: "18px",
                  }}
                >
                  {item.text}
                </p>

                <div className="d-flex align-items-center gap-3">
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />

                  <div>
                    <h4
                      style={{
                        fontSize: "15px",
                        fontWeight: "600",
                        margin: 0,
                        color: "#111",
                      }}
                    >
                      {item.name}
                    </h4>

                    <p
                      style={{
                        fontSize: "11px",
                        color: "#333",
                        margin: 0,
                      }}
                    >
                      {item.course}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-center gap-1 mt-4">
          <span style={dotStyle(true)}></span>
          <span style={dotStyle(false)}></span>
          <span style={dotStyle(false)}></span>
          <span style={dotStyle(false)}></span>
        </div>
      </div>
    </section>
  );
};

const dotStyle = (active) => ({
  width: "6px",
  height: "6px",
  borderRadius: "50%",
  display: "block",
  backgroundColor: active ? "#ff7a1a" : "#ffb27a",
});

export default Testimonials;