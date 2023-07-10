import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [productSelect, setProductSelect] = useState({});

  const { id } = useParams();

  useEffect(() => {
    let productFind = products.find((product) => product.id == id);
    const getProduct = new Promise((res) => {
      res(productFind);
    });
    getProduct
      .then((res) => setProductSelect(res))
      .catch((err) => console.log(err));
  }, [id]);

  return <ItemDetail productSelect={productSelect} />;
};

export default ItemDetailContainer;
