import { useState, useEffect, StrictMode } from "react";
import axios from "axios";
import Item from "../Item";
import "./style.scss";

function Items(props) {
  const [products, setProducts] = useState([]);
  const { site } = props;

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await axios.get(
      `https://api.mercadolibre.com/sites/${site}/search?q=mochila&limit=8`
    );
    setProducts(data.data.results);
  }

  return (
    <div className="itemsContainer">
      {products
        .filter((product) => {
          return product.title
            .toLowerCase()
            .includes(props.search.toLowerCase());
        })
        .map((product, key) => {
          return <Item product={product} key={product.id ? product.id : key} />;
        })}
    </div>
  );
}

export default Items;
