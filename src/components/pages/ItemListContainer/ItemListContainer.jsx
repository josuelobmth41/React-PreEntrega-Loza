import { useEffect, useState } from "react";
import ItemListPresentacional from "./ItemListPresentacional";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import { FadeLoader } from "react-spinners/";

const objetoLoader = {
  display: "block",
  margin: "100 auto",
  borderColor: "red",
};

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    let productosFiltrados = products.filter(
      (e) => e.category === categoryName
    );
    const resolucion = new Promise((resolve) => {
      setTimeout(() => {
        resolve(categoryName ? productosFiltrados : products);
      }, 1000);
    });

    resolucion
      .then((respuesta) => {
        setItems(respuesta);
      })
      .catch((rechazo) => {
        console.log(rechazo);
      });
  }, [categoryName]);

  if (items.length === 0) {
    return (
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
    );
  }

  return <ItemListPresentacional items={items} />;
};

export default ItemListContainer;
