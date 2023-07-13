// import { Container } from "@mui/material";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import { menuRoutes } from "./routes/menuRoutes";
import CartContextProvider from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            {menuRoutes.map(({ id, path, Element }) => (
              <Route key={id} path={path} element={<Element />} />
            ))}
          </Route>
        </Routes>
      </CartContextProvider>
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
