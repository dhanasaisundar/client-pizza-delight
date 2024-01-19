import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import {
  addTodrinksCart,
  getCurrentDrinkQuantityById,
  getDrinks,
} from "../cart/cartSlice";
import Button from "../../ui/Button/Button";
import DeleteCartItem from "../cart/DeleteCartItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
import styles from "./DrinkItem.module.css";
import Cookie from "js-cookie";
import { useNavigate } from "react-router-dom";

function DrinkItem({ drink }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { drinkId, name, unitprice } = drink;
  const drinksCart = useSelector(getDrinks);
  const isDrinkPresentInCart = drinksCart.filter(
    (eachDrink) => eachDrink.drinkId === drinkId
  ).length;
  const drinksCurrentQuantity = useSelector(
    getCurrentDrinkQuantityById(drinkId)
  );
  function handleCartBtn() {
    const token = Cookie.get("jwt_token");
    if (token === undefined) return navigate("/login");

    const cartDrink = {
      drinkId,
      name,
      unitprice,
      quantity: 1,
      totalPrice: 1 * unitprice,
    };
    dispatch(addTodrinksCart(cartDrink));
  }
  return (
    <li className={styles.drinkContainer}>
      <img src={drink.imageUrl} className={styles.drinkImage} />
      <div className={styles.drinkInfo}>
        <div className={styles.drinkNameQuantiy}>
          <h3>{name}</h3>
          <p>{drink.quantity}</p>
        </div>
        <div className={styles.oprationalKeys}>
          <p>{formatCurrency(unitprice)}</p>
          {isDrinkPresentInCart ? (
            <div className={styles.btns}>
              <UpdateItemQuantity
                id={drinkId}
                currentQuantity={drinksCurrentQuantity}
                type="drinks"
              />
              <DeleteCartItem id={drinkId} type="drinks" />
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

export default DrinkItem;
