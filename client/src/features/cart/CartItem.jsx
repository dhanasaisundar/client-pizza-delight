import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import DeleteCartItem from "./DeleteCartItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import {
  getCurrentDrinkQuantityById,
  getCurrentQuantityById,
} from "./cartSlice";
import styles from "./cart.module.css";

function CartItem({ item, category }) {
  const { name, quantity, totalPrice } = item;
  const type = category === "pizza" ? "pizza" : "drinks";
  const id = category === "pizza" ? item.pizzaId : item.drinkId;
  const cartQuantity = useSelector(getCurrentQuantityById(id));
  const currentDrinkQuantity = useSelector(getCurrentDrinkQuantityById(id));
  const result = category === "pizza" ? cartQuantity : currentDrinkQuantity;
  return (
    <li className={styles.cartItem}>
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity id={id} currentQuantity={result} type={type} />
        <DeleteCartItem id={id} type={type} />
      </div>
    </li>
  );
}

export default CartItem;
