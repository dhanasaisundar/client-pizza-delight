import Cookie from "js-cookie";

export async function createOrder(newOrder, userInfo) {
  const token = Cookie.get("jwt_token");
  const APIURL = `http://localhost:3000/api/order`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + token,
    },
    body: JSON.stringify({
      newOrder,
      userInfo,
    }) /* --->did a mistake by adding it like JSON.stringify({newOrder}) */,
  };
  try {
    const response = await fetch(APIURL, options);
    if (response.ok === true) {
      const data = await response.json();
      return data.orderId;
    } else {
      throw Error(`Failed to place the order. Status: ${response.status}`);
    }
  } catch (e) {
    throw Error(`Failed to place the order: ${e.message}`);
  }
}

export async function getOrder(orderId) {
  const token = Cookie.get("jwt_token");
  const API_URL = `http://localhost:3000/api/order/${orderId}`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + token,
    },
  };

  try {
    const response = await fetch(API_URL, options);
    if (!response.ok) {
      throw new Error(`Error fetching order: ${response.statusText}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    throw new Error(`${error.message}:Error fetching order`);
  }
}
