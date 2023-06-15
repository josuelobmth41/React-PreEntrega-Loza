import ProductCard from "../../common/productCard/productCard";

const ItemListPresentacional = ({ items }) => {
  return (
    <div>
      <h1 style={{ marginTop: 100 }}>aca van los productos</h1>
      {items.map((elemento) => {
        return <ProductCard key={elemento} elemento={elemento} />;
      })}
    </div>
  );
};

export default ItemListPresentacional;
