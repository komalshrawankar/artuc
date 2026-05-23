import React from "react";

const HighlightsSection = ({
    title,
    highlight,
    subtitle,
    items = [],
}) => {
    return (
        <section
            style={{
                width: "100%",
                background: "#f3f4f6",
                padding: "70px 20px",
                fontFamily: "'Poppins', sans-serif",
            }}
        >
            <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: "35px" }}>
                    <h2
                        style={{
                            fontSize: "clamp(26px, 3vw, 36px)",
                            fontWeight: "700",
                            color: "#111",
                            marginBottom: "12px",
                        }}
                    >
                        {title} <span style={{ color: "#ff7a1a" }}>{highlight}</span>
                    </h2>

                    <p
                        style={{
                            fontSize: "15px",
                            color: "#5d6b82",
                            margin: 0,
                        }}
                    >
                        {subtitle}
                    </p>
                </div>

                <div className="row g-4">
                    {items.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div className="col-12 col-md-6 col-lg-4" key={index}>
                                <div
                                    style={{
                                        background: "#ffffff",
                                        borderRadius: "6px",
                                        padding: "28px 26px",
                                        height: "100%",
                                    }}
                                >
                                    {item.icon && (
                                        <div
                                            style={{
                                               
                                               
                                                display: "flex",
                                                alignItems: "start",
                                                justifyContent: "start",
                                                marginBottom: "22px",
                                                padding: "9px",
                                            }}
                                        >
                                            <img
                                                src={item.icon}
                                                alt={item.title}
                                               
                                            />
                                        </div>
                                    )}

                                    <h4
                                        style={{
                                            fontSize: "17px",
                                            fontWeight: "600",
                                            color: "#111",
                                            lineHeight: "1.4",
                                            marginBottom: "14px",
                                        }}
                                    >
                                        {item.title}
                                    </h4>

                                    <p
                                        style={{
                                            fontSize: "14px",
                                            color: "#333",
                                            lineHeight: "1.6",
                                            margin: 0,
                                        }}
                                    >
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HighlightsSection;