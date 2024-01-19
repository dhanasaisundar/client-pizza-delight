import { formatCurrency } from "../../utils/helpers";
import styles from "./Order.module.css";

function OrderItem({ item }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className={styles.orderItemList}>
      <div className={styles.orderItemListContainer}>
        <p>
          <span className={styles.orderItemQuantity}>{quantity}&times;</span>
          <span className={styles.orderItemName}>{name}</span>
        </p>
        <p className={styles.orderTotalPrice}>{formatCurrency(totalPrice)}</p>
      </div>
      {/* <p className="text-sm italic font-semibold capitalize text-stone-800">
        {isLoadingIngredients ? "Loading ..." : ingredients?.join(", ")}
      </p> */}
    </li>
  );
}

export default OrderItem;
