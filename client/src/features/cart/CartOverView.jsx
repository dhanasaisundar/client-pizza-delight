import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import {
  getCart,
  getDrinks,
  getTotalCartPrice,
  getTotalCartQuantity,
} from "./cartSlice";
import styles from "./cart.module.css";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const cart = useSelector(getCart);
  const drinksCart = useSelector(getDrinks);
  if (cart.length === 0 && drinksCart.length === 0) return null;
  return (
    <div className={styles.cartOverViewContainer}>
      <p className={styles.cartoverViewInfo}>
        <span> {totalCartQuantity} items</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
    </div>
  );
}

export default CartOverview;
