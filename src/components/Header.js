import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  let [btnNameReact, setBtnNameReact] = useState("LOGIN");
  console.log("Header Rendered");

  //If no dependency array -> useEffect is called on every render
  //If dependency array is empty = [] -> useEffect is called on initial render only(just once)
  //If dependecy array is [btnNameReact] -> called everytime btnNameReact is updated
  useEffect(() => {
    console.log("useEffect called in Header");
  }, []);
  return (
    <div className="flex justify-between bg-green-200 shadow-lg">
      <div>
        <img className="logo w-24" src={LOGO_URL} />
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex-row m-4 p-2">
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4">Cart</li>
          <button
            className="login"
            onClick={() => {
              switch (btnNameReact) {
                case "LOGIN":
                  setBtnNameReact("LOGOUT");
                  break;
                case "LOGOUT":
                  setBtnNameReact("LOGIN");
                  break;
              }
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
