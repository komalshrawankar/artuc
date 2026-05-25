import React from "react";

const BenefitCards = ({
  title,
  highlight,
  items = [],
}) => {
  const mobile = window.innerWidth <= 768;

  return (
    <section
      style={{
        background: "#f4f6f8",
        padding: mobile ? "45px 16px" : "70px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
        }}
      >
        {/* Heading */}
        <h2
          style={{
            textAlign: "center",
            fontSize: mobile ? "26px" : "34px",
            fontWeight: "800",
            marginBottom: "40px",
            color: "#111",
          }}
        >
          {title}{" "}
          <span style={{ color: "#ff7a1a" }}>
            {highlight}
          </span>
        </h2>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: mobile
              ? "1fr 1fr"
              : "repeat(4,1fr)",
            gap: "18px",
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                borderRadius: "12px",
                padding: mobile ? "20px 10px" : "28px 20px",
                textAlign: "center",
                boxShadow: "0 4px 12px rgba(0,0,0,.05)",
                transition: ".3s",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: mobile ? "34px" : "40px",
                  height: mobile ? "34px" : "40px",
                  objectFit: "contain",
                  marginBottom: "16px",
                }}
              />

              <h4
                style={{
                  fontSize: mobile ? "12px" : "15px",
                  lineHeight: "1.5",
                  fontWeight: "700",
                  color: "#111",
                  margin: 0,
                }}
              >
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitCards;