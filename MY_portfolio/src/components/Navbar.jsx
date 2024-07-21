import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navBarStyle = {
    fontSize: "24px"
  };

  const naveenStyle = { 
    padding: "10px",
    animation: "pulse 20s infinite"

  };

  return (
    <>
      <style>
        {`
          @keyframes pulse {
            0% {
              box-shadow: 0 0 0 0 rgba(255, 255, 0, 0.7);
            }
            70% {
              box-shadow: 0 0 10px 10px rgba(255, 255, 0, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(255, 255, 0, 0);
            }
          }
          .nav_bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
          }
          .nav_items {
            margin-right: 15px;
            text-decoration: none;
            color: inherit;
          }
          .hamburger {
            display: none;
            flex-direction: column;
            cursor: pointer;
            position: absolute;
            right: 10px;
          }
          .hamburger div {
            width: 25px;
            height: 3px;
            background-color: white;
            margin: 4px 0;
          }
          .right {
            display: flex;
            flex-direction: row;
          }
          .menu {
            display: none;
          }
          @media (max-width: 768px) {
            .nav_bar {
              flex-direction: column;
              align-items: flex-start;
              position: relative;
            }
            .right {
              display: ${isMenuOpen ? 'flex' : 'none'};
              flex-direction: column;
              width: 100%;
            }
            .nav_items {
              margin-right: 0;
              margin-bottom: 10px;
              width: 100%;
              text-align: center;
            }
            .hamburger {
              display: flex;
            }
          }
          @media (max-width: 480px) {
            .nav_bar {
              font-size: 18px;
            }
            .nav_items {
              font-size: 18px;
            }
            .left.naveen {
              font-size: 20px; 
            }
          }
        `}
      </style>
      <div
        className="container nav_bar"
        data-aos="fade-down"
        data-aos-duration="1000"
        style={navBarStyle}
      >
        <div className="left naveen" style={naveenStyle}>
        ꧁༺ 𝓝𝓪𝓿𝓮𝓮𝓷𝓴𝓾𝓶𝓪𝓻 ༻꧂
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="right">
          <a href="#home" className="nav_items">
            Home
          </a>
          <a href="#experience" className="nav_items">
            Experience
          </a>
          <a href="#education" className="nav_items">
            Education
          </a>
          <a href="#skills" className="nav_items">
            Skills
          </a>
          <a href="#projects" className="nav_items">
            Projects
          </a>
          <a href="#achievements" className="nav_items">
            Achievements
          </a>
          <a href="#contact" className="nav_items">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
