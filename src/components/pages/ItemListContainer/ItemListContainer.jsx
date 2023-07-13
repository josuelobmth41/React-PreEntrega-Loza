import { useEffect, useState } from "react";
import ItemListPresentacional from "./ItemListPresentacional";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";

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

  return <ItemListPresentacional items={items} />;
};

export default ItemListContainer;
