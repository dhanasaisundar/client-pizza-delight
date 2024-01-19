import { useEffect, useState } from "react";
import DrinkItem from "./DrinkItem";
import styles from "./Drinks.module.css";
import Loader from "../../ui/Loader/Loader";

function Drinks() {
  const [drinks, setDrinks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(function () {
    async function fetchDrinks() {
      setIsLoading(true);
      const APIURL = "https://api-pizza-delight.onrender.com/drinks";
      const options = {
        method: "GET",
      };
      const response = await fetch(APIURL, options);
      const data = await response.json();
      setDrinks(data);
      setIsLoading(false);
    }
    fetchDrinks();
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={styles.drinksContainer}>
          {drinks.map((drink) => (
            <DrinkItem drink={drink} key={drink.drinkId} />
          ))}
        </ul>
      )}
    </>
  );
}

export default Drinks;
