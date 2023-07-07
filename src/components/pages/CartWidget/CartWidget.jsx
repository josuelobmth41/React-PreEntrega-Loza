import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  return (
    <div>
      <button>
        <Link to="/Carrito">
          <BsCart2 fontSize={"2rem"} /> 0
        </Link>
      </button>
    </div>
  );
};
