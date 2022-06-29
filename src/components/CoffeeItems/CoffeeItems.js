import "./CoffeeItems.css";
import CoffeeImg from "../../images/coffee-item-img.jpg";
import CoffeeItem from "../CoffeeItem/CoffeeItem";

const CoffeeItems = ({ data }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;

    return <CoffeeItem key={id} {...itemProps}/>;
  });

  return (
    <section>
      <div className="container">
        <ul className="coffee-items">
          {elements}
        </ul>
      </div>
    </section>
  );
};

export default CoffeeItems;
