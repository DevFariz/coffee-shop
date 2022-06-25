import "../../index.css";
import "./MainIntro.css";
import Dec from "../../images/dec.svg"

const MainIntro = () => {
  return (
    <section className="main-intro">
      <div className="container">
        <h1 className="main-intro__title">Everything You Love About Coffee</h1>
        <div className="dec">
          <img src={Dec} alt="decoration" className="dec__img" />
        </div>
        <p className="main-intro__text">We makes every day full of energy and taste</p>
        <p className="main-intro__text">Want to try our beans?</p>
        <button className="main-intro__btn">More</button>
      </div>
    </section>
  );
};

export default MainIntro;
