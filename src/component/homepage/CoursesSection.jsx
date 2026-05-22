import React from "react";

import course1 from "../../assets/homepage/c1.png";
import course2 from "../../assets/homepage/c2.png";
import course3 from "../../assets/homepage/c3.png";

const courses = [
    {
        img: course1,
        title: "Full Stack Web Development",
        desc: "Master front-end and back-end technologies including HTML, CSS, JavaScript, React, Node.js, and databases.",
        points: ["Live Project", "Portfolio Development", "Interview Preparation", "Certification"],
        duration: "4–6 Months",
    },
    {
        img: course2,
        title: "Forex Trading Course",
        desc: "Learn currency trading strategies, risk management, market analysis, and practical trading techniques.",
        points: ["Live Market Sessions", "Strategy Training", "Risk Management Techniques", "Practical Learning"],
        duration: "2 Months",
    },
    {
        img: course3,
        title: "Healthcare & Paramedical Courses",
        desc: "Specialized diploma programs designed to prepare students for healthcare and medical support roles.",
        points: ["Industry-Oriented Curriculum", "Practical Training", "Certification", "Job Assistance"],
        duration: "6–12 Months",
    },
];

const CoursesSection = () => {
    return (
        <section
            style={{
                backgroundColor: "#f3f4f6",
                padding: "55px 0 65px",
                fontFamily: "'Poppins', sans-serif",
            }}
        >
            <div className="container">
                <div className="text-center mb-4">
                    <span
                        style={{
                            display: "inline-block",
                            fontSize: "12px",
                            color: "#111",
                            borderBottom: "1px solid #ff7a1a",
                            borderRadius: "0 0 12px 12px",
                            padding: "0 14px 5px",
                            marginBottom: "18px",
                        }}
                    >
                        Our Courses
                    </span>

                    <h2
                        style={{
                            fontSize: "28px",
                            fontWeight: "500",
                            color: "#222",
                            margin: 0,
                        }}
                    >
                        Let's Check Our{" "}
                        <span style={{ color: "#ff7a1a" }}>Courses</span>
                    </h2>
                </div>

                <div className="row g-4 justify-content-center">
                    {courses.map((course, index) => (
                        <div className="col-12 col-md-6 col-lg-4" key={index}>
                            <div
                                style={{
                                    backgroundColor: "#fff",
                                    border: "1px solid #d6d6d6",
                                    borderRadius: "26px 26px 20px 0px",
                                    padding: "20px",
                                    height: "100%",
                                    boxShadow: "0 1px 5px rgba(0,0,0,0.06)",
                                }}
                            >
                                <div style={{ position: "relative" }}>
                                    <img
                                        src={course.img}
                                        alt={course.title}
                                        style={{
                                            width: "100%",
                                            height: "205px",
                                            objectFit: "cover",
                                            borderRadius: "20px 20px 20px 0",
                                        }}
                                    />

                                    <span
                                        style={{
                                            position: "absolute",
                                            top: "8px",
                                            right: "5px",
                                            backgroundColor: "#ff7a1a",
                                            color: "#fff",
                                            fontSize: "13px",
                                            padding: "10px 12px",
                                            borderRadius: "10px 10px 10px 0px",
                                        }}
                                    >
                                        Online / Offline
                                    </span>
                                </div>

                                <div
                                    style={{
                                        textAlign: "right",
                                        color: "#ff7a1a",
                                        fontSize: "24px",
                                        marginTop: "8px",
                                        letterSpacing: "8px",
                                    }}
                                >
                                    ★★★★☆
                                </div>

                                <h3
                                    style={{
                                        fontSize: "18px",
                                        fontWeight: "600",
                                        color: "#111",
                                        marginBottom: "18px",
                                    }}
                                >
                                    {course.title}
                                </h3>

                                <p
                                    style={{
                                        fontSize: "15px",
                                        lineHeight: "1.5",
                                        color: "#333",
                                        marginBottom: "16px",
                                    }}
                                >
                                    {course.desc}
                                </p>

                                {course.points.map((point, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "8px",
                                            fontSize: "16px",
                                            color: "#333",
                                            marginBottom: "9px",
                                        }}
                                    >
                                        <span style={{ color: "#ff7a1a" }}>⊙</span>
                                        {point}
                                    </div>
                                ))}

                                <div
                                    style={{
                                        borderTop: "1px solid #d6d6d6",
                                        marginTop: "16px",
                                        paddingTop: "12px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        gap: "10px",
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: "14px",
                                            color: "#333",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "7px",
                                        }}
                                    >
                                        <span style={{ color: "#ff7a1a" }}>◷</span>
                                        {course.duration}
                                    </span>

                                    <a
                                        href="/contact"
                                        style={{
                                            backgroundColor: "#ff7a1a",
                                            color: "#fff",
                                            textDecoration: "none",
                                            fontSize: "15px",
                                            borderRadius: "8px",
                                            padding: "8px 12px",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        Enroll Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-end mt-4">
                    <a
                        href="/courses"
                        style={{
                            color: "#ff7a1a",
                            textDecoration: "none",
                            fontSize: "14px",
                        }}
                    >
                        View All Courses <span style={{ marginLeft: "10px" }}>→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CoursesSection;