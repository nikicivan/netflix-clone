import React, { useEffect, useState } from "react";

import { NavbarContainer, NavbarLogo, NavbarAvatar } from "./navbar-style";

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

  console.log(handleShow);

  return (
    <>
      {handleShow ? (
        <NavbarContainer style={{ backgroundColor: "#111" }}>
          <NavbarLogo
            src="https://www.product-reviews.net/down/wp-content/uploads/2020/03/netflixlogo.png"
            alt="netflix_logo"
          />
          <NavbarAvatar
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
            alt="ntflix_avatar"
          />
        </NavbarContainer>
      ) : (
        <NavbarContainer>
          <NavbarLogo
            src="https://www.product-reviews.net/down/wp-content/uploads/2020/03/netflixlogo.png"
            alt="netflix_logo"
          />
          <NavbarAvatar
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
            alt="ntflix_avatar"
          />
        </NavbarContainer>
      )}
    </>
  );
};

export default Navbar;
