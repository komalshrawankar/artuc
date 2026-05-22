import React, { useEffect, useState } from "react";
import heroBg from "../../assets/commonimages/hero-bg.png";
import heroBg2 from "../../assets/commonimages/hero-bg-2.png";

const slides = [
  {
    bg: heroBg,
    title: (
      <>
        Your Gateway to{" "}
        <span style={{ color: "#ff7a1a" }}>Global</span> Education
      </>
    ),
    desc1:
      "Study at top universities around the world with expert guidance and complete support.",
    desc2:
      "From career counseling and university selection to visa assistance and test preparation, we provide end-to-end support to help students achieve their international education goals.",
  },
  {
    bg: heroBg2,
    title: (
      <>
        Shaping <br />
        <span style={{ color: "#ff7a1a" }}>Futures</span> Through Education.
      </>
    ),
    desc1:
      "Empowering the next generation of leaders with world-class courses, mentorship, and global opportunities.",
    desc2: "",
  },
];

const HomeHero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState("left");

  useEffect(() => {
    const slider = setInterval(() => {
      setDirection((prev) => (prev === "left" ? "right" : "left"));
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(slider);
  }, []);

  return (
    <section
      className="container px-0"
      style={{
        fontFamily: "'Poppins', sans-serif",
        overflow: "hidden",
      }}
    >
      <div
        className="position-relative"
        style={{
          minHeight: "clamp(520px, 53vw, 684px)",
          borderBottomLeftRadius: "24px",
          borderBottomRightRadius: "24px",
          overflow: "hidden",
        }}
      >
        <div
          className="d-flex"
          style={{
            width: `${slides.length * 100}%`,
            minHeight: "clamp(520px, 53vw, 684px)",
            transform:
              activeSlide === 0
                ? "translateX(0%)"
                : direction === "left"
                ? "translateX(-50%)"
                : "translateX(-50%)",
            transition: "transform 0.8s ease-in-out",
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="position-relative d-flex align-items-center"
              style={{
                width: `${100 / slides.length}%`,
                minHeight: "clamp(520px, 53vw, 684px)",
                backgroundImage: `url(${slide.bg})`,
                backgroundSize: "100% 100%",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="container position-relative" style={{ zIndex: 2 }}>
                <div className="row">
                  <div className="col-12 col-md-7 col-lg-5">
                    <div
                      style={{
                        maxWidth: "460px",
                        paddingTop: "40px",
                        paddingBottom: "70px",
                      }}
                    >
                      <h1
                        className="mb-3"
                        style={{
                          color: "#ffffff",
                          fontSize: "clamp(32px, 4vw, 52px)",
                          fontWeight: "700",
                          lineHeight: "1.2",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {slide.title}
                      </h1>

                      <p
                        className="mb-4"
                        style={{
                          color: "#ffffff",
                          fontSize: "clamp(14px, 1.3vw, 17px)",
                          fontWeight: "400",
                          lineHeight: "1.6",
                          maxWidth: "430px",
                        }}
                      >
                        {slide.desc1}
                      </p>

                      {slide.desc2 && (
                        <p
                          className="mb-4"
                          style={{
                            color: "#ffffff",
                            fontSize: "clamp(13px, 1.1vw, 15px)",
                            fontWeight: "400",
                            lineHeight: "1.6",
                            maxWidth: "430px",
                          }}
                        >
                          {slide.desc2}
                        </p>
                      )}

                      <div className="d-flex flex-wrap gap-3">
                        <a
                          href="/courses"
                          className="text-decoration-none"
                          style={{
                            backgroundColor: "#ff7a1a",
                            color: "#ffffff",
                            borderRadius: "30px",
                            padding: "12px 24px",
                            fontSize: "14px",
                            fontWeight: "500",
                            display: "inline-block",
                          }}
                        >
                          Explore Courses
                        </a>

                        <a
                          href="/contact"
                          className="text-decoration-none"
                          style={{
                            backgroundColor: "transparent",
                            color: "#ffffff",
                            border: "1px solid rgba(255,255,255,0.8)",
                            borderRadius: "30px",
                            padding: "12px 24px",
                            fontSize: "14px",
                            fontWeight: "500",
                            display: "inline-block",
                          }}
                        >
                          Get Free Career Counselling
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Dots */}
        <div
          className="position-absolute start-50 translate-middle-x d-flex gap-1"
          style={{
            bottom: "28px",
            zIndex: 3,
          }}
        >
          {slides.map((_, index) => (
            <span
              key={index}
              onClick={() => setActiveSlide(index)}
              style={{
                width: "6px",
                height: "6px",
                cursor: "pointer",
                backgroundColor:
                  activeSlide === index ? "#ff7a1a" : "#ffb27a",
                borderRadius: "50%",
                display: "block",
              }}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeHero;