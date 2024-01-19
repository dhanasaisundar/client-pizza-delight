import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useSelector } from "react-redux";
import { getUser } from "../../features/user/userSlice";

function Navbar() {
  const user = useSelector(getUser);
  const userJwtToken = user.jwtToken;
  const login = userJwtToken === "" ? "Login" : user.name;
  const to = userJwtToken === "" ? "/login" : "/account";

  return (
    <div className={styles.navContainer}>
      <h1>🍕 The Pizza Delight</h1>
      <ul>
        <NavLink className={styles.navlink} to="/">
          Home
        </NavLink>
        <NavLink className={styles.navlink} to="/pizzas">
          Pizzas
        </NavLink>
        <NavLink className={styles.navlink} to="/drinks">
          Drinks
        </NavLink>
        <NavLink className={styles.navlink} to="/cart">
          Cart
        </NavLink>
        <NavLink className={styles.navlink} to={to}>
          🤵🏻 {login}
        </NavLink>
      </ul>
    </div>
  );
}

export default Navbar;
