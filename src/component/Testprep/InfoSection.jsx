import React from "react";
import image from "../../assets/images/infosection.png"

const InfoSection = ({
  image,
  title,
  highlight,
  description = [],
  reverse = false,
}) => {
  return (
    <section className="info-section">
      <div className={`info-container ${reverse ? "reverse" : ""}`}>
        <div className="info-image-box">
          <img src={image} alt={title} className="info-image" />
        </div>

        <div className="info-content">
          <h2>
            {title} <span>{highlight}</span>
          </h2>

          {description.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;