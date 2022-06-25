import "../../index.css";
import "./Header.css";
import Logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container-bg">
        <div className="header-container">
          <a href="#2" className="logo__link">
            <img src={Logo} alt="logo" />
          </a>
          <nav className="nav">
            <ul className="menu">
              <li className="menu__item">Coffee house</li>
              <li className="menu__item">Our coffee</li>
              <li className="menu__item">For your pleasure</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
