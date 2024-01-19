import Button from "../Button/Button";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  function handlePizzaBtn() {
    navigate("/pizzas");
  }
  function handleDrinksBtn() {
    navigate("/drinks");
  }
  return (
    <>
      <div className={styles.homeHeroContainer}>
        <div>
          <h1>From Oven to Table</h1>
          <p>Our Pizzas Are a Slice of Heaven!</p>
        </div>
        <div>
          <p>Check our menu😋</p>
          <div>
            <Button onClick={handlePizzaBtn}>PIZZAS</Button>
            <Button onClick={handleDrinksBtn}>DRINKS</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
