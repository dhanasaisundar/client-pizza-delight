import { useState } from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import styles from "./Login.module.css";
import LinkButton from "../Button/LinkButton";
import { useDispatch } from "react-redux";
import { updateJwtToken, updateName } from "../../features/user/userSlice";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleLoginSubmit(e) {
    e.preventDefault();
    if (userName === "" || password === "") {
      setError("Invalid username or password");
      return null;
    }

    const credentilas = {
      username: userName,
      password,
    };
    const APIURL = "https://api-pizza-delight.onrender.com/login";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentilas),
    };
    const response = await fetch(APIURL, options);
    const data = await response.json();
    Cookies.set("jwt_token", data.jwtToken);
    dispatch(updateName(data.user));
    dispatch(updateJwtToken(data.jwtToken));
    localStorage.setItem("user", JSON.stringify(data.user));
    setError("");
    navigate("/");
  }
  function handleBackbtn() {
    navigate("/");
  }

  return (
    <div className={styles.loginContainer}>
      <div>
        <h1>🍕 The Pizza Delight</h1>
      </div>
      <form onSubmit={handleLoginSubmit} className={styles.formContainer}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={userName}
          placeholder="Enter your username here..."
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          placeholder="Enter your password here..."
          onChange={(e) => setPassword(e.target.value)}
        />
        {error !== "" && <p>* {error}</p>}
        <div className={styles.btnContainer}>
          <Button type="button" onClick={handleBackbtn}>
            Back
          </Button>
          <Button type="submit">Login</Button>
        </div>
        <div className={styles.createAccountContainer}>
          <h3>or</h3>
          <LinkButton to="createuser">Create your Account</LinkButton>
        </div>
      </form>
    </div>
  );
}

export default Login;
