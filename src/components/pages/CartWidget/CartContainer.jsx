import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { Button } from "@mui/material";

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
    <div style={{ marginLeft: 50, marginTop: 100 }}>
      <br />
      {cart.map((product) => {
        return (
          <div key={product.id}>
            <h1>{product.title}</h1>
            <img src={product.img} alt="" />
            <div>
              <h2>$ {product.price}</h2>
              <h2>Unidades : {product.quantity}</h2>
            </div>
            <Button variant="contained" onClick={() => removeById(product.id)}>
              Eliminar
            </Button>
          </div>
        );
      })}
      <div
        style={{
          display: "flex",
          marginLeft: 500,
          alignItems: "center",
          gap: 50,
        }}
      >
        <h2> Total : $ {total}</h2>
        <Link to="/checkout">
          <Button variant="contained" onClick={realizarCompra}>
            Finalizar Compra
          </Button>
        </Link>
        {cart.length > 0 && (
          <Button variant="contained" onClick={limpiar}>
            Limpiar Carrito
          </Button>
        )}
      </div>
    </div>
  );
};

export default CartContainer;
