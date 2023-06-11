import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import "./Header.css";
const Header = () => {
  const [login, setLogin] = useState("Login");
  return (
    <div className="header">
      <div className="image-container">
        <img src={LOGO_URL} className="header-logo" alt="header-logo" />
      </div>

      <div className="header-navigation">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact US</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              login === "Login" ? setLogin("Logout") : setLogin("Login");
            }}
          >
            {login}
          </button>
        </ul>
        {/* <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Foods</a>
                <a href="#">Contact Us</a> */}
      </div>
    </div>
  );
};

export default Header;
