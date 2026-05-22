import React from "react";
import logo from "../assets/commonimages/logo.png"

const Navbar = () => {
  const navStyle = {
    backgroundColor: "#ffffff",
    minHeight: "74px",
    borderBottom: "1px solid #eeeeee",
    boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
    zIndex: 1000,
  };

  const linkStyle = {
    fontSize: "16px",
    fontWeight: "400",
    color: "#111",
    margin: "0 6px",
  };

  const activeLinkStyle = {
    ...linkStyle,
    color: "#ff7a1a",
  };

  const applyBtnStyle = {
    backgroundColor: "#ff7a1a",
    color: "#fff",
    borderRadius: "30px",
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "500",
    border: "none",
    textDecoration: "none",
    display: "inline-block",
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light py-0" style={navStyle}>
      <div
        className="container-fluid"
        style={{
          maxWidth: "1120px",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center m-0" href="/">
          <img
            src={logo}
            alt="Logo"
            style={{
            
              objectFit: "contain",
            }}
          />
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ fontSize: "18px" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item">
              <a className="nav-link" href="/" style={activeLinkStyle}>
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/about" style={linkStyle}>
                About Us
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/courses"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={linkStyle}
              >
                Courses
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/courses/ielts">
                    IELTS
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/courses/toefl">
                    TOEFL
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/courses/pte">
                    PTE
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/study-abroad"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={linkStyle}
              >
                Study Abroad
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/study-abroad/usa">
                    USA
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/study-abroad/uk">
                    UK
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/study-abroad/canada">
                    Canada
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/study-abroad/australia">
                    Australia
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/blogs" style={linkStyle}>
                Blogs
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/contact" style={linkStyle}>
                Contact Us
              </a>
            </li>
          </ul>

          {/* Apply Button */}
          <div className="d-flex justify-content-lg-end justify-content-start pb-3 pb-lg-0">
            <a href="/apply" style={applyBtnStyle}>
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;