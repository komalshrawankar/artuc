import React from "react";
import statsBg from "../../assets/images/stats-bg.jpg";

const stats = [
  { number: "1000+", title: "Total Universities" },
  { number: "80000+", title: "Courses" },
  { number: "45+", title: "Countries" },
  { number: "7+", title: "Branches" },
];

const StatsSection = () => {
  return (
    <section
      style={{
        backgroundColor: "#f3f4f6",
        padding: "35px 0 60px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="container">
        <div
          style={{
            position: "relative",
            borderRadius: "28px 28px 28px 0px",
            overflow: "hidden",
            backgroundImage: `url(${statsBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            padding: "52px 55px",
          }}
        >
          {/* Blue overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(4, 63, 130, 0.72)",
            }}
          />

          <div className="position-relative" style={{ zIndex: 2 }}>
            <div className="row g-4 justify-content-between">
              {stats.map((item, index) => (
                <div className="col-6 col-lg-3" key={index}>
                  <div
                    style={{
                      backgroundColor: "#ff7a1a",
                      color: "#ffffff",
                      borderRadius: "8px",
                      padding: "16px 12px",
                      textAlign: "center",
                      maxWidth: "175px",
                      margin: "0 auto",
                      boxShadow: "4px 4px 0 rgba(255,255,255,0.65)",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "24px",
                        fontWeight: "600",
                        marginBottom: "10px",
                      }}
                    >
                      {item.number}
                    </h3>

                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        margin: 0,
                      }}
                    >
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;