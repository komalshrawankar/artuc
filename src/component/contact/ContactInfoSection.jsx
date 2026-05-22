import React from "react";
import location1 from "../../assets/images/l1.png";
import location2 from "../../assets/images/l2.png";
import location3 from "../../assets/images/l3.png";
import location4 from "../../assets/images/l4.png";

const ContactInfoSection = () => {
  const cards = [
    {
      icon: location1,
      title: "Office Address",
      content:
        "ARTUC – Foreign Education, Training & Placement Services 3rd Floor, Plot No 47, Kotwal Nagar, Khamla, Nagpur, Maharashtra 440022.",
    },
    {
      icon: location2,
      title: "Phone Number",
      content:
        "Call us for quick assistance and consultation.\n\n9175833367",
    },
    {
      icon: location3,
      title: "Email Address",
      content:
        "Send us your queries and our team will respond as soon as possible.\n\ninfo@artucedutech.com",
    },
    {
      icon: location4,
      title: "Working Hours",
      content:
        "Monday – Saturday: 10:00 AM – 6:00 PM\n\nSunday: Closed",
      highlight: true,
    },
  ];

  return (
    <section
      style={{
        background: "#f5f5f5",
        padding: "70px 15px",
      }}
    >
      <div className="container">

        <div
          style={{
            maxWidth: "800px",
            margin: "auto",
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          <h2 style={{ fontWeight: "700", marginBottom: "18px" }}>
            Let’s Start Your Study Abroad Journey
          </h2>

          <p
            style={{
              color: "#666",
              fontSize: "14px",
              lineHeight: "1.8",
            }}
          >
            Planning to study abroad can be exciting but also overwhelming.
          </p>
        </div>

        <div className="row g-4">
          {cards.map((item, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-3">

              <div
                style={{
                  background: "#fff",
                  border: "1px solid #e6e6e6",
                  borderRadius: "14px",
                  padding: "28px",
                  minHeight: "260px",
                }}
              >
                {/* Image Icon */}
                <div
                  style={{
                    
                   
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "start",
                    marginBottom: "25px",
                  }}
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    style={{
                     
                      objectFit: "contain",
                    }}
                  />
                </div>

                <h5
                  style={{
                    fontWeight: "700",
                    marginBottom: "15px",
                  }}
                >
                  {item.title}
                </h5>

                <p
                  style={{
                    color: "#212121",
                    fontSize: "14px",
                    whiteSpace: "pre-line",
                  }}
                >
                  {item.highlight ? (
                    <>
                      Monday – Saturday: 10:00 AM – 6:00 PM
                      <br />
                      <br />
                      <span style={{ color: "#ff4d4d" }}>
                        Sunday: Closed
                      </span>
                    </>
                  ) : (
                    item.content
                  )}
                </p>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ContactInfoSection;