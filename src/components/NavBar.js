import React, { useEffect, useState } from "react";
import "../styles/HomeScreen.css";
export default function NavBar() {
  const [show, handelShow] = useState(false);
  // Adding Scroll listner
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handelShow(true);
      } else {
        handelShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`navBar ${show && "scrolledNavBar"}`}>
      <img
        className="logo"
        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="Logo"
      />
      <img
        className="user-img"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Logo"
      />
      {/* Bar-container */}
      {/* logo and img */}
    </div>
  );
}
