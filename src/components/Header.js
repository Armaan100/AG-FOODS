import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  let [btnNameReact, setBtnNameReact] = useState("LOGIN");
  console.log("Header Rendered");

  const onlineSatus = useOnlineStatus();

  //If no dependency array -> useEffect is called on every render
  //If dependency array is empty = [] -> useEffect is called on initial render only(just once)
  //If dependecy array is [btnNameReact] -> called everytime btnNameReact is updated
  useEffect(() => {
    console.log("useEffect called in Header");
  }, []);
  return (
    <div className="flex justify-between bg-green-200 shadow-lg sm:bg-indigo-300">
      <div>
        <img className="logo w-40" src={LOGO_URL} />
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex m-3">
          <li className="px-2 text-lg">OnlineStatus: {onlineSatus?'🟢':'🔴'}</li>
          <li className="px-2 text-lg"><Link to="/grocery">Grocery</Link></li>
          <li className="px-2 text-lg"><Link to="/">Home</Link></li>
          <li className="px-2 text-lg"><Link to="/about">About Us</Link></li>
          <li className="px-2 text-lg"><Link to="/contact">Contact Us</Link></li>
          <li className="px-2 text-lg">Cart</li>
          <button
            className="login mr-4" 
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
