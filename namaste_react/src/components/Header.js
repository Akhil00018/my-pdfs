import { logoUrl } from "../utils/constants";
import { cartUrl } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("header render");

  return (
    <div className="header">
      <div className="logo_container">
        <img className="logo" src={logoUrl} alt="Logo" />
      </div>
      <div className="nav_items">
        <ul>
          <li>
            <Link to="/" className="links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" className="links">
              About us
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="links">
              Contact us
            </Link>
          </li>

          <li>
            <img className="cart" src={cartUrl} alt="Cart" />
          </li>

          <button
            className="loginBtn"
            onClick={() => {
              //   btnName = 'Logout';
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
