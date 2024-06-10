import React from "react";
import achievements from "./data/achievements.json";

const Achievements = () => {
  const containerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px"
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "40px",
    fontSize: "2.5em",
    color: "white"
  };

  const achievementStyle = {
    display: "flex",
    alignItems: "center",
    background: "black",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
    transition: "transform 0.3s ease-in-out, background 0.3s ease-in-out"
  };

  const imageStyle = {
    width: "200px",
    height: "200px",
    objectFit: "cover",
    borderRadius: "20%",
    marginRight: "20px",
    transition: "border-color 0.3s ease-in-out" 
  };

  const awardStyle = {
    fontSize: "1.8em",
    margin: "10px 0",
    color: "#444"
  };

  const purposeStyle = {
    margin: "5px 0",
    fontSize: "1.2em"
  };

  const locationStyle = {
    ...purposeStyle,
    color: "#ffa000"
  };

  return (
    <div style={containerStyle} id="achievements">
      <h1 style={headerStyle}>ACHIEVEMENTS</h1>
      {achievements.map((data) => (
        <div
          key={data.id}
          className="achievement-item text-center my-5"
          data-aos="zoom-in"
          data-aos-duration="1000"
          style={achievementStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-10px)";
            e.currentTarget.style.background = "#00FF00"; 
            e.currentTarget.style.borderWidth = "3px"; 
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.background = "black"; 
            e.currentTarget.style.borderWidth = "1px";
          }}
        >
          <img
            src={`/assets/${data.imageSrc}`}
            alt=""
            style={imageStyle}
            className="achievement-img"
          />
          <div>
            <h2 style={awardStyle}>{data.Award}</h2>
            <h4 style={purposeStyle}>{data.Purpose}</h4>
            <h5 style={locationStyle}>{data.location}</h5>
          </div>
        </div>
      ))}
      <style>{`
        .achievement-img {
          animation: borderAnimation 0.3s ease-in-out forwards;
        }

        @keyframes borderAnimation {
          0% {
            border-color: transparent;
          }
          100% {
            border-color: #00FF00;
          }
        }
      `}</style>
    </div>
  );
};

export default Achievements;
