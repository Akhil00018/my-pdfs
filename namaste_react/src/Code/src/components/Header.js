import { logoUrl } from "../utils/constants";
import { cartUrl } from "../utils/constants";

//import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';

const Header = () => {
  //   let btnName = 'Login';

  const [btnNameReact, setBtnNameReact] = useState('Login');
  console.log('header render');

  return (
    <div className="header">
      <div className="logo_container">
        <img className="logo" src={logoUrl} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
           <li>
            <img className="cart" src={cartUrl} alt="Cart" />
          </li>
          <button
            className="loginBtn"
            onClick={() => {
              //   btnName = 'Logout';
              btnNameReact === 'Login'
                ? setBtnNameReact('Logout')
                : setBtnNameReact('Login');
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
