import React from "react";
import experience from "./data/experience.json";

const Experience = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "2rem",
    },
    itemsContainer: {
      width: "80%",
      maxWidth: "800px",
    },
    item: {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      padding: "1rem",
      borderRadius: "10px",
      marginBottom: "2rem",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    left: {
      flex: "1",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    img: {
      width: "200px",
      height: "200px",
      borderRadius: "50%",
      objectFit: "cover",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
    right: {
      flex: "2",
      textAlign: "left",
      paddingLeft: "1rem",
    },
    role: {
      fontSize: "1.5rem",
      color: "#fff",
    },
    dateLocation: {
      fontSize: "1rem",
      color: "yellowgreen",
    },
    experienceText: {
      fontSize: "1rem",
      color: "yellow",
      margin: "0.5rem 0",
    }
  };

  return (
    <div style={styles.container} id="experience">
      <h1>EXPERIENCE</h1>
      <div style={styles.itemsContainer}>
        {experience.map((data) => (
          <div
            key={data.id}
            className="ex-items my-5"
            data-aos="zoom-in"
            data-aos-duration="1000"
            style={styles.item}
          >
            <div style={styles.left}>
              <img src={`/assets/${data.imageSrc}`} alt="" style={styles.img} />
            </div>
            <div style={styles.right}>
              <h2 style={styles.role}>{data.role}</h2>
              <h4 style={styles.dateLocation}>
                {data.startDate} - {data.endDate} <span>{data.location}</span>
              </h4>
              <h5 style={styles.experienceText}>{data.experiences[0]}</h5>
              <h5 style={styles.experienceText}>{data.experiences[1]}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
