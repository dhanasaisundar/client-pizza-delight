import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function Applayout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Applayout;
