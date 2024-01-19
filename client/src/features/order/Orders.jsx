import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { clearCart } from "../cart/cartSlice";
import { formatCurrency } from "../../utils/helpers";
import OrderItem from "./OrderItem";
import Navbar from "../../ui/Navbar/Navbar";

import styles from "./Order.module.css";

function Orders() {
  const [order, setOrder] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { orderId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const API_URL = `https://api-pizza-delight.onrender.com/orders/${orderId}`;
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
    return () => {
      dispatch(clearCart());
    };
  }, [orderId, dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const { cart, drinksCart, orderInfo } = order;
  const pizzas = cart?.[0]?.pizzas;
  const drinks = drinksCart?.[0]?.drinks;
  const orderDetails = orderInfo?.[0];
  console.log(pizzas);

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
      </div>
    </>
  );
}

export default Orders;
