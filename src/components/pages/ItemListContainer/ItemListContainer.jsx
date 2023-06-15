import { useEffect, useState } from "react";
import ItemListPresentacional from "./ItemListPresentacional";
import { products } from "../../../productsMock";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const resolucion = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });

    resolucion
      .then((respuesta) => {
        setItems(respuesta);
      })
      .catch((rechazo) => {
        console.log(rechazo);
      });
  }, []);

  return <ItemListPresentacional items={items} />;
};

export default ItemListContainer;
