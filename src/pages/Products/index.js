import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import Link from 'next/link'
import Header from '../Components/Header'
import Footer from '../Components/Footer';
import axios from 'axios';
import { NEXT_PUBLIC_BASE_URL, NEXT_PUBLIC_IMAGES } from '../../../api_url';
import dummyProduct from "../../../public/img-dummy-product.webp"


const Index = () => {
  // const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  const [products, setProducts] = useState([]);
  console.log('products', products)
  const [loading, setLoading] = useState(false);

  const getAllProduct = async () => {
    try {
      const res = await axios.get(`${NEXT_PUBLIC_BASE_URL}/product/get-product`)
      setProducts(res?.data?.product);
    }
    catch (err) {
      console.log("error", err)
    }
  }
  useEffect(() => {
    getAllProduct()
  }, [])

  return (
    <div>
      <Header />

      <section className="section mt-5" id="products">
        {loading === true ? (
          <div className="loader-box">
            <div className="loader"></div>
          </div>
        ) : (
          ""
        )}
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
            {products?.map((prod) => {
              return (
                <div className="col-lg-4" key={prod?._id}>
                  <div className="item">
                    <div className="thumb">
                      <div className="hover-content">
                        <ul>
                          <li>
                            <Link href={`/SingleProduct?id=${prod?._id}`} >
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
                      {
                        (prod?.image) ? <img src={`${NEXT_PUBLIC_IMAGES}/public/productImages/${prod?.image}`} alt='img' />
                          : <img src={dummyProduct} alt='img' />
                      }
                    </div>
                    <div className="down-content">
                      <h4>{prod?.productName}</h4>
                      <span>${prod?.price}</span>
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
              )
            })}
            {/* <products currentItems={prod} />
            <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
            /> */}

            {/* <div className="col-lg-12">
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
            </div> */}
          </div>
        </div>

      </section>
      <Footer />

    </div>
  )
}

export default Index