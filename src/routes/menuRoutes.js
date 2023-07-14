import ItemListContainer from "../components/pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/pages/itemDetail/ItemDetailContainer";
import CartContainer from "../components/pages/CartWidget/CartContainer";
import Form from "../components/pages/Form/Form";
import FormFormik from "../components/pages/formFormik/FormFormik";
export const menuRoutes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "categorias",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "ItemDetail",
    path: "/ItemDetail/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "carrito",
    path: "/Carrito",
    Element: CartContainer,
  },
  {
    id: "Form",
    path: "/Form",
    Element: Form,
  },
  {
    id: "formik",
    path: "/formik",
    Element: FormFormik,
  },
];
