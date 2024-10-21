import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";



const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          

        <a href="https://www.linkedin.com/in/aryan-malik-12bb6b231" target="_main" className="icon"><FaLinkedin /></a>
          <a href="https://github.com/aryanmalik28" target="_main" className="icon"><FaGithub /> </a>
          <a href="https://www.facebook.com/share/Dhy5XXfPbFgX29db/?mibextid=qi2Omg" target="_main" className="icon"><FaFacebook /></a>
          <a href="https://www.instagram.com/kn0wnasmalik/?igsh=czlzemQ0d3ZtOHky" target="_main" className="icon"><FaSquareInstagram /></a>
          <a href="mailto:aryanmalik282003@gmail.com" target="_main" className="icon"><MdEmail /> </a>
        </div>
        {/* <div className="footer-copyright">
          &copy; {currentYear} SUKOON. All rights reserved.
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
