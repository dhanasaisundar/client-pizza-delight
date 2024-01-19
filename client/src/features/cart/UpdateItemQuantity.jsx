import { useDispatch } from "react-redux";
import Button from "../../ui/Button/Button";
import styles from "./cart.module.css";
import {
  decreaseItemQuantityInCart,
  decreaseItemQuantityInDrinksCart,
  increaseItemQuantityInCart,
  increaseItemQuantityInDrinksCart,
} from "./cartSlice";

function UpdateItemQuantity({ id, currentQuantity, type }) {
  const dispatch = useDispatch();

  function increaseQuantity() {
    if (type === "pizza") {
      dispatch(increaseItemQuantityInCart(id));
    } else if (type === "drinks") {
      dispatch(increaseItemQuantityInDrinksCart(id));
    }
  }

  function decreaseQuantity() {
    if (type === "pizza") {
      dispatch(decreaseItemQuantityInCart(id));
    } else if (type === "drinks") {
      dispatch(decreaseItemQuantityInDrinksCart(id));
    }
  }

  return (
    <div className={styles.updateContollersContainer}>
      <Button type="rounded" onClick={decreaseQuantity}>
        -
      </Button>
      <span className="text-sm">{currentQuantity}</span>
      <Button type="rounded" onClick={increaseQuantity}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
