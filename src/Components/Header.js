import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  const [login, setLogin] = useState("Login");
  return (
    <div className="header">
      <div className="image-container">
        <img src={LOGO_URL} className="header-logo" alt="header-logo" />
      </div>

      <div className="header-navigation">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact US</Link>
          <Link to="/">Cart</Link>
          <button
            className="login"
            onClick={() => {
              login === "Login" ? setLogin("Logout") : setLogin("Login");
            }}
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
