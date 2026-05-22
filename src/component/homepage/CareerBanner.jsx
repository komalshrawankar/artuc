import React from "react";
import blueBg from "../../assets/homepage/blue-bg.png";

const CareerBanner = () => {
  return (
    <section
      style={{
        backgroundColor: "#f3f4f6",
        padding: "30px 0 60px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="container">
        <div
          style={{
            backgroundColor: "#1657b7",
            backgroundImage: `url(${blueBg})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "22px 22px 22px 0px",
            minHeight: "150px",
            padding: "58px 90px",
          }}
        >
          <div className="row align-items-center">
            <div className="col-12 col-lg-8 text-center text-lg-start">
              <h2
                style={{
                  color: "#ffffff",
                  fontSize: "clamp(24px, 2.5vw, 34px)",
                  fontWeight: "600",
                  marginBottom: "14px",
                }}
              >
                Start <span style={{ color: "#ff7a1a" }}>Your Career</span>{" "}
                Journey Today
              </h2>

              <p style={{ color: "#ffffff", fontSize: "15px", marginBottom: 0 }}>
                Join Artuc EduTech and take the first step toward your successful
                future.
              </p>
            </div>

            <div className="col-12 col-lg-4 text-center text-lg-end mt-4 mt-lg-0">
              <a
                href="/contact"
                style={{
                  backgroundColor: "#ff7a1a",
                  color: "#ffffff",
                  textDecoration: "none",
                  borderRadius: "30px",
                  padding: "12px 28px",
                  fontSize: "14px",
                  fontWeight: "500",
                  display: "inline-block",
                }}
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerBanner;