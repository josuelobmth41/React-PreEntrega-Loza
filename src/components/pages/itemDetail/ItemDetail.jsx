import { ItemCount } from "../../ItemCount/ItemCount";

const ItemDetail = ({ productSelect }) => {
  const onAdd = (cantidad) => {
    let data = {
      ...productSelect,
      quantity: cantidad,
    };
    console.log(data);
  };
  return (
    <>
      <div>
        <h1>{productSelect.title}</h1>
        <img src={productSelect.img} alt="" />
        <br />
        <strong>{productSelect.price}</strong>
      </div>
      <ItemCount stock={productSelect.stock} initial={1} onAdd={onAdd} />
    </>
  );
};
export default ItemDetail;
