import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div>
      <footer>
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <div className="first-item">
            <div className="logo">
              <img
                src="images/white-logo.png"
                alt="hexashop ecommerce templatemo"
              />
            </div>
            <ul>
              <li>
                <Link href="">
                  16501 Collins Ave, Sunny Isles Beach, FL 33160, United States
                </Link>
              </li>
              <li>
                <Link href="">hexashop@company.com</Link>
              </li>
              <li>
                <Link href="">010-020-0340</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3">
          <h4>Shopping &amp; Categories</h4>
          <ul>
            <li>
              <Link href="">Men’s Shopping</Link>
            </li>
            <li>
              <Link href="">Women’s Shopping</Link>
            </li>
            <li>
              <Link href="">Kid&apos;s Shopping</Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-3">
          <h4>Useful Links</h4>
          <ul>
            <li>
              <Link href="">Homepage</Link>
            </li>
            <li>
              <Link href="">About Us</Link>
            </li>
            <li>
              <Link href="">Help</Link>
            </li>
            <li>
              <Link href="">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-3">
          <h4>Help &amp; Information</h4>
          <ul>
            <li>
              <Link href="">Help</Link>
            </li>
            <li>
              <Link href="">FLinkQ&apos;s</Link>
            </li>
            <li>
              <Link href="">Shipping</Link>
            </li>
            <li>
              <Link href="">TrLinkcking ID</Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-12">
          <div className="under-footer">
            <p>
              Copyright © 2022 HexaShop Co., Ltd. All Rights Reserved.
              <br />
              Design:{" "}
              <Link
                href="https://templatemo.com"
                target="_parent"
                title="free css templates"
              >
                TemplateMo
              </Link>
            </p>
            <ul>
              <li>
                <Link href="">
                  <i className="fa fa-facebook" />
                </Link>
              </li>
              <li>
                <Link href="">
                  <i className="fa fa-twitter" />
                </Link>
              </li>
              <li>
                <Link href="">
                  <i className="fa fa-linkedin" />
                </Link>
              </li>
              <li>
                <Link href="">
                  <i className="fa fa-behance" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  </div>
  )
}

export default Footer