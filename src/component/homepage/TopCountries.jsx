import React from "react";

import australia from "../../assets/homepage/a1.png";
import uk from "../../assets/homepage/a2.png";
import usa from "../../assets/homepage/a3.png";
import canada from "../../assets/homepage/a4.png";
import france from "../../assets/homepage/a5.png";

const countries = [
  { img: australia, name: "Study in Australia" },
  { img: uk, name: "United Kingdom" },
  { img: usa, name: "USA" },
  { img: canada, name: "Canada" },
  { img: france, name: "France" },
];

const TopCountries = () => {
  return (
    <section
      style={{
        backgroundColor: "#f3f4f6",
        padding: "5px 0 65px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="container">
        <div className="text-center mb-4">
          <h2
            style={{
              fontSize: "28px",
              fontWeight: "600",
              color: "#111",
              marginBottom: "14px",
            }}
          >
            Study in Top <span style={{ color: "#ff7a1a" }}>Countries</span>
          </h2>

          <p
            style={{
              fontSize: "14px",
              fontWeight: "400",
              color: "#111",
              lineHeight: "1.5",
              maxWidth: "520px",
              margin: "0 auto",
            }}
          >
            We help students achieve their dream of studying abroad by providing
            complete support including university selection, visa processing,
            and admission guidance.
          </p>
        </div>

        <div className="row g-3 justify-content-center">
          {countries.map((country, index) => (
            <div className="col-6 col-md-4 col-lg" key={index}>
              <div
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid #d6d6d6",
                  borderRadius: "12px",
                  padding: "10px",
                  height: "100%",
                  boxShadow: "0 1px 5px rgba(0,0,0,0.06)",
                }}
              >
                <img
                  src={country.img}
                  alt={country.name}
                  style={{
                    width: "100%",
                    
                    objectFit: "cover",
                   
                    display: "block",
                  }}
                />

                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#111",
                    padding: "9px 2px 2px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {country.name}
                  <span style={{ color: "#ff7a1a" }}>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCountries;