import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./ui/Login/Login";
import ProtectedRoute from "./ui/ProtectedRoute/ProtectedRoute";
import Applayout from "./ui/Applayout/Applayout";
import Home from "./ui/Home/Home";
import Menu from "./features/menu/Menu";
import Drinks from "./features/drinks/Drinks";
import Cart from "./features/cart/Cart";
import CreateUser from "./features/user/RegisterUser";
import UserAccount from "./features/user/UserAccount";
import Orders from "./features/order/Orders";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Applayout />}>
            <Route index element={<Home />} />
            <Route path="/pizzas" element={<Menu />} />
            <Route path="/drinks" element={<Drinks />} />
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />
            <Route path="/account" element={<UserAccount />} />
            <Route path="/user" element={<CreateUser />} />
            <Route path="/order/:orderId" element={<Orders />} />
            <Route path="/login/createuser" element={<CreateUser />} />
          </Route>
        </Routes>
      </Router>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{
          margin: "15px",
        }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            borderRadius: "12px",
            backgroundColor: "var(--dark-green-100)",
            color: "var(--color-grey-0)",
            padding: "12px",
            fontSize: "14px",
            fontWeight: "600",
            textAlign: "center",
            fontFamily: "Roboto",
          },
        }}
      />
    </>
  );
}

export default App;
