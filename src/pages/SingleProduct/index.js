import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import axios from 'axios';
import { NEXT_PUBLIC_IMAGES } from '../../../api_url';
import { NEXT_PUBLIC_BASE_URL } from '../../../api_url';

const Index = () => {
  const [getProduct, setProduct] = useState();
  const router = useRouter();
  const { id } = router?.query;
  useEffect(() => {
    getProductById();
  }, [id]);
  const getProductById = async () => {
    try {
      if (id) {
        const {data} = await axios.get(
          `${NEXT_PUBLIC_BASE_URL}/product/get-product-by-id/${id}`,
        );
        console.log('data', data)
        setProduct(data?.product)
      }
   


    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };
  return (
    <div>
      <section className="section " id="product">
        <div className="container mt-[120px]">
          <div className="row">
            <div className="col-lg-8">
              <div className="left-images">
                <img
                  src={`${NEXT_PUBLIC_IMAGES}/public/productImages/${getProduct?.image}`}
                  alt="img"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="right-content">
                <h4>{getProduct?.productName}</h4>
                <span className="price">${getProduct?.price}.00</span>
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
                <span>{getProduct?.description}</span>
                <div className="quote">
                  <i className="fa fa-quote-left" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiuski smod.
                  </p>
                </div>
                <div className="quantity-content">
                  <div className="left-content">
                    <h6>No. of Orders</h6>
                  </div>
                  <div className="right-content">
                    <div className="quantity buttons_added">
                      <input type="button" defaultValue="-" className="minus" />
                      <input
                        type="number"
                        step={1}
                        min={1}
                        max=""
                        name="quantity"
                        defaultValue={1}
                        title="Qty"
                        className="input-text qty text"
                        size={4}
                        pattern=""
                        inputMode=""
                      />
                      <input type="button" defaultValue="+" className="plus" />
                    </div>
                  </div>
                </div>
                <div className="total">
                  <h4>Total: ${getProduct?.price}.00</h4>
                  <div className="main-border-button">
                    <Link href="">Add To Cart</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};



export default Index;
