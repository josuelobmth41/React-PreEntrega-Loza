import { ItemCount } from "../../ItemCount/ItemCount";
import Swal from "sweetalert2";

const ItemDetail = ({ productSelect, agregarAlCarrito, cantidad }) => {
  const onAdd = (cantidad) => {
    let data = {
      ...productSelect,
      quantity: cantidad,
    };
    agregarAlCarrito(data);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto agregado correctamente",
      showConfirmButton: false,
      timer: 1200,
    });
  };
  return (
    <>
      <div style={{ marginTop: 50 }}>
        <img src={productSelect.img} alt="" />
        <h1>{productSelect.title}</h1>
        <br />
        <strong>{productSelect.price}</strong>
      </div>
      {productSelect.stock > 0 ? (
        <ItemCount
          stock={productSelect.stock}
          initial={cantidad}
          onAdd={onAdd}
        />
      ) : (
        <h3>no hay stock</h3>
      )}
    </>
  );
};
export default ItemDetail;
