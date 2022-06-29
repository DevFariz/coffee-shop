import "./CoffeeItems.css";
import CoffeeImg from "../../images/coffee-item-img.jpg";

const CoffeeItems = () => {
  return (
    <section>
      <div className="container">
        <ul className="coffee-items">
          <li className="coffee-item">
            <img
              src={CoffeeImg}
              alt="AROMISTICO Coffee 1 kg"
              className="coffee-item__img"
            />
            <h3 className="coffee-item__name">AROMISTICO Coffee 1 kg</h3>
            <p className="coffee-item__loc">Brazil</p>
            <p className="coffee-item__price">6.99$</p>
          </li>
          <li className="coffee-item">
            <img
              src={CoffeeImg}
              alt="AROMISTICO Coffee 1 kg"
              className="coffee-item__img"
            />
            <h3 className="coffee-item__name">AROMISTICO Coffee 1 kg</h3>
            <p className="coffee-item__loc">Brazil</p>
            <p className="coffee-item__price">6.99$</p>
          </li>
          <li className="coffee-item">
            <img
              src={CoffeeImg}
              alt="AROMISTICO Coffee 1 kg"
              className="coffee-item__img"
            />
            <h3 className="coffee-item__name">AROMISTICO Coffee 1 kg</h3>
            <p className="coffee-item__loc">Brazil</p>
            <p className="coffee-item__price">6.99$</p>
          </li>
          <li className="coffee-item">
            <img
              src={CoffeeImg}
              alt="AROMISTICO Coffee 1 kg"
              className="coffee-item__img"
            />
            <h3 className="coffee-item__name">AROMISTICO Coffee 1 kg</h3>
            <p className="coffee-item__loc">Brazil</p>
            <p className="coffee-item__price">6.99$</p>
          </li>
          <li className="coffee-item">
            <img
              src={CoffeeImg}
              alt="AROMISTICO Coffee 1 kg"
              className="coffee-item__img"
            />
            <h3 className="coffee-item__name">AROMISTICO Coffee 1 kg</h3>
            <p className="coffee-item__loc">Brazil</p>
            <p className="coffee-item__price">6.99$</p>
          </li>
          <li className="coffee-item">
            <img
              src={CoffeeImg}
              alt="AROMISTICO Coffee 1 kg"
              className="coffee-item__img"
            />
            <h3 className="coffee-item__name">AROMISTICO Coffee 1 kg</h3>
            <p className="coffee-item__loc">Brazil</p>
            <p className="coffee-item__price">6.99$</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CoffeeItems;
