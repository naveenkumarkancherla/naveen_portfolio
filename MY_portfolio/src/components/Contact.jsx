import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail, SiLeetcode } from "react-icons/si";
import { AiOutlineProfile } from "react-icons/ai";

const Contact = () => {
  return (
    <>
      <style>
        {`
          @keyframes backgroundChange {
            0% {
              background-color: #99ff99;
            }
            25% {
              background-color: black;
            }
            50% {
              background-color: yellow;
            }
            75% {
              background-color: orange;
            }
            100% {
              background-color: #ff9999;
            }
          }

          .container.contact .contact-icon {
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-wrap: wrap;
          }
          .container.contact .items {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-decoration: none;
            color: inherit;
            margin: 10px;
          }
          .container.contact .icon-wrapper {
            padding: 10px;
            border-radius: 50%;
            animation: backgroundChange 5s infinite;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .container.contact .icons {
            font-size: 3rem;
          }
          .container.contact .items span {
            margin-top: 1.5rem;
            font-size: 1rem;
          }
        `}
      </style>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://kancherlanaveenkum.wixsite.com/naveen2003" target="_blank" className="items">
            <div className="icon-wrapper">
              <AiOutlineProfile className="icons" />
            </div>
            <span>Portfolio</span>
          </a>
          <a href="https://www.linkedin.com/in/naveenkumar-kancherla-71585a1b5" target="_blank" className="items">
            <div className="icon-wrapper">
              <CiLinkedin className="icons" />
            </div>
            <span>LinkedIn</span>
          </a>
          <a href="https://leetcode.com/u/kancherla191099" target="_blank" className="items">
            <div className="icon-wrapper">
              <SiLeetcode className="icons" />
            </div>
            <span>LeetCode</span>
          </a>
          <a href="https://github.com/naveenkumarkancherla" target="_blank" className="items">
            <div className="icon-wrapper">
              <FaGithubSquare className="icons" />
            </div>
            <span>GitHub</span>
          </a>
          <a
            href="mailto:kancherlanaveenkumar574@gmail.com"
            target="_blank"
            className="items"
          >
            <div className="icon-wrapper">
              <SiGmail className="icons" />
            </div>
            <span>Email</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
