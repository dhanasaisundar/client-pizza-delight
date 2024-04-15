import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
// import { clearCart } from "../cart/cartSlice";
import { formatCurrency } from "../../utils/helpers";
import OrderItem from "./OrderItem";
import Navbar from "../../ui/Navbar/Navbar";

import styles from "./Order.module.css";
import Button from "../../ui/Button/Button";

function Orders() {
  const [order, setOrder] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const API_URL = `http://localhost:3000/api/order/${orderId}`;
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        const response = await fetch(API_URL, options);
        if (!response.ok) {
          throw new Error(`Error fetching order: ${response.statusText}`);
        }

        const data = await response.json();
        setOrder(data);
      } catch (error) {
        throw new Error(`${error.message}:Error fetching order`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    // return () => {
    //   dispatch(clearCart());
    // };
  }, [orderId, dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const { cart, drinksCart, orderInfo } = order;
  const pizzas = cart?.[0]?.pizzas;
  const drinks = drinksCart?.[0]?.drinks;
  const orderDetails = orderInfo?.[0];

  console.log(pizzas);
  console.log(drinks);
  console.log(orderDetails);
  function handleOrderBackBtn() {
    navigate("/cart");
  }

  async function makePayment() {
    try {
      // Load Stripe instance
      const stripe = await loadStripe(
        "pk_test_51P2vquSGAf5U2uIgsJg6Fa7txF8vRato08Dy3YnJqiuDt7Py1QSCsQpKc9lUEv3WZYUyzXH0mtC6veRVsJaPtrg900Wk6rG236"
      );

      // Construct totalCart array
      const totalCart = [...pizzas, ...drinks];
      console.log(totalCart);
      const customer = {
        name: "Sundar",
        address: {
          line1: "Kurikaranpalayam",
          line2: "Railway colony post",
          city: "Erode",
          state: "Tamilnadu",
          postal_code: "638002",
          country: "India",
        },
      };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ products: totalCart , customer:customer}),
      };
      // Send request to create checkout session
      const response = await fetch(
        "http://localhost:3000/api/create-checkout-session",
        options
      );

      // Parse response JSON
      const session = await response.json();
      // Redirect to Stripe checkout
      const result = stripe.redirectToCheckout({
        sessionId: session.id,
      });

      // Handle any errors
      if (result.error) {
        console.log(result.error);
      }
    } catch (error) {
      console.error("Error making payment:", error);
      // Handle error gracefully, display to the user if necessary
    }
  }

  return (
    <>
      <Navbar />
      <div className={styles.orderMainContainer}>
        <div className={styles.orderStatusContainer}>
          <h2 className={styles.orderStatusHeader}>Order #{orderId} status</h2>
          <div className={styles.spaceX2}>
            {orderDetails?.priority === 1 && (
              <span className={styles.orderDelivery}>
                Fast delivery enabled
              </span>
            )}
            <span className={styles.orderStatus}>
              {orderDetails?.status} order
            </span>
          </div>
        </div>
        <ul
          className={`${styles.items} ${styles.divideY2} ${styles.divideStone400}`}
        >
          {pizzas?.map((item) => (
            <OrderItem key={item.pizzaId} item={item} />
          ))}
          {drinks?.map((item) => (
            <OrderItem key={item.drinkId} item={item} />
          ))}
        </ul>
        <div
          className={`${styles.priceDetails} ${styles.spacey5} ${styles.bgstone300}`}
        >
          <p>Items Price: {formatCurrency(orderDetails?.order_price)}</p>
          {orderDetails?.priority === 1 && (
            <p>
              Fast delivery charges:{" "}
              {formatCurrency(Number(orderDetails?.priority_price))}
            </p>
          )}
          <p className={styles.orderItemQuantity}>
            To pay on delivery:{" "}
            {formatCurrency(
              Number(orderDetails?.order_price) +
                (orderDetails?.priority === 1
                  ? Number(orderDetails?.priority_price)
                  : 0)
            )}
          </p>
        </div>
        <div className={styles.payOrderContianer}>
          <Button type="button" onClick={handleOrderBackBtn}>
            Back to Cart
          </Button>
          <Button
            type="button"
            bgColor="#27b348"
            color="#fff"
            onClick={makePayment}
          >
            Click to Pay
          </Button>
        </div>
      </div>
    </>
  );
}

export default Orders;
