import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import CartOverview from "./CartOverView";
import CartItem from "../cart/CartItem";
import EmptyCart from "./EmptyCart";

import Button from "../../ui/Button/Button";

import styles from "./cart.module.css";
import { clearCart, getCart, getDrinks, getTotalCartPrice } from "./cartSlice";
import { createOrder } from "../../services/apiOrder";

function Cart() {
  const [withPriority, setWithPriority] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector(getCart);
  const drinksCart = useSelector(getDrinks);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = totalCartPrice * (20 / 100);
  const userName = useSelector((store) => store.user.name);

  function handleClearCart() {
    dispatch(clearCart());
  }
  function handlePizzaBtn() {
    navigate("/pizzas");
  }
  function handleDrinksBtn() {
    navigate("/drinks");
  }
  async function handlePlaceOrder() {
    const newOrder = {
      orderId: uuidv4(),
      cart,
      drinksCart,
      priority: withPriority,
      priorityPrice,
      orderPrice: totalCartPrice,
    };
    console.log(newOrder);
    const orderId = await createOrder(newOrder);
    if (orderId) {
      navigate(`/order/${orderId}`);
    }
  }
  return (
    <div>
      {cart.length > 0 || drinksCart.length > 0 ? (
        <div className={styles.cartContainer}>
          <div>
            <Button onClick={handlePizzaBtn}>PIZZAS</Button>
            <Button onClick={handleDrinksBtn}>DRINKS</Button>
          </div>
          <h2 className={styles.yourCart}>Your cart {userName}</h2>
          <ul className={styles.cartPizzaListContainer}>
            {cart.map((item) => (
              <CartItem key={item.pizzaId} item={item} category="pizza" />
            ))}
            {drinksCart.map((item) => (
              <CartItem key={item.drinkId} item={item} category="drinks" />
            ))}
          </ul>

          <CartOverview />
          <div className={styles.priorityContainer}>
            <input
              type="checkbox"
              name="priority"
              id="priority"
              value={withPriority}
              onChange={(e) => setWithPriority(e.target.checked)}
            />
            <label className="mb-3" htmlFor="priority">
              Want your Food with an hour? Check this box for Fast deliveries at
              20 percent of your total order!
            </label>
          </div>
          <div className="mt-6 space-x-2">
            <Button type="primary" onClick={handlePlaceOrder}>
              Place Order
            </Button>
            <Button type="secondary" onClick={handleClearCart}>
              Clear cart
            </Button>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}

export default Cart;
