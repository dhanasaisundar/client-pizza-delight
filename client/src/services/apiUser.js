export async function createUser(username, password, phoneNo, address, email) {
  const APIURL = "https://api-pizza-delight.onrender.com/create-user";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
      phoneNo,
      address,
      email,
    }),
  };

  try {
    const response = await fetch(APIURL, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.userId;
  } catch (error) {
    console.error("Error during fetch:", error.message);
    throw error;
  }
}

export async function getUserInfo(id) {
  const APIURL = `https://api-pizza-delight.onrender.com/users/${id}`;
  const options = {
    method: "GET",
  };
  try {
    const response = await fetch(APIURL, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error("Couldn't get user");
  }
}
