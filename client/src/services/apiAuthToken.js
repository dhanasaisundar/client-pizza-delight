async function apiSendOtp(username, email) {
  const apiUrl = "http://localhost:3000/api/users/register";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email }),
  };
  try {
    const response = await fetch(apiUrl, options);
    return response;
  } catch (error) {
    return error.message;
  }
}
// #############################################################################
async function apiVerifyOtp(email, userOtp) {
  const apiUrl = "http://localhost:3000/api/users/verify";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, userOtp }),
  };
  try {
    const response = await fetch(apiUrl, options);
    return response;
  } catch (error) {
    return error.message;
  }
}
// #############################################################################
export { apiSendOtp, apiVerifyOtp };
