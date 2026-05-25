import React, { useState } from "react";
import logo from "../assets/commonimages/logo.png";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const currentPath = window.location.pathname;

  const isActive = (path) => currentPath === path;
  const isCourseActive = currentPath.includes("/courses");
  const isStudyActive = currentPath.includes("/study-abroad");

  const testPrep = ["GMAT", "GRE", "IELTS", "SAT", "TOEFL"];

  const courses = [
    "Allied Health and Science",
    "Business, Commerce, and Management",
    "Food, Hospitality, and Personal Services",
    "Architecture and Building",
    "Creative Arts, Design & Communication",
    "Information Technology",
    "Engineering",
    "Arts, Humanities & Social Sciences",
    "Law",
    "Medicine",
  ];

  const services = [
    "Student Accommodation Support",
    "Scholarship Application Assistance",
    "International Student Insurance",
    "Course and University Selection",
    "End to End Applications",
    "Interview Preparation",
    "Letter of Recommendation",
    "Visa Application Support",
    "Education Loan Assistance",
    "Forex Assistance",
    "Test Preparations",
    "Career Counseling",
    "Travel Assistance",
  ];

  const countries = [
    ["🇦🇺", "Australia"],
    ["🇲🇺", "Mauritius"],
    ["🇮🇪", "Ireland"],
    ["🇨🇳", "China"],
    ["🇬🇧", "UK"],
    ["🇸🇬", "Singapore"],
    ["🇦🇪", "UAE"],
    ["🇵🇭", "Philippines"],
    ["🇺🇸", "USA"],
    ["🇫🇮", "Finland"],
    ["🇲🇾", "Malaysia"],
    ["🇲🇹", "Malta"],
    ["🇨🇦", "Canada"],
    ["🇮🇹", "Italy"],
    ["🇭🇺", "Hungary"],
    ["🇩🇰", "Denmark"],
    ["🇳🇱", "Netherlands"],
    ["🇫🇷", "France"],
    ["🇵🇱", "Poland"],
    ["🇨🇭", "Switzerland"],
    ["🇯🇵", "Japan"],
    ["🇳🇿", "New Zealand"],
    ["🇱🇹", "Lithuania"],
    ["🇩🇪", "Germany"],
    ["🇪🇸", "Spain"],
    ["🇨🇾", "Cyprus"],
    ["🇻🇳", "Vietnam"],
  ];

  return (
    <>
      <style>
        {`
          .mega-menu-link:hover {
            color: #ff7a1a !important;
          }

          @media (max-width: 991px) {
            .custom-mega-menu {
              position: static !important;
              transform: none !important;
              width: 100% !important;
              box-shadow: none !important;
              padding: 20px !important;
              margin-top: 10px;
            }

            .navbar-nav {
              align-items: flex-start !important;
            }

            .nav-link {
              padding-left: 0 !important;
            }
          }
        `}
      </style>

      <nav
        className="navbar navbar-expand-lg navbar-light py-0 position-relative"
        style={{
          backgroundColor: "#fff",
          minHeight: "74px",
          borderBottom: "1px solid #eee",
          boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
          zIndex: 9999,
        }}
        onMouseLeave={() => setOpenDropdown(null)}
      >
        <div
          className="container-fluid"
          style={{
            maxWidth: "1120px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          <a className="navbar-brand d-flex align-items-center m-0" href="/">
            <img
              src={logo}
              alt="Logo"
              style={{
                width: "120px",
                objectFit: "contain",
              }}
            />
          </a>

          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-lg-center">
              <li className="nav-item">
                <a
                  href="/"
                  className="nav-link"
                  style={isActive("/") ? activeLinkStyle : linkStyle}
                >
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="/about"
                  className="nav-link"
                  style={isActive("/about") ? activeLinkStyle : linkStyle}
                >
                  About Us
                </a>
              </li>

              <li
                className="nav-item"
                onMouseEnter={() => setOpenDropdown("courses")}
              >
                <a
                  href="/courses"
                  className="nav-link"
                  style={isCourseActive ? activeLinkStyle : linkStyle}
                  onClick={(e) => {
                    if (window.innerWidth < 992) {
                      e.preventDefault();
                      setOpenDropdown(
                        openDropdown === "courses" ? null : "courses"
                      );
                    }
                  }}
                >
                  Courses <span style={{ marginLeft: "6px", fontSize: "14px" }}>v</span>
                </a>
              </li>

              <li
                className="nav-item"
                onMouseEnter={() => setOpenDropdown("study")}
              >
                <a
                  href="/study-abroad"
                  className="nav-link"
                  style={isStudyActive ? activeLinkStyle : linkStyle}
                  onClick={(e) => {
                    if (window.innerWidth < 992) {
                      e.preventDefault();
                      setOpenDropdown(openDropdown === "study" ? null : "study");
                    }
                  }}
                >
                  Study Abroad <span style={{ marginLeft: "6px", fontSize: "14px" }}>v</span>
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="/blogs"
                  className="nav-link"
                  style={isActive("/blogs") ? activeLinkStyle : linkStyle}
                >
                  Blogs
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="/contact"
                  className="nav-link"
                  style={isActive("/contact") ? activeLinkStyle : linkStyle}
                >
                  Contact Us
                </a>
              </li>
            </ul>

            <div className="d-flex justify-content-lg-end justify-content-start pb-3 pb-lg-0">
              <a href="/apply" style={applyBtnStyle}>
                Apply Now
              </a>
            </div>
          </div>
        </div>

        {openDropdown === "courses" && (
          <div
            className="custom-mega-menu"
            style={megaMenuStyle}
            onMouseEnter={() => setOpenDropdown("courses")}
          >
            <h5 style={megaHeading}>Testprep</h5>

            <div className="row mb-3">
              {testPrep.map((item, i) => (
                <div className="col-6 col-md-2 mb-2" key={i}>
                  <a
                    href={`/courses/${item.toLowerCase()}`}
                    className="mega-menu-link"
                    style={megaLink}
                  >
                    {item}
                  </a>
                </div>
              ))}
            </div>

            <hr />

            <h5 style={megaHeading}>Courses</h5>

            <div className="row">
              {courses.map((item, i) => (
                <div className="col-12 col-md-4 mb-3" key={i}>
                  <a
                    href={`/courses/${item
                      .toLowerCase()
                      .replace(/,/g, "")
                      .replace(/&/g, "and")
                      .replace(/\s+/g, "-")}`}
                    className="mega-menu-link"
                    style={megaLink}
                  >
                    {item}
                  </a>
                </div>
              ))}
            </div>

            <hr />

            <h5 style={megaHeading}>Admission Services</h5>

            <div className="row">
  {services.map((item, i) => (
    <div className="col-12 col-md-4 mb-3" key={i}>
      <a
        href={`/courses/admission-services/${item
          .toLowerCase()
          .replace(/&/g, "and")
          .replace(/\s+/g, "-")}`}
        className="mega-menu-link"
        style={megaLink}
      >
        {item}
      </a>
    </div>
  ))}
</div>
          </div>
        )}

        {openDropdown === "study" && (
          <div
            className="custom-mega-menu"
            style={megaMenuStyle}
            onMouseEnter={() => setOpenDropdown("study")}
          >
            <div className="row">
              {countries.map((country, i) => (
                <div className="col-6 col-md-3 mb-4" key={i}>
                  <a
                    href="/study-abroad"
                    className="mega-menu-link"
                    style={countryLink}
                  >
                    <span style={{ fontSize: "28px", marginRight: "14px" }}>
                      {country[0]}
                    </span>
                    {country[1]}
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

const linkStyle = {
  fontSize: "16px",
  fontWeight: "400",
  color: "#111",
  margin: "0 6px",
  textDecoration: "none",
};

const activeLinkStyle = {
  ...linkStyle,
  color: "#ff7a1a",
};

const applyBtnStyle = {
  backgroundColor: "#ff7a1a",
  color: "#fff",
  borderRadius: "30px",
  padding: "12px 28px",
  fontSize: "16px",
  fontWeight: "600",
  border: "none",
  textDecoration: "none",
  display: "inline-block",
};

const megaMenuStyle = {
  position: "absolute",
  top: "74px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "86%",
  background: "#f5f6f8",
  borderTop: "3px solid #ff7a1a",
  padding: "28px 34px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
  zIndex: 99999,
};

const megaHeading = {
  fontSize: "18px",
  fontWeight: "700",
  marginBottom: "18px",
};

const megaLink = {
  color: "#222",
  fontSize: "17px",
  textDecoration: "none",
  display: "block",
};

const countryLink = {
  color: "#222",
  fontSize: "18px",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
};

export default Navbar;