import React from "react";
import education from "./data/education.json";

const Education = () => {
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

  const exItemStyle = {
    backgroundColor: "black",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "background 1s, transform 1s ease-in-out",
    marginBottom: "20px"
  };

  const exItemHoverStyle = {
    ...exItemStyle,
    background: "rgba(255, 0, 255, 0.1)",
    transform: "translateY(-10px)"
  };

  const rightSectionStyle = {
    textAlign: "left"
  };

  const collegeStyle = {
    fontSize: "1.8em",
    margin: "10px 0",
    color: "white"
  };

  const detailStyle = {
    margin: "5px 0"
  };

  const detailSpanStyle = {
    fontSize: "1.2em"
  };

  const studyStyle = {
    ...detailSpanStyle,
    color: "#4caf50"
  };

  const locationStyle = {
    ...detailSpanStyle,
    color: "#ffa000"
  };
  // Mobile-first styles with media queries
  const mediaQueryStyles = `
    @media (max-width: 768px) {
      .ex-items {
        padding: 10px;
      }

      .college {
        font-size: 1.2em;
      }

      .detail-span {
        font-size: 1em;
      }
    }
  `;

  return (
    <div style={containerStyle} id="education">
       <style>{mediaQueryStyles}</style>
      <h1 style={headerStyle}>EDUCATION</h1>
      {education.map((data) => (
        <div
          key={data.id}
          className="ex-items text-center my-5"
          data-aos="zoom-in"
          data-aos-duration="1000"
          style={exItemStyle}
        >
          <div style={rightSectionStyle}>
            <h2 className="college" style={collegeStyle}>{data.college}</h2>
            <h4 style={detailStyle}>
              <span className="detail-span" style={studyStyle}>{data.study}</span>
            </h4>
            <h5 style={detailStyle}>
              <span className="detail-span" style={studyStyle}>{data.startDate} {data.endDate}</span>
            </h5>
            <h5 style={detailStyle}>
              <span className="detail-span" style={locationStyle}>{data.location}</span>
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
