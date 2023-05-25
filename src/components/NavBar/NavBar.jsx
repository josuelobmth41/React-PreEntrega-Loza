import styles from "./NavBar.module.css";
import { BsCart2 } from "react-icons/bs";

export const Navbar = () => {
  return (
    <div className={styles.NavBar}>
      <h1>Canela PetShop</h1>
      <div>
        <button>Inicio</button>
        <button>Productos</button>
        <button>Contacto</button>
        <button>Sobre Nosotros</button>
      </div>
      <BsCart2 size={"2em"} color="blue" /> <span>0</span>
    </div>
  );
};
