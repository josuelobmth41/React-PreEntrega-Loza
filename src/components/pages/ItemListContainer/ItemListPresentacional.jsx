import ProductCard from "../../common/productCard/productCard";
import "./ItemListContainer.css";

const ItemListPresentacional = ({ items }) => {
  return (
    <div className="cards-container">
      {items.map((elemento) => {
        return <ProductCard key={elemento.id} elemento={elemento} />;
      })}
    </div>
  );
};

export default ItemListPresentacional;
