import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";

const CartContainer = () => {
  const navigate = useNavigate();

  const realizarCompra = () => {
    console.log("se realizo la compra");
    navigate("/");
  };

  const { cart, cleanCart, removeById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  const limpiar = () => {
    Swal.fire({
      title: "Queres vaciar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si",
      denyButtonText: `No, cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        cleanCart();
        Swal.fire("Carrito vacio", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Cancelado", "", "info");
      }
    });
  };
  return (
    <div style={{ marginTop: 100 }}>
      <h2> total es : {total}</h2>
      <button onClick={limpiar}>Limpiar Carrito</button>
      <br />
      {cart.map((product) => {
        return (
          <div key={product.id}>
            <h1>{product.title}</h1>
            <h2>{product.price}</h2>
            <h2>{product.quantity}</h2>
            <button onClick={() => removeById(product.id)}>eliminar</button>
          </div>
        );
      })}
      <button onClick={realizarCompra}>Comprar</button>
    </div>
  );
};

export default CartContainer;
