import React, { useState, useEffect } from "react";
import "../styling/navbarstyle.css";
export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="heading">UNRAVEL</div>
      <div>
        <nav>
          {(toggleMenu || screenWidth > 500) && (
            <ul className="list">
              <li className="items">Home</li>
              <li className="items">Reviews</li>
              <li className="items">Blogs</li>
                          <li className="items wrap">Unravel for Business</li>
                          <li><button className="btn">Login</button></li>
                          <li><button className="btn no-wrap">Sign Up</button></li>
            </ul>
          )}
          
          <button onClick={toggleNav} className="toggle">
            BTN
          </button>
        </nav>
          </div>
    </div>
  );
}
