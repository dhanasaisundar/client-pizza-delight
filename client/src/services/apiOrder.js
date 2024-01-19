export async function createOrder(newOrder) {
  const APIURL = `https://api-pizza-delight.onrender.com/order`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
      newOrder
    ) /* --->did a mistake by adding it like JSON.stringify({newOrder}) */,
  };
  try {
    const response = await fetch(APIURL, options);
    // console.log(response);
    if (response.ok === true) {
      const data = await response.json();
      return data.orderId;
    } else {
      throw Error(`Failed to place the order. Status: ${response.status}`);
    }
  } catch (e) {
    throw Error(`${e.message}:"Can't Place the order"`);
  }
}

export async function getOrder(orderId) {
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
    console.log(data);
  } catch (error) {
    throw new Error(`${error.message}:Error fetching order`);
  }
}
