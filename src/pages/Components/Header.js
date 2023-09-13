import React, { useState, useEffect } from "react";
import user from "../../../public/user-img.jpeg";
import Image from "next/image";
import cookies from "js-cookies";
import { useRouter } from "next/router";
import Link from "next/link";

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
                <Link href="/" className="logo">
                  <img src="/images/logo.png" />
                </Link>

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
                        <Link href="/About">About Us</Link>
                      </li>
                      <li>
                        <Link href="/Products">Products</Link>
                      </li>
                      <li>
                        <Link href="/SingleProduct">Single Product</Link>
                      </li>
                      <li>
                        <Link href="/Contact">Contact Us</Link>
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
                          <Link href="/UpdateUser">Profile</Link>
                        </li>
                        <li>
                          <div onClick={handleLogout}>Logout</div>
                        </li>
                      </ul>
                    </li>
                  ) : (
                    <>
                      <li className="scroll-to-section">
                        <Link href="/Signup">Sign Up</Link>
                      </li>
                      <li className="scroll-to-section">
                        <Link href="/Signin">Sign In</Link>
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
