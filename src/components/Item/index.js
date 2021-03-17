import { Link } from "react-router-dom";
import "./style.scss";

function Item(props) {
  const { title, price, thumbnail } = props.product;
  return (
    <>
    <Link to="/product/:id">
    <div className="itemContainer">
      <img src={thumbnail} className="itemImg"/>
      <hr className="line" id="line"/>
      <p className="itemPrice">${price}</p>
      <div className="titleContainer">
      <p className="itemTitle">{title}</p>
      </div>
    </div>
    </Link>
    </>
  );
}

export default Item;
