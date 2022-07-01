import "./CoffeeItem.css";

const CoffeeItem = ({name, image, location, price}) => {
    return (
        <li className="coffee-item" >
        <img
          src={image}
          alt="AROMISTICO Coffee 1 kg"
          className="coffee-item__img"
        />
        <h3 className="coffee-item__name">{name}</h3>
        <p className="coffee-item__loc">{location}</p>
        <p className="coffee-item__price">{price}$</p>
      </li>
    )
}

export default CoffeeItem;