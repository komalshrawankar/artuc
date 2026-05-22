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

const BlogGrid = () => {
  return (
    <section
      style={{
        backgroundColor: "#f3f4f6",
        padding: "55px 0 70px",
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

        <div className="row gx-1 gy-5 justify-content-center">
          {blogs.map((blog, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "28px 28px 28px 0",
                  padding: "20px",
                  height: "100%",
                  border: "1px solid #d7d7d7",
                  borderBottom: "3px solid #ff7a1a",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  maxWidth: "350px",
                  margin: "0 auto",
                }}
              >
                <div style={{ position: "relative" }}>
                  <img
                    src={blogImg}
                    alt={blog.title}
                    style={{
                      width: "100%",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "14px 14px 10px 0",
                      display: "block",
                    }}
                  />

                  <span
                    style={{
                      position: "absolute",
                      right: "-30px",
                      top: "14px",
                      backgroundColor: "#ff7a1a",
                      color: "#fff",
                      fontSize: "14px",
                      padding: "10px 18px",
                      borderRadius: "20px 20px 20px 0px",
                    }}
                  >
                    {blog.date}
                  </span>
                </div>

                <div style={{ padding: "14px 0 0" }}>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#222",
                      lineHeight: "1.35",
                      marginBottom: "16px",
                    }}
                  >
                    {blog.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: "400",
                      color: "#333",
                      lineHeight: "1.55",
                      marginBottom: "14px",
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
                      borderRadius: "10px",
                      padding: "8px 12px",
                    }}
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="d-flex justify-content-center align-items-center gap-1"
          style={{ marginTop: "45px" }}
        >
          <button style={pageBtn}>‹</button>
          <button style={activePageBtn}>1</button>
          <button style={pageBtn}>2</button>
          <button style={pageBtn}>3</button>
          <button style={pageBtn}>›</button>
        </div>
      </div>
    </section>
  );
};

const pageBtn = {
  width: "18px",
  height: "18px",
  border: "none",
  backgroundColor: "#ff7a1a",
  color: "#fff",
  fontSize: "12px",
  borderRadius: "2px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 0,
};

const activePageBtn = {
  ...pageBtn,
  backgroundColor: "#ffffff",
  color: "#ff7a1a",
  border: "1px solid #ff7a1a",
};

export default BlogGrid;