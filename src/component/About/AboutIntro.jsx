import React from "react";
import partners from "../../assets/homepage/partners.png";

const AboutIntro = () => {
  return (
    <section
      style={{
        backgroundColor: "#f3f4f6",
        padding: "70px 0",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="container">
        <div className="row align-items-center gy-5 gx-5">
          {/* Left Image */}
          <div className="col-12 col-lg-5 text-center">
            <img
              src={partners}
              alt="About Artuc"
              style={{
                width: "100%",
                maxWidth: "470px",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>

          {/* Right Content */}
          <div className="col-12 col-lg-7 ">
            <div style={{ maxWidth: "620px" }}>
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
                About Us
              </span>

              <h2
                style={{
                  fontSize: "clamp(30px, 3vw, 42px)",
                  fontWeight: "500",
                  lineHeight: "1.35",
                  color: "#111",
                  marginBottom: "24px",
                }}
              >
                Empowering Careers, Creating <br />
                <span style={{ color: "#ff7a1a" }}>
                  Global Opportunities.
                </span>
              </h2>

              <div
                className="d-flex flex-wrap gap-3"
                style={{ marginBottom: "28px" }}
              >
                <button style={activeBtn}>Who We Are</button>
                <button style={normalBtn}>Our Vision</button>
                <button style={normalBtn}>Our mission</button>
              </div>

              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "1.65",
                  color: "#333",
                  maxWidth: "560px",
                  marginBottom: 0,
                }}
              >
                Artuc is a career-focused training, placement, and overseas
                education consultancy dedicated to helping students and
                professionals build successful futures. We bridge the gap
                between education and employment by providing industry-relevant
                training programs, practical skill development, and strong
                placement support. Whether you aim to secure a job in India or
                pursue higher education abroad, we guide you at every step of
                your journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const activeBtn = {
  backgroundColor: "#ff7a1a",
  color: "#fff",
  border: "none",
  borderRadius: "25px",
  padding: "11px 20px",
  fontSize: "15px",
  fontWeight: "400",
};

const normalBtn = {
  backgroundColor: "#fff",
  color: "#111",
  border: "1px solid #d8d8d8",
  borderRadius: "25px",
  padding: "11px 20px",
  fontSize: "15px",
  fontWeight: "400",
  boxShadow: "0 2px 5px rgba(0,0,0,0.08)",
};

export default AboutIntro;