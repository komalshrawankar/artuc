import React from "react";
import logo from "../assets/commonimages/logo.png";

const mainLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Courses", path: "/courses/gmat" },
  { name: "Blogs", path: "/blogs" },
  { name: "Placement", path: "/contact" },
  { name: "Study Abroad", path: "/study-abroad/australia" },
  { name: "Contact Us", path: "/contact" },
];

const quickLinks = [
  { name: "GMAT", path: "/courses/gmat" },
  { name: "GRE", path: "/courses/gre" },
  { name: "IELTS", path: "/courses/ielts" },
  { name: "SAT", path: "/courses/sat" },
  { name: "TOEFL", path: "/courses/toefl" },
];

const socialLinks = [
  { icon: "bi bi-facebook", path: "https://facebook.com" },
  { icon: "bi bi-instagram", path: "https://instagram.com" },
  { icon: "bi bi-youtube", path: "https://youtube.com" },
  { icon: "bi bi-twitter-x", path: "https://x.com" },
  { icon: "bi bi-pinterest", path: "https://pinterest.com" },
];

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

            <p
              style={{
                fontSize: "14px",
                lineHeight: "1.6",
                maxWidth: "330px",
              }}
            >
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
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={iconStyle}
                >
                  <i className={item.icon}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="col-6 col-lg-2">
            <h4 style={{ fontSize: "18px", marginBottom: "18px" }}>Links</h4>

            {mainLinks.map((item) => (
              <a key={item.name} href={item.path} style={footerLink}>
                {item.name}
              </a>
            ))}
          </div>

          <div className="col-6 col-lg-2">
            <h4 style={{ fontSize: "18px", marginBottom: "18px" }}>
              Quick links
            </h4>

            {quickLinks.map((item) => (
              <a key={item.name} href={item.path} style={footerLink}>
                {item.name}
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
            <p
              style={{
                fontSize: "14px",
                lineHeight: "1.6",
                maxWidth: "360px",
              }}
            >
              📍 ARTUC – Foreign Education, Training & Placement Services, 3rd
              Floor, Plot No 47, Kotwal Nagar, Khamla, Nagpur, Maharashtra
              440022
            </p>
          </div>
        </div>

        <hr
          style={{
            borderColor: "rgba(255,255,255,0.25)",
            margin: "28px 0",
          }}
        />

        <div className="row gy-2 align-items-center">
          <div className="col-12 col-md-6 text-center text-md-start">
            <a href="/privacy-policy" style={bottomLink}>
              Privacy Policy
            </a>
            <a href="/terms-and-conditions" style={bottomLink}>
              Terms & Conditions
            </a>
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

const footerLink = {
  display: "block",
  color: "#F4F6F8",
  textDecoration: "none",
  fontSize: "14px",
  marginBottom: "10px",
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