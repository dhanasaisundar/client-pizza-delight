import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import { getUser, updateJwtToken } from "./userSlice";
import Button from "../../ui/Button/Button";
import styles from "./User.module.css";
import { clearCart } from "../cart/cartSlice";

function UserAccount() {
  const user = useSelector(getUser);
  console.log(user);
  const { name, password, phone_no, address, email } = user;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogoutbtn(e) {
    e.preventDefault();
    Cookies.remove("jwt_token");
    dispatch(updateJwtToken(""));
    dispatch(clearCart());
    localStorage.removeItem("user");
    navigate("/");
  }

  return (
    <div className={styles.accountFormContainer}>
      <h1>Your Account</h1>
      <p>🤵</p>
      <form onSubmit={handleLogoutbtn}>
        <div>
          <label htmlFor="username">Name</label>
          <input id="username" defaultValue={name} type="text" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" defaultValue={password} type="password" />
        </div>
        <div>
          <label htmlFor="phoneNo">Phone No</label>
          <input id="phoneNo" defaultValue={phone_no} type="tel" />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input id="address" defaultValue={address} type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" defaultValue={email} type="email" />
        </div>
        <Button type="submit">Logout</Button>
      </form>
    </div>
  );
}

export default UserAccount;
