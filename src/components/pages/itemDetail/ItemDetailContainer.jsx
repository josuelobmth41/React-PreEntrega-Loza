import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../productsMock";

const ItemDetailContainer = () => {
  const [productSelect, setProductSelect] = useState({});

  let id = 1;

  useEffect(() => {
    let productFind = products.find((product) => product.id === id);
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
