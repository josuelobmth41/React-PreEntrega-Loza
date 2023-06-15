import { Container } from "@mui/material";
import NavBar from "./components/layout/NavBar/NavBar";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Container sx={{ mt: 5 }}></Container>
      <NavBar />
      <ItemListContainer />
    </>
  );
}

export default App;
