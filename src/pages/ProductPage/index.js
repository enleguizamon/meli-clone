import axios from "axios";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

function ProductPage() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, [])

  async function fetchData() {
    const data = await axios.get(`https://api.mercadolibre.com/items/${id}`);
    setProduct(data.data)
  }

  return (
    <>
    <img src={product.thumbnail} />
    <p>{product.title}</p>
    <p>$ {product.price}</p>
    </>
  )
}

export default ProductPage;