import "./Footer.css";
import DecBlack from "../../images/dec-black.svg";
import Logo from "../../images/logo-black.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a href="#1" className="footer__logo">
            <img src={Logo} alt="logo" />
        </a>
        <nav className="nav">
          <ul className="footer__menu">
            <li className="footer__item">Coffee house</li>
            <li className="footer__item">Our coffee</li>
            <li className="footer__item">For your pleasure</li>
          </ul>
        </nav>
      </div>
      <div className="dec-bl">
        <img src={DecBlack} alt="decoration" />
      </div>
    </footer>
  );
};

export default Footer;
