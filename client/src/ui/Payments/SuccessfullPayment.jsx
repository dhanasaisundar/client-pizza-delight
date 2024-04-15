import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import  styles  from "./Payments.module.css";
function SuccessfullPayment() {
  const navigate = useNavigate();
  function handleHomeBtn() {
    navigate("/");
  }
  return (
    <div className={styles.paymentContainer}>
      <img
        src="https://res.cloudinary.com/dq6ad18dk/image/upload/v1712991838/icons8-tick-64_vadxuo.png"
        alt="success"
      />
      <h2>Your Payment was Successfull</h2>
      <Button
        type="button"
        bgColor="#27b348"
        color="#fff"
        onClick={handleHomeBtn}
      >
        Back to Home
      </Button>
    </div>
  );
}

export default SuccessfullPayment;
