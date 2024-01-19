import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import styles from "./Menu.module.css";
import Loader from "../../ui/Loader/Loader";
function Menu() {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://api-pizza-delight.onrender.com/pizzas");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPizzas(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={styles.pizzasUl}>
          {pizzas.map((pizza) => (
            <MenuItem pizza={pizza} key={pizza.pizzaId} />
          ))}
        </ul>
      )}
    </>
  );
}

export default Menu;
