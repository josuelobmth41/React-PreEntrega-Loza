import { useContext } from "react";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { Badge } from "@mui/material";

export const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  let totalItems = getTotalItems();

  return (
    <div>
      <Link to="/Carrito">
        <Badge badgeContent={totalItems} showZero color="primary">
          <BsCart2 size="30px" />
        </Badge>
      </Link>
    </div>
  );
};
