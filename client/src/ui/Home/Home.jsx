// import Button from "../Button/Button";
import Banner from "../Banner/Banner";
import Chef from "../Chef/Chef";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import styles from "./Home.module.css";
// import { useNavigate } from "react-router-dom";

function Home() {
  // const navigate = useNavigate();
  // function handlePizzaBtn() {
  //   navigate("/pizzas");
  // }
  // function handleDrinksBtn() {
  //   navigate("/drinks");
  // }
  return (
    <div className={styles.homeContainer}>
      <Hero />
      <Banner />
      <Chef />
      <Footer />
    </div>
  );
}

export default Home;
