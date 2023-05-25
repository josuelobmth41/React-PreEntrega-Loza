import { Navbar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { CartWidget } from "./components/CartWidget/CartWidget";

function App() {
  return (
    <div>
      <Navbar />
      <CartWidget />
      <ItemListContainer />
    </div>
  );
}

export default App;
