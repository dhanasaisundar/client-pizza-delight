async function apiUpdateUser(userInfo) {
  const apiUrl = "http://localhost:3000/api/users/update";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userInfo }),
  };
  try {
    const response = await fetch(apiUrl, options);
    return response;
  } catch (error) {
    return error.message;
  }
}

export default apiUpdateUser;
