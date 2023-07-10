// import { Container } from "@mui/material";

import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";

import NavBar from "./components/layout/NavBar/NavBar";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContainer from "./components/pages/CartWidget/CartContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/ItemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/Carrito" element={<CartContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>

    // <>
    //   <Container sx={{ mt: 5 }}></Container>
    //   <NavBar />
    //   <ItemListContainer />
    //   <ItemDetailContainer />
    // </>
  );
}

export default App;
