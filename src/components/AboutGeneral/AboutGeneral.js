import "./AboutGeneral.css";
import "../../index.css";
import AboutBeans from "../../images/about-beans.jpg";
import DecBlack from "../../images/dec-black.svg";

const AboutGeneral = () => {
  return (
    <section className="about-general">
      <div className="container-sm">
        <div className="about-general-container">
          <img
            src={AboutBeans}
            alt="about beans"
            className="about-general__img"
          />
          <div className="about-general-content">
            <h2 className="about-general__title">About our beans</h2>
            <div className="dec-bl">
              <img src={DecBlack} alt="decoration" />
            </div>
            <p className="about-general__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible.
            </p>
            <p className="about-general__text">
              Afraid at highly months do things on at. Situation recommend
              objection do intention so questions. As greatly removed calling
              pleased improve an. Last ask him cold feel met spot shy want.
              Children me laughing we prospect answered followed. At it went is
              song that held help face.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGeneral;
