import { useDispatch, useSelector } from "react-redux";
import { addToCart, getCart, getCurrentQuantityById } from "../cart/cartSlice";
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button/Button";
import DeleteCartItem from "../cart/DeleteCartItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
import styles from "./MenuItem.module.css";
import Cookie from "js-cookie";
import { useNavigate } from "react-router-dom";

function MenuItem({ pizza }) {
  const { pizzaId, pizzaName, unitprice, ingredients, soldOut, imageUrl } =
    pizza;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector(getCart);
  const isItemPresentInCart = cart.filter(
    (item) => item.pizzaId === pizzaId
  ).length;
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));
  function handleCartBtn() {
    const token = Cookie.get("jwt_token");
    if (token === undefined) return navigate("/login");
    const newItem = {
      pizzaId,
      name: pizzaName,
      quantity: 1,
      unitprice,
      totalPrice: unitprice * 1,
    };
    dispatch(addToCart(newItem));
  }

  return (
    <li className={styles.pizzaItemContainer}>
      <img src={imageUrl} alt={pizzaName} className={styles.pizzaImage} />

      <div className={styles.pizzaInfo}>
        <h3>{pizzaName}</h3>
        <p className={styles.ingredients}>{ingredients.join(", ")}</p>
        <div className={styles.oprationalKeys}>
          {!soldOut ? <p>{formatCurrency(unitprice)}</p> : <p>Sold out</p>}
          {isItemPresentInCart ? (
            <div className={styles.btns}>
              <UpdateItemQuantity
                id={pizzaId}
                currentQuantity={currentQuantity}
                type="pizza"
              />
              <DeleteCartItem id={pizzaId} type="pizza" />
            </div>
          ) : (
            <Button type="small" onClick={handleCartBtn}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
