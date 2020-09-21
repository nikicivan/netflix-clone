import React, { useEffect, useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [handleShow, setHandleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setHandleShow(true);
      } else {
        setHandleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`navbar ${handleShow && "navbar__black"}`}>
      <img
        className="navbar__logo"
        src="https://www.product-reviews.net/down/wp-content/uploads/2020/03/netflixlogo.png"
        alt="netflix_logo"
      />
      <img
        className="navbar__avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        alt="ntflix_avatar"
      />
    </div>
  );
};

export default Navbar;
