import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

import { getUser, updateUser, updateJwtToken } from "./userSlice";
import Button from "../../ui/Button/Button";
import styles from "./User.module.css";
import { useState } from "react";
import apiUpdateUser from "../../services/apiUpdateUser";

function UserAccount() {
  const user = useSelector(getUser);
  const { userId, username, phoneNo, address, email } = user;
  const [nameMod, setNameMod] = useState(username);
  const [phoneNoMod, setPhoneNoMod] = useState(phoneNo);
  const [addressMod, setAddressMod] = useState(address);
  const [emailMod, setEmailMod] = useState(email);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogoutbtn(e) {
    e.preventDefault();
    Cookies.remove("jwt_token");
    dispatch(updateJwtToken(""));
    dispatch(
      updateUser({
        userId: null,
        username: "Guest",
        phoneNo: 0,
        address: "",
        email: "",
        jwtToken: "",
      })
    );
    localStorage.removeItem("user");
    navigate("/");
  }

  async function handleSaveChanges() {
    const userInfo = {
      userId,
      username: nameMod,
      phoneNo: phoneNoMod,
      address: addressMod,
      email: emailMod,
    };
    dispatch(updateUser(userInfo));
    await apiUpdateUser(userInfo);
    localStorage.removeItem("user");
    localStorage.setItem("user", JSON.stringify(userInfo));
    toast.success("Changes saved");
  }

  return (
    <div className={styles.accountFormContainer}>
      <h1>Your Account</h1>
      <p>🤵</p>
      <form onSubmit={handleLogoutbtn}>
        <div>
          <label htmlFor="username">Name</label>
          <input
            id="username"
            defaultValue={nameMod}
            type="text"
            onChange={(e) => setNameMod(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phoneNo">Phone No</label>
          <input
            id="phoneNo"
            defaultValue={phoneNoMod}
            type="tel"
            onChange={(e) => setPhoneNoMod(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            id="address"
            defaultValue={addressMod}
            type="text"
            onChange={(e) => setAddressMod(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            defaultValue={emailMod}
            type="email"
            onChange={(e) => setEmailMod(e.target.value)}
          />
        </div>
        <div>
          <Button type="submit">Logout</Button>
          <Button type="button" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
}

export default UserAccount;
