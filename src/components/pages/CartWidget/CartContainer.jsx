import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const CartContainer = () => {
  // const navigate = useNavigate();

  // const realizarCompra = () => {
  //   console.log("se realizo la compra");
  //   navigate("/");
  // };

  const { cart } = useContext(CartContext);
  console.log(cart);

  return (
    <div>
      <h1 style={{ marginTop: 100 }}>
        Carrito en Proceso... Disculpe las molestias
      </h1>
      {/* <button onClick={realizarCompra}>Comprar</button> */}
    </div>
  );
};

export default CartContainer;
