import React from "react";

import logo1 from "../../assets/images/logo1.png";
import logo2 from "../../assets/images/logo2.png";
import logo3 from "../../assets/images/logo3.png";
import logo4 from "../../assets/images/logo4.png";
import logo5 from "../../assets/images/logo5.png";
import logo6 from "../../assets/images/logo6.png";
import logo7 from "../../assets/images/logo7.png";
import logo8 from "../../assets/images/logo1.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

const UniversitySlider = () => {
  return (
    <>
      <section
        style={{
          backgroundColor: "#dcebff",
          padding: "45px 0",
          overflow: "hidden",
        }}
      >
        <div className="logo-slider">
          <div className="logo-track">
            {[...logos, ...logos].map((logo, index) => (
              <div className="logo-item" key={index}>
                <img src={logo} alt="University Logo" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .logo-slider {
          width: 100%;
          overflow: hidden;
        }

        .logo-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: scrollLogos 22s linear infinite;
        }

        .logo-item {
          flex: 0 0 auto;
          width: 180px;
          height: 70px;
          margin: 0 14px;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px 16px;
        }

        .logo-item img {
          max-width: 100%;
          max-height: 48px;
          object-fit: contain;
        }

        @keyframes scrollLogos {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .logo-item {
            width: 145px;
            height: 60px;
            margin: 0 10px;
          }

          .logo-track {
            animation-duration: 16s;
          }
        }
      `}</style>
    </>
  );
};

export default UniversitySlider;