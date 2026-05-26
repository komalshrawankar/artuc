import React from "react";
import logo from "../assets/commonimages/logo.png";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#001535",
        color: "#F4F6F8",
        fontFamily: "'Poppins', sans-serif",
        padding: "45px 0 22px",
      }}
    >
      <div className="container">
        <div className="row gy-4">
          <div className="col-12 col-lg-4">
            <img
              src={logo}
              alt="Logo"
              style={{ width: "135px", marginBottom: "22px" }}
            />

            <p style={{ fontSize: "14px", lineHeight: "1.6", maxWidth: "330px" }}>
              Your trusted platform for quality education, career growth, and
              lifelong learning. Explore courses, gain skills, and achieve your
              dreams with us
            </p>

           <div
  style={{
    display: "flex",
    gap: "14px",
    marginTop: "18px",
    alignItems: "center",
  }}
>
  <a href="/" style={iconStyle}>
    <i className="bi bi-facebook"></i>
  </a>

  <a href="/" style={iconStyle}>
    <i className="bi bi-instagram"></i>
  </a>

  <a href="/" style={iconStyle}>
    <i className="bi bi-youtube"></i>
  </a>

  <a href="/" style={iconStyle}>
    <i className="bi bi-twitter-x"></i>
  </a>

  <a href="/" style={iconStyle}>
    <i className="bi bi-pinterest"></i>
  </a>
</div>
          </div>

          <div className="col-6 col-lg-2">
            <h4 style={{ fontSize: "18px", marginBottom: "18px" }}>Links</h4>
            {["Home", "About Us", "Courses", "Blogs", "Placement", "Study Abroad", "Contact Us"].map(
              (item) => (
                <a
                  key={item}
                  href="/"
                  style={{
                    display: "block",
                    color: "#F4F6F8",
                    textDecoration: "none",
                    fontSize: "14px",
                    marginBottom: "10px",
                  }}
                >
                  {item}
                </a>
              )
            )}
          </div>

          <div className="col-6 col-lg-2">
            <h4 style={{ fontSize: "18px", marginBottom: "18px" }}>
              Quick links
            </h4>
            {["GMAT", "GRE", "IELTS", "SAT", "TOEFL"].map((item) => (
              <a
                key={item}
                href="/"
                style={{
                  display: "block",
                  color: "#F4F6F8",
                  textDecoration: "none",
                  fontSize: "14px",
                  marginBottom: "10px",
                }}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="col-12 col-lg-4">
            <h4 style={{ fontSize: "18px", marginBottom: "18px" }}>
              Contact Info
            </h4>

            <p style={{ fontSize: "14px", marginBottom: "10px" }}>
              ☎ 9175833367
            </p>
            <p style={{ fontSize: "14px", marginBottom: "10px" }}>
              ✉ info@artuceduTech.com
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.6", maxWidth: "360px" }}>
              📍 ARTUC – Foreign Education, Training & Placement Services, 3rd
              Floor, Plot No 47, Kotwal Nagar, Khamla, Nagpur, Maharashtra
              440022
            </p>
          </div>
        </div>

        <hr style={{ borderColor: "rgba(255,255,255,0.25)", margin: "28px 0" }} />

        <div className="row gy-2 align-items-center">
          <div className="col-12 col-md-6 text-center text-md-start">
            <a href="/" style={bottomLink}>Privacy Policy</a>
            <a href="/" style={bottomLink}>Terms & Conditions</a>
          </div>

          <div className="col-12 col-md-6 text-center text-md-end">
            <p style={{ fontSize: "12px", margin: 0 }}>
              Copyright © 2026 Designed and developed by Adbornsolutions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const bottomLink = {
  color: "#F4F6F8",
  textDecoration: "none",
  fontSize: "12px",
  marginRight: "18px",
};
const iconStyle = {
  color: "#ffffff",
  fontSize: "14px",
  textDecoration: "none",
  width: "26px",
  height: "26px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "0.3s",
};

export default Footer;