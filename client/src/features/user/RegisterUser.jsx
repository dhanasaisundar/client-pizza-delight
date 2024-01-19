import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { createUser } from "../../services/apiUser";
import { updateName } from "./userSlice";

import Button from "../../ui/Button/Button";
import styles from "./User.module.css";

function CreateUser() {
  const [username, setUsername] = useState("");
  const [address, setAdress] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!username && !password) return;
    const userId = await createUser(
      username,
      password,
      phoneNo,
      address,
      email
    );
    if (userId) {
      const userpayload = {
        userId,
        username,
        password,
        phoneNo,
        address,
        email,
      };
      dispatch(updateName(userpayload));
      navigate("/login");
    }
  }

  return (
    <div className={styles.userFormContainer}>
      <h1>Hi there 👋, please fill up this form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Name</label>
        <input
          id="username"
          placeholder="Enter your name"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="address">Address</label>
        <input
          id="address"
          placeholder="Enter your address"
          type="text"
          value={address}
          onChange={(e) => setAdress(e.target.value)}
        />
        <label htmlFor="password">Create Password</label>
        <input
          id="password"
          placeholder="Create your password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="phoneNo">Phone Number</label>
        <input
          id="phoneNo"
          placeholder="Enter your phone no."
          type="number"
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default CreateUser;
