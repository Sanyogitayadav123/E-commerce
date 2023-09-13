import React, { useState, useEffect } from "react";
import user from "../../../public/user-img.jpeg";
import Image from "next/image";
import cookies from "js-cookies";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [token, setToken] = useState("");

  useEffect(() => {
    let userToken = cookies.getItem("token");
    if (userToken) {
      setToken(userToken);
    }
  }, []);

  const handleLogout = () => {
    cookies.removeItem("token");
    setToken("");
    router.push("/Signin");
  };

  return (
    <div>
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="/" className="logo">
                  <img src="/images/logo.png" />
                </a>

                <ul className="nav">
                  <li className="scroll-to-section">
                    <a href="index.html" className="active">
                      Home
                    </a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="index.html">Men&apos;s</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="index.html">Women&apos;s</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="index.html">Kid&apos;s</a>
                  </li>
                  <li className="submenu">
                    <a href="">Pages</a>
                    <ul>
                      <li>
                        <a href="/About">About Us</a>
                      </li>
                      <li>
                        <a href="/Products">Products</a>
                      </li>
                      <li>
                        <a href="/SingleProduct">Single Product</a>
                      </li>
                      <li>
                        <a href="/Contact">Contact Us</a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="">Features</a>
                    <ul>
                      <li>
                        <a href="">Features Page 1</a>
                      </li>
                      <li>
                        <a href="">Features Page 2</a>
                      </li>
                      <li>
                        <a href="">Features Page 3</a>
                      </li>
                      <li>
                        <a
                          rel="nofollow"
                          href="https://templatemo.com/page/4"
                          target="_blank"
                        >
                          Template Page 4
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="scroll-to-section">
                    <a href="">Explore</a>
                  </li>

                  {token ? (
                    <li className="submenu">
                      {/* <a href="">User</a> */}
                      <Image src={user} alt="img" className="user-img" />
                      <ul>
                        <li>
                          <a href="/UpdateUser">Profile</a>
                        </li>
                        <li>
                          <a onClick={handleLogout}>Logout</a>
                        </li>
                      </ul>
                    </li>
                  ) : (
                    <>
                      <li className="scroll-to-section">
                        <a href="/Signup">Sign Up</a>
                      </li>
                      <li className="scroll-to-section">
                        <a href="/Signin">Sign In</a>
                      </li>
                    </>
                  )}
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
                {/* ***** Menu End ***** */}
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
