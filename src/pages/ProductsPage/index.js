import Navbar from "../../components/Navbar";
import Items from "../../components/Items";
import { useState } from "react";
import "./style.scss";

function ProductsPage() {
  const [search, setSearch] = useState("")

  function handleCallback(inputValue) {
    setSearch(inputValue)
  }
  return (
    <div className="productPage">
      <Navbar handleCallback={handleCallback} />
      <Items search={search} />
    </div>
  );
}

export default ProductsPage;
