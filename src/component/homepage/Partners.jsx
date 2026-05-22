import React from "react";
import partners from "../../assets/homepage/partners.png";

const Partners = () => {
  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#f3f4f6",
        padding: "70px 0",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="container">
        <div className="row align-items-center gy-5">
          {/* Left Image */}
          <div className="col-12 col-lg-6 text-center">
            <img
              src={partners}
              alt="Partners"
              style={{
                width: "100%",
                maxWidth: "500px",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>

          {/* Right Content */}
          <div className="col-12 col-lg-6">
            <div style={{ maxWidth: "520px" }}>
              <span
                style={{
                  display: "inline-block",
                  fontSize: "12px",
                  fontWeight: "400",
                  color: "#111",
                  borderBottom: "1px solid #ff7a1a",
                  borderRadius: "0 0 12px 12px",
                  padding: "0 18px 6px",
                  marginBottom: "18px",
                }}
              >
                About Us
              </span>

              <h2
                style={{
                  fontSize: "clamp(28px, 3vw, 42px)",
                  fontWeight: "500",
                  lineHeight: "1.35",
                  color: "#222",
                  marginBottom: "22px",
                }}
              >
                Your Trusted Partner in <br />
                Career{" "}
                <span style={{ color: "#ff7a1a" }}>Growth</span>
              </h2>

              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "1.65",
                  color: "#333",
                  marginBottom: "22px",
                }}
              >
                Artuc is a leading training, placement, and overseas education
                consultancy dedicated to shaping successful careers. We provide
                industry-relevant courses, professional skill development
                programs, and complete placement support to help students and job
                seekers achieve their goals.
              </p>

              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "1.65",
                  color: "#333",
                  marginBottom: "28px",
                }}
              >
                Our expert team works closely with students to understand their
                aspirations and guide them toward the right career path, whether
                in India or abroad.
              </p>

              <a
                href="/about"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  backgroundColor: "#ff7a1a",
                  color: "#ffffff",
                  textDecoration: "none",
                  borderRadius: "30px",
                  padding: "13px 24px",
                  fontSize: "15px",
                  fontWeight: "400",
                }}
              >
                Discover More <span style={{ fontSize: "18px" }}>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;