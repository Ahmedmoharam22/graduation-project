import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../../rtx/slices/cartSlice";

function CartItem({ product }) {
  const dispatch = useDispatch();

  function increaseQuantityHandler() {
    dispatch(increaseQuantity(product.id));
  }

  function decreaseQuantityHandler() {
    dispatch(decreaseQuantity(product.id));
  }

  function removeQuantityHandler() {
    dispatch(removeItem(product.id));
  }
  return (
    <tr className="cart-product">
      <td>
        <div className="d-flex gap-3 align-items-center">
          <img src={product.thumbnail} className="cart-product-img" alt="" />
          <h5>{product.title}</h5>
        </div>
      </td>
      <td>
        <div className="cart-product-amount">
          <span
            className="change-amount change-amount-inc"
            onClick={increaseQuantityHandler}
          >
            +
          </span>
          <span className="quantity">{product.quantity}</span>
          <span
            className="change-amount change-amount-dec"
            onClick={decreaseQuantityHandler}
          >
            -
          </span>
        </div>
      </td>
      <td>
        <div className="d-flex flex-column justify-content-end text-end mb-2  align-items-end">
          <span className="fw-bolder fs-4">${product.price * product.quantity}</span>
          <span className="remove-product" onClick={removeQuantityHandler}>
            Remove
          </span>
        </div>
      </td>
    </tr>
  );
}

export default CartItem;
