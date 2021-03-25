import Navbar from "../../components/Navbar";
import Items from "../../components/Items";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./style.scss";

function ProductsPage() {
  const [search, setSearch] = useState("");
  const { site } = useParams();

  function handleCallback(inputValue) {
    setSearch(inputValue)
  }
  return (
    <div className="productPage">
      <Navbar handleCallback={handleCallback} />
      <Items search={search} site={site} />
    </div>
  );
}

export default ProductsPage;
