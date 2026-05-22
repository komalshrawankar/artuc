import React, { useState } from "react";

const MessageSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });

  const scriptURL = "https://script.google.com/macros/s/AKfycbzWuZCUT7GspQUp6FvMK2gfT3Ul8LttxF3l2jxrqCyfmMihVzAqkTY8H8mDXEATxKzLJA/exec";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const formBody = new FormData();
  formBody.append("name", formData.name);
  formBody.append("email", formData.email);
  formBody.append("phone", formData.phone);
  formBody.append("comment", formData.comment);

  try {
    await fetch(scriptURL, {
      method: "POST",
      mode: "no-cors",
      body: formBody,
    });

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      comment: "",
    });
  } catch (error) {
    alert("Something went wrong!");
    console.log(error);
  }
};

  const features = [
    "Free Initial Assessment",
    "Expert Visa Guidance",
    "Course Selection Help",
    "University Direct Partnerships",
  ];

  return (
    <section style={{ background: "#f5f5f5", padding: "70px 0" }}>
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Left Side */}
          <div className="col-lg-7">
            <h2 style={{ fontWeight: "700", marginBottom: "18px" }}>
              Send Us a Message
            </h2>

            <p
              style={{
                maxWidth: "420px",
                color: "#333",
                fontSize: "15px",
                lineHeight: "1.6",
                marginBottom: "35px",
              }}
            >
              Have a question or need guidance? Fill out the form below and our
              team will get back to you shortly.
            </p>

            <div className="row g-3 mb-4">
              {features.map((item, index) => (
                <div className="col-12 col-sm-6" key={index}>
                  <div
                    style={{
                      background: "#eef3ff",
                      border: "1px solid #d8e2f5",
                      borderRadius: "18px",
                      padding: "13px 18px",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    <span
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        border: "2px solid #ff7a1a",
                        color: "#ff7a1a",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "10px",
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </span>
                    {item}
                  </div>
                </div>
              ))}
            </div>

            <iframe
              title="ARTUC Location"
              src="https://www.google.com/maps?q=ARTUC%20IT%20Training%20Placement%20Abroad%20Education%20Assistance%20Nagpur&output=embed"
              width="100%"
              height="290"
              style={{
                border: "0",
                borderRadius: "16px",
                boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
              }}
              loading="lazy"
            ></iframe>
          </div>

          {/* Right Side Form */}
          <div className="col-lg-5">
            <div
              style={{
                background: "#fff",
                padding: "35px",
                borderRadius: "12px",
                border: "1px solid #ddd",
                maxWidth: "430px",
                margin: "auto",
              }}
            >
              <form onSubmit={handleSubmit}>
                <label style={labelStyle}>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                />

                <label style={labelStyle}>Email</label>
                <input
  type="email"
  name="email"
  placeholder="Enter your email"
  value={formData.email}
  onChange={handleChange}
  required
  style={inputStyle}
/>
                <label style={labelStyle}>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                />

                <label style={labelStyle}>Comment</label>
                <textarea
                  name="comment"
                  placeholder="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  required
                  style={{
                    ...inputStyle,
                    height: "110px",
                    resize: "none",
                  }}
                ></textarea>

                <button
                  type="submit"
                  style={{
                    width: "100%",
                    background: "#ff7a1a",
                    color: "#fff",
                    border: "none",
                    borderRadius: "10px",
                    padding: "14px",
                    fontWeight: "600",
                    marginTop: "20px",
                  }}
                >
                  Contact Us
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const labelStyle = {
  fontWeight: "600",
  fontSize: "14px",
  marginBottom: "8px",
  display: "block",
};

const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  border: "1px solid #ccc",
  borderRadius: "6px",
  marginBottom: "16px",
  fontSize: "13px",
  outline: "none",
};

export default MessageSection;