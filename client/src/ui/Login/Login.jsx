import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import Button from "../Button/Button";
import styles from "./Login.module.css";
import { apiSendOtp, apiVerifyOtp } from "../../services/apiAuthToken";
import { updateUser, updateJwtToken } from "../../features/user/userSlice";
import Cookies from "js-cookie";

function Login() {
  const [email, setEmail] = useState("");
  const [errorOne, setErrorOne] = useState("");
  const [errorTwo, setErrorTwo] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleBackbtn() {
    navigate("/");
  }

  async function handleLoginSubmit(e) {
    e.preventDefault();
    if (email === "") {
      setErrorOne("Invalid Email");
      return null;
    }
    try {
      const response = await apiSendOtp(email);
      if (response.ok === true) {
        const data = await response.json();
        setIsOtpSent(true);
        toast.success(data.message);
      } else {
        toast.error("Can't sent email");
      }
    } catch (err) {
      setErrorOne(err.message);
    }
  }

  async function handleVerifyOtp(e) {
    e.preventDefault();
    if (otp === "") {
      setErrorTwo("Invalid OTP");
      return null;
    }
    try {
      const response = await apiVerifyOtp(email, otp);
      if (response.ok === true) {
        const data = await response.json();
        Cookies.set("jwt_token", data.token);
        dispatch(updateUser(data.userInfo));
        dispatch(updateJwtToken(data.token));
        toast.success("Logged in successfully");
        localStorage.setItem("user", JSON.stringify(data.userInfo));
        setErrorOne("");
        setErrorTwo("");
        handleBackbtn();
      } else {
        toast.error("Failed to login");
      }
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={handleLoginSubmit} className={styles.formContainer}>
        <h2>🍕 The Pizza Delight</h2>
        <div className={styles.formInputContianer}>
          <label htmlFor="phoneNo" className={styles.formContainerlabel}>
            Email
          </label>
          <input
            type="mail"
            id="email"
            value={email}
            placeholder="Enter your email here..."
            onChange={(e) => setEmail(e.target.value)}
          />
          {errorOne !== "" && <p>* {errorOne}</p>}

          <div
            className={styles.btnContainer}
            style={{ display: !isOtpSent ? "block" : "none" }}
          >
            <Button type="submit">Send OTP</Button>
            <Button type="button" onClick={handleBackbtn}>
              Back
            </Button>
          </div>

          <div
            className={styles.btnContainer}
            style={{ display: isOtpSent ? "block" : "none" }}
          >
            <label htmlFor="otp" className={styles.formContainerlabel}>
              Enter Your OTP
            </label>
            <input
              type="text"
              id="otp"
              value={otp}
              placeholder="Enter your OTP here..."
              onChange={(e) => setOtp(e.target.value)}
            />
            {errorTwo !== "" && <p>{errorTwo}</p>}
            <Button type="submit" onClick={handleVerifyOtp}>
              Verify OTP
            </Button>
            <Button type="button" onClick={handleBackbtn}>
              Back
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
