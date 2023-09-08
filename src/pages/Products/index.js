import React from 'react'
import Link from 'next/link'
import Header from '../Components/Header'


const index = () => {
  return (
    <div>
      <Header/>
      
      <section className="section" id="products">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-heading">
            <h2>Our Latest Products</h2>
            <span>Check out all of our products.</span>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="item">
            <div className="thumb">
              <div className="hover-content">
                <ul>
                  <li>
                    <Link href="">
                      <i className="fa fa-eye" />
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <i className="fa fa-star" />
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <i className="fa fa-shopping-cart" />
                    </Link>
                  </li>
                </ul>
              </div>
              <img src="/images/men-01.jpg" alt="" unoptimized/>
            </div>
            <div className="down-content">
              <h4>Classic Spring</h4>
              <span>$120.00</span>
              <ul className="stars">
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="item">
            <div className="thumb">
              <div className="hover-content">
                <ul>
                  <li>
                    <Link href="single-product.html">
                      <i className="fa fa-eye" />
                    </Link>
                  </li>
                  <li>
                    <Link href="single-product.html">
                      <i className="fa fa-star" />
                    </Link>
                  </li>
                  <li>
                    <Link href="single-product.html">
                      <i className="fa fa-shopping-cart" />
                    </Link>
                  </li>
                </ul>
              </div>
              <img src="/images/men-02.jpg" alt="" />
            </div>
            <div className="down-content">
              <h4>Air Force 1 X</h4>
              <span>$90.00</span>
              <ul className="stars">
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="item">
            <div className="thumb">
              <div className="hover-content">
                <ul>
                  <li>
                    <Link href="single-product.html">
                      <i className="fa fa-eye" />
                    </Link>
                  </li>
                  <li>
                    <Link href="single-product.html">
                      <i className="fa fa-star" />
                    </Link>
                  </li>
                  <li>
                    <Link href="single-product.html">
                      <i className="fa fa-shopping-cart" />
                    </Link>
                  </li>
                </ul>
              </div>
              <img src="/images/men-03.jpg" alt="" />
            </div>
            <div className="down-content">
              <h4>Love Nana ‘20</h4>
              <span>$150.00</span>
              <ul className="stars">
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="item">
            <div className="thumb">
              <div className="hover-content">
                <ul>
                  <li>
                    <Link href="single-product.html">
                      <i className="fa fa-eye" />
                    </Link>
                  </li>
                  <li>
                    <Link href="single-product.html">
                      <i className="fa fa-star" />
                    </Link>
                  </li>
                  <li>
                    <Link href="single-product.html">
                      <i className="fa fa-shopping-cart" />
                    </Link>
                  </li>
                </ul>
              </div>
              <img src="/images/women-01.jpg" alt="" />
            </div>
            <div className="down-content">
              <h4>New Green Jacket</h4>
              <span>$75.00</span>
              <ul className="stars">
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="item">
            <div className="thumb">
              <div className="hover-content">
                <ul>
                  <li>
                    <Link href="single-product.html">
                      <i className="fa fa-eye" />
                    </Link>
                  </li>
                  <li>
                    <Link href="single-product.html">
                      <i className="fa fa-star" />
                    </Link>
                  </li>
                  <li>
                    <Link href="single-product.html">
                      <i className="fa fa-shopping-cart" />
                    </Link>
                  </li>
                </ul>
              </div>
              <img src="/images/women-02.jpg" alt="" />
            </div>
            <div className="down-content">
              <h4>Classic Dress</h4>
              <span>$45.00</span>
              <ul className="stars">
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="item">
            <div className="thumb">
              <div className="hover-content">
                <ul>
                  <li>
                    <Link href="single-product.html">
                      <i className="fa fa-eye" />
                    </Link>
                  </li>
                  <li>
                    <Link href="single-product.html">
                      <i className="fa fa-star" />
                    </Link>
                  </li>
                  <li>
                    <Link href="single-product.html">
                      <i className="fa fa-shopping-cart" />
                    </Link>
                  </li>
                </ul>
              </div>
              <img src="/images/women-03.jpg" alt="" />
            </div>
            <div className="down-content">
              <h4>Spring Collection</h4>
              <span>$130.00</span>
              <ul className="stars">
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="item">
            <div className="thumb">
              <div className="hover-content">
                <ul>
                  <li>
                    <Link href="single-product.html">
                      <i className="fa fa-eye" />
                    </Link>
                  </li>
                  <li>
                    <Link href="single-product.html">
                      <i className="fa fa-star" />
                    </Link>
                  </li>
                  <li>
                    <Link href="single-product.html">
                      <i className="fa fa-shopping-cart" />
                    </Link>
                  </li>
                </ul>
              </div>
              <img src="/images/kid-01.jpg" alt="" />
            </div>
            <div className="down-content">
              <h4>School Collection</h4>
              <span>$80.00</span>
              <ul className="stars">
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="item">
            <div className="thumb">
              <div className="hover-content">
                <ul>
                  <li>
                    <Link href="single-product.html">
                      <i className="fa fa-eye" />
                    </Link>
                  </li>
                  <li>
                    <Link href="single-product.html">
                      <i className="fa fa-star" />
                    </Link>
                  </li>
                  <li>
                    <Link href="single-product.html">
                      <i className="fa fa-shopping-cart" />
                    </Link>
                  </li>
                </ul>
              </div>
              <img src="/images/kid-02.jpg" alt="" />
            </div>
            <div className="down-content">
              <h4>Summer Cap</h4>
              <span>$12.00</span>
              <ul className="stars">
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="item">
            <div className="thumb">
              <div className="hover-content">
                <ul>
                  <li>
                    <Link href="single-product.html">
                      <i className="fa fa-eye" />
                    </Link>
                  </li>
                  <li>
                    <Link href="single-product.html">
                      <i className="fa fa-star" />
                    </Link>
                  </li>
                  <li>
                    <Link href="single-product.html">
                      <i className="fa fa-shopping-cart" />
                    </Link>
                  </li>
                </ul>
              </div>
              <img src="/images/kid-03.jpg" alt="" width="" />
            </div>
            <div className="down-content">
              <h4>Classic Kid</h4>
              <span>$30.00</span>
              <ul className="stars">
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="pagination">
            <ul>
              <li>
                <Link href="">1</Link>
              </li>
              <li className="active">
                <Link href="">2</Link>
              </li>
              <li>
                <Link href="">3</Link>
              </li>
              <li>
                <Link href="">4</Link>
              </li>
              <li>
                <Link href="">&gt;</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default index