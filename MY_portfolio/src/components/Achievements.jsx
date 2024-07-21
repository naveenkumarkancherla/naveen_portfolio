import React, { useState } from "react";
import achievements from "./data/achievements.json";

const Achievements = () => {
  const [hovered, setHovered] = useState(null);

  const containerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Times New Roman, Times, serif",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "40px",
    fontSize: "2.5em",
    color: "white",
  };

  const achievementStyle = {
    display: "flex",
    alignItems: "center",
    background: "black",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "background 1s, transform 1s ease-in-out, border-color 0.3s ease-in-out",
    marginBottom: "20px",
    border: "1.5px solid yellow",
  };

  const imageStyle = {
    width: "200px",
    height: "200px",
    objectFit: "cover",
    borderRadius: "20%",
    marginRight: "20px",
    transition: "border-color 0.3s ease-in-out",
    border: "3px solid",
  };

  const awardStyle = {
    fontSize: "1.8em",
    margin: "10px 0",
    color: "#fff",
  };

  const purposeStyle = {
    margin: "5px 0",
    fontSize: "1.2em",
    color: "#ddd",
  };

  const locationStyle = {
    ...purposeStyle,
    color: "#ffa000",
  };

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div style={containerStyle}  id="achievements">
      <h1 style={headerStyle}>ACHIEVEMENTS</h1>
      {achievements.map((data, index) => (
        <div
          key={data.id}
          className="achievement-item text-center my-5"
          data-aos="zoom-in"
          data-aos-duration="1000"
          style={{
            ...achievementStyle,
            background: hovered === index ? "grey" : "rgba(255, 0, 255, 0.1)",
          }}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={`/assets/${data.imageSrc}`}
            alt=""
            style={{
              ...imageStyle
            }}
            className="achievement-img"
          />
          <div>
            <h2 style={awardStyle}>{data.Award}</h2>
            <h4 style={purposeStyle}>{data.Purpose}</h4>
            <h5 style={locationStyle}>{data.location}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
