import React from "react";
import "../styles/Footer.css";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>© by <u>dhanushkumar.ms</u></p>
      <div className="footer-links">
        <a href="https://mail.google.com/mail/?view=cm&to=dhanushkumarms12@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope size={25} />
        </a>
        <a href="https://github.com/dhanushkumarms" target="_blank" rel="noopener noreferrer">
          <FaGithub size={25} />
        </a>
        <a href="https://www.linkedin.com/in/dhanushkumarms" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={25} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
