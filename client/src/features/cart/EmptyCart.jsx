import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button/Button";
import styles from "./cart.module.css";

function EmptyCart() {
  const navigate = useNavigate();
  function handlePizzaBtn() {
    navigate("/pizzas");
  }
  function handleDrinksBtn() {
    navigate("/drinks");
  }
  return (
    <div className={styles.emptyCartContainer}>
      <h2>Hungry for something special?</h2>
      <h4>Your cart is craving flavorful treasures—let the feast begin!😋</h4>
      <div>
        <Button onClick={handlePizzaBtn}>PIZZAS</Button>
        <Button onClick={handleDrinksBtn}>DRINKS</Button>
      </div>
    </div>
  );
}

export default EmptyCart;
