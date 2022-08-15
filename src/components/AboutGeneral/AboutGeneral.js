import "./AboutGeneral.css";
import "../../index.css";
import DecBlack from "../../images/dec-black.svg";

const AboutGeneral = ({ image, text1, text2, title }) => {
  return (
    <section className="about-general">
      <div className="container-sm">
        <div className="about-general-container">
          <img src={image} alt="about beans" className="about-general__img" />
          <div className="about-general-content">
            <h2 className="about-general__title">{title}</h2>
            <div className="dec-bl">
              <img src={DecBlack} alt="decoration" />
            </div>
            <p className="about-general__text">{text1}</p>
            <p className="about-general__text">{text2}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGeneral;
