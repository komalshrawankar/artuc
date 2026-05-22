import React from "react";

import blogImg from "../../assets/homepage/blog-img.png";

const blogs = [
  {
    date: "1 Jan 2026",
    title: "Top 10 IT Skills in Demand in 2026",
    desc: "Discover the most in-demand IT skills that companies are hiring for and how you can prepare yourself for high-paying tech jobs.",
  },
  {
    date: "4 Jan 2026",
    title: "How to Crack Your First Job Interview Successfully",
    desc: "Learn practical interview tips, resume-building strategies, and confidence-boosting techniques to land your dream job.",
  },
  {
    date: "20 Jan 2026",
    title: "Why Data Analytics is a High-Growth Career",
    desc: "Explore why data analytics is one of the fastest-growing career fields and how you can start your journey today.",
  },
];

const BlogSection = () => {
  return (
    <section
      style={{
        backgroundColor: "#f3f4f6",
        padding: "70px 0",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <span
            style={{
              display: "inline-block",
              fontSize: "12px",
              color: "#111",
              borderBottom: "1px solid #ff7a1a",
              borderRadius: "0 0 12px 12px",
              padding: "0 14px 5px",
              marginBottom: "16px",
            }}
          >
            Blog
          </span>

          <h2
            style={{
              fontSize: "30px",
              fontWeight: "600",
              color: "#222",
              marginBottom: "14px",
            }}
          >
            Career Insights & Industry{" "}
            <span style={{ color: "#ff7a1a" }}>Updates</span>
          </h2>

          <p
            style={{
              maxWidth: "650px",
              margin: "0 auto",
              fontSize: "15px",
              lineHeight: "1.5",
              color: "#222",
            }}
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {blogs.map((blog, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "28px 28px 28px 0",
                  padding: "15px",
                  height: "100%",
                  border: "1px solid #d7d7d7",
                  borderBottom: "3px solid #ff7a1a",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  maxWidth: "390px",
                  margin: "0 auto",
                }}
              >
                <div style={{ position: "relative" }}>
                  <img
                    src={blogImg}
                    alt={blog.title}
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "cover",
                      borderRadius: "14px 14px 10px 0",
                      display: "block",
                    }}
                  />

                  <span
                    style={{
                      position: "absolute",
                      right: "-50px",
                      top: "22px",
                      backgroundColor: "#ff7a1a",
                      color: "#fff",
                      fontSize: "14px",
                      padding: "9px 24px",
                      borderRadius: "20px 20px 20px 0px",
                    }}
                  >
                    {blog.date}
                  </span>
                </div>

                <div style={{ padding: "14px 0 0" }}>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      color: "#222",
                      lineHeight: "1.35",
                      marginBottom: "18px",
                    }}
                  >
                    {blog.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#333",
                      lineHeight: "1.55",
                      marginBottom: "16px",
                    }}
                  >
                    {blog.desc}
                  </p>

                  <a
                    href="/blogs"
                    style={{
                      display: "inline-block",
                      backgroundColor: "#ff7a1a",
                      color: "#ffffff",
                      textDecoration: "none",
                      fontSize: "14px",
                      borderRadius: "15px",
                      padding: "7px 12px",
                    }}
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;