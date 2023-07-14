import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { FadeLoader } from "react-spinners/";

const objetoLoader = {
  display: "block",
  margin: "100 auto",
  borderColor: "red",
};

const ItemDetailContainer = () => {
  const [productSelect, setProductSelect] = useState({});

  const { agregarAlCarrito, getTotalQuantityById } = useContext(CartContext);

  const { id } = useParams();

  const cantidad = getTotalQuantityById(id);
  console.log("la cantidad es:", cantidad);

  useEffect(() => {
    let productFind = products.find((product) => product.id == id);
    const getProduct = new Promise((res) => {
      setTimeout(() => {
        res(productFind);
      }, 1000);
    });
    getProduct
      .then((res) => setProductSelect(res))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      {productSelect.id ? (
        <ItemDetail
          cantidad={cantidad}
          productSelect={productSelect}
          agregarAlCarrito={agregarAlCarrito}
        />
      ) : (
        <div
          style={{
            marginTop: 300,
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <FadeLoader
            cssOverride={objetoLoader}
            height={100}
            width={20}
            color="#36d7b7"
          />
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
