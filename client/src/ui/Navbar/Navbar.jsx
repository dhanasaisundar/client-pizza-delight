import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useSelector } from "react-redux";
import { getUser } from "../../features/user/userSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

function Navbar() {
  const [navList, setNavList] = useState(false);
  const user = useSelector(getUser);
  console.log(user);
  const userJwtToken = user.jwtToken;
  const login = user.email === "" ? "Login" : user.username;
  const to = userJwtToken === "" ? "/login" : "/account";

  function handleHamBtn() {
    setNavList((prevState) => !prevState);
  }

  return (
    <div className={styles.navContainer}>
      <h1>🍕 The Pizza Delight</h1>
      <ul className={styles.navContainerul}>
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

      <button className={styles.hamBtn} onClick={handleHamBtn}>
        <GiHamburgerMenu className={styles.hamburger} />
      </button>
      {navList && (
        <ul className={styles.hamNavs}>
          <NavLink className={styles.hamNavLinks} to="/">
            Home
          </NavLink>
          <NavLink className={styles.hamNavLinks} to="/pizzas">
            Pizzas
          </NavLink>
          <NavLink className={styles.hamNavLinks} to="/drinks">
            Drinks
          </NavLink>
          <NavLink className={styles.hamNavLinks} to="/cart">
            Cart
          </NavLink>
          <NavLink className={styles.hamNavLinks} to={to}>
            {login}
          </NavLink>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
