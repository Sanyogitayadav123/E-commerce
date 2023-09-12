import React from 'react'

const Header = () => {
    return (
        <div>
            <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            {/* ***** Logo Start ***** */}
                            <a href="index.html" className="logo">
                                <img src="/images/logo.png" />
                            </a>
                            {/* ***** Logo End ***** */}
                            {/* ***** Menu Start ***** */}
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
                                            <a href="about.html">About Us</a>
                                        </li>
                                        <li>
                                            <a href="products.html">Products</a>
                                        </li>
                                        <li>
                                            <a href="single-product.html">Single Product</a>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact Us</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="">Features</a>
                                    <ul>
                                        <li>
                                            <a href="#">Features Page 1</a>
                                        </li>
                                        <li>
                                            <a href="#">Features Page 2</a>
                                        </li>
                                        <li>
                                            <a href="#">Features Page 3</a>
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
                                    <a href="index.html">Explore</a>
                                </li>
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
    )
}

export default Header