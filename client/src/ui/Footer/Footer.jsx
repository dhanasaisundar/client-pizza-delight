import styles from "./Footer.module.css";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
  FaStackOverflow,
} from "react-icons/fa";
/* eslint-disable react/jsx-key */
let followIcons = [
  <FaGithub />,
  <FaTwitter />,
  <FaLinkedin />,
  <FaWhatsapp />,
  <FaInstagram />,
  <FaStackOverflow />,
];

function Footer() {
  return (
    <footer>
      <hr />
      <h3>follow us</h3>
      <div>
        {followIcons.map((icon, index) => {
          return <span key={index}>{icon}</span>;
        })}
      </div>
      <p>Copyright &copy; 2024 pizzadelight.com All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
