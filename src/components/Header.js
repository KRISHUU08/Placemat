import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {

  // let btnName = "login";  //normal js variable which cannot understand by react
  
  const [btnNameReact, setBtnNameReact] = useState("login");
  console.log("Header Render");

  useEffect(()=>{
    console.log("useEffect Called");
  },[btnNameReact])
  
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src = {LOGO_URL}/>
        </div>
        <div className="nav-items">
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
            <li>Cart</li>
            <button className="login-btn"
            onClick={()=> {
              btnNameReact==="login"?setBtnNameReact("logout"):setBtnNameReact("login");
            }}>{btnNameReact}
            </button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header