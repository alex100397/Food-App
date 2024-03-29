import React, { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
// import "./Header.css";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [login, setLogin] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  //Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="header flex justify-between bg-red-50 shadow-lg sm:bg-slate-50 lg:bg-amber-200">
      <div className="image-container">
        <img src={LOGO_URL} className="header-logo w-24 " alt="header-logo" />
      </div>

      <div className="header-navigation flex items-center">
        <ul className="flex m-4 p-4">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact US</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart - ({cartItems.length})</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>

          <button
            className="login"
            onClick={() => {
              login === "Login" ? setLogin("Logout") : setLogin("Login");
            }}
          >
            {login}
            {onlineStatus ? "💹" : "🔴"}
          </button>
          {loggedInUser}
        </ul>
      </div>
    </div>
  );
};

export default Header;
