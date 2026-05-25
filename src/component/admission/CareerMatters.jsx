import React from "react";
import careerImg from "../../assets/admission/career-img.png"; // update path

const CareerMatters = () => {
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
          display: "flex",
          flexDirection: mobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: mobile ? "35px" : "70px",
        }}
      >
        {/* Left */}
        <div style={{ flex: 1 }}>
          <h2
            style={{
              fontSize: mobile ? "26px" : "34px",
              fontWeight: "800",
              lineHeight: "1.3",
              color: "#111",
              marginBottom: "22px",
            }}
          >
            Why Career <br />
            <span style={{ color: "#ff7a1a" }}>
              Counseling Matters
            </span>
          </h2>

          <p
            style={{
              color: "#444",
              lineHeight: "1.8",
              fontSize: mobile ? "14px" : "15px",
              maxWidth: "500px",
              marginBottom: "25px",
            }}
          >
            Navigating today’s professional landscape can be overwhelming.
            Making the wrong academic choice can lead to years of career
            dissatisfaction.
          </p>

          {[
            "Avoid confusion and decision paralysis in choosing courses.",
            "Align your core interests with high-demand professional skills.",
            "Maximize long-term success and job satisfaction.",
            "Save time and financial resources on unfocused education.",
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
                marginBottom: "14px",
              }}
            >
              <div
                style={{
                  width: "18px",
                  height: "18px",
                  border: "2px solid #ff7a1a",
                  borderRadius: "50%",
                  color: "#ff7a1a",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "10px",
                  marginTop: "2px",
                  flexShrink: 0,
                }}
              >
                ✓
              </div>

              <span
                style={{
                  fontSize: mobile ? "13px" : "14px",
                  color: "#222",
                  lineHeight: "1.6",
                }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Right */}
        <div style={{ flex: 1 }}>
          <img
            src={careerImg}
            alt="Career Counseling"
            style={{
              width: "100%",
              maxWidth: "550px",
              height: mobile ? "250px" : "420px",
              
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default CareerMatters;