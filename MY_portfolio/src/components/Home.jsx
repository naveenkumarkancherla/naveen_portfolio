import React, { useEffect, useRef } from "react";
import pdf from "../pdf/resume.pdf";
import hero from "./data/hero.json";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Hi! Welcome to my profile",
        "I am Naveenkumar Kancherla",
        "I'm full stack developer",
        "DSA Problem Solver",
        "SDE Intern"
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      textAlign: 'center'
    }
  };

  const leftStyle = {
    flex: 1,
    '@media (max-width: 768px)': {
      marginBottom: '20px'
    }
  };

  const rightStyle = {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    '@media (max-width: 768px)': {
      marginTop: '20px'
    }
  };

  const imgStyle = {
    width: '100%',
    maxWidth: '400px',
    height: 'auto',
    borderRadius: '50%',
    '@media (max-width: 768px)': {
      maxWidth: '100%'
    }
  };

  const h1Style = {
    fontSize: '36px',
    '@media (max-width: 768px)': {
      fontSize: '28px'
    },
    '@media (max-width: 480px)': {
      fontSize: '24px'
    }
  };

  return (
    <>
      <style>
        {`
          @media (max-width: 768px) {
            .home {
              flex-direction: column;
              text-align: center;
            }
            .left {
              margin-bottom: 20px;
            }
            .right {
              margin-top: 20px;
            }
            .img img {
              max-width: 100%;
            }
          }
        `}
      </style>
      <div className="container home" id="home" style={containerStyle}>
        <div className="left" style={leftStyle} data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef} style={h1Style}></h1>
          <a
            href={pdf}
            download="Resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>
        <div className="right" style={rightStyle}>
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={`/assets/${hero.imgSrc}`} alt="hero" style={imgStyle} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
