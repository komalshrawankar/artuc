import React from "react";

import service1 from "../../assets/homepage/s1.png";
import service2 from "../../assets/homepage/s2.png";
import service3 from "../../assets/homepage/s3.png";
import service4 from "../../assets/homepage/s4.png";

const services = [
    {
        img: service1,
        title: "IT Training & Placement",
        desc: "Learn in-demand skills like Web Development, Data Analytics, and Digital Marketing with placement support.",
    },
    {
        img: service2,
        title: "Non-IT Placement",
        desc: "Get job opportunities in Healthcare, HR, Finance, Administration, and more",
    },
    {
        img: service3,
        title: "Study Abroad Consultancy",
        desc: "Get expert guidance for studying in countries like UK, Canada, Australia, and Germany.",
    },
    {
        img: service4,
        title: "Career Counselling",
        desc: "Get personalized career guidance from industry experts.",
    },
];

const ServicesOffer = () => {
    return (
        <section
            style={{
                backgroundColor: "#f3f4f6",
                padding: "18px 0 70px",
                fontFamily: "'Poppins', sans-serif",
            }}
        >
            <div className="container">
                <div className="text-center mb-4">
                    <span
                        style={{
                            display: "inline-block",
                            fontSize: "12px",
                            fontWeight: "400",
                            color: "#111",
                            borderBottom: "1px solid #ff7a1a",
                            borderRadius: "0 0 12px 12px",
                            padding: "0 14px 5px",
                            marginBottom: "14px",
                        }}
                    >
                        Our Services
                    </span>

                    <h2
                        style={{
                            fontSize: "30px",
                            fontWeight: "500",
                            color: "#222",
                            marginBottom: "14px",
                        }}
                    >
                        What We Offer
                    </h2>

                    <p
                        style={{
                            fontSize: "16px",
                            fontWeight: "400",
                            color: "#222",
                            marginBottom: "38px",
                        }}
                    >
                        We provide complete career solutions from training to placement and
                        global education.
                    </p>
                </div>

                <div className="row g-4 justify-content-center">
                    {services.map((item, index) => (
                        <div className="col-12 col-sm-6 col-lg-3" key={index}>
                            <div
                                style={{
                                    backgroundColor: "#ffffff",
                                    borderRadius: "28px 28px 22px 0",
                                    padding: "14px 14px 18px",
                                    height: "100%",
                                    border: "1px solid #d8d8d8",
                                    borderBottom: "6px solid #ff7a1a",
                                    boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                                    overflow: "hidden",
                                }}
                            >
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    style={{
                                        width: "100%",

                                        objectFit: "cover",

                                        marginBottom: "16px",
                                    }}
                                />

                                <h3
                                    style={{
                                        fontSize: "18px",
                                        fontWeight: "600",
                                        color: "#222",
                                        marginBottom: "22px",
                                        lineHeight: "1.25",
                                    }}
                                >
                                    {item.title}
                                </h3>

                                <p
                                    style={{
                                        fontSize: "16px",
                                        fontWeight: "400",
                                        color: "#333",
                                        lineHeight: "1.5",
                                        marginBottom: 0,
                                    }}
                                >
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesOffer;