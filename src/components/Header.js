import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link, useNavigate } from "react-router"; // ✅ Corrected Import
import { FaCartArrowDown } from "react-icons/fa";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(userContext);
  const cartItems = useSelector((store) => store.cart.items);
  const navigate = useNavigate(); // ✅ Initialize navigate

  const handleLoginClick = () => {
    if (btnNameReact === "Login") {
      navigate("/login"); // ✅ Navigate to Login page
      setBtnNameReact("Logout");
    } else {
      setBtnNameReact("Login");
      navigate("/"); // ✅ Navigate to Home page on Logout
    }
  };

  return (
    <header 
      className="relative shadow-lg backdrop-blur-lg bg-opacity-60"
      style={{
        background: "linear-gradient(to right, rgba(255, 243, 221, 0.9), rgba(255, 229, 204, 0.9))",
      }}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?food,dishes,restaurant')" }}
      ></div>

      <div className="relative flex justify-between items-center px-8 py-5 text-gray-800">
        <div className="flex items-center">
          <img 
            className="w-20 h-16 rounded-lg shadow-md border border-gray-300" 
            src={LOGO_URL} 
            alt="Logo" 
          />
        </div>

        <nav className="flex-1 flex justify-center">
          <ul className="flex gap-8 text-lg font-semibold tracking-wide">
            <li className="hover:text-orange-500 transition duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-orange-500 transition duration-300">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-orange-500 transition duration-300">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="hover:text-orange-500 transition duration-300">
              <Link to="/instamart">Instamart</Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-6">
          <span className="text-sm bg-white bg-opacity-50 px-3 py-1 rounded-full shadow-md font-semibold">
            {onlineStatus ? "✅ Online" : "🔴 Offline"}
          </span>

          <Link to="/cart" className="relative flex items-center" aria-label="cart">
            <FaCartArrowDown className="text-2xl hover:text-orange-500 transition duration-300" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md">
                {cartItems.length}
              </span>
            )}
          </Link>

          <button
            className="bg-orange-400 text-white px-5 py-2 rounded-full hover:bg-orange-500 transition duration-300 shadow-md"
            onClick={handleLoginClick} // ✅ Updated click handler
          >
            {btnNameReact}
          </button>

          <span className="font-semibold text-md">{loggedInUser}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
