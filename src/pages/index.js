import Image from "next/image";
import { Inter } from "next/font/google";
import Homepage from "./Home/index.js";
import Head from "next/head";



export default function Home() {
  return (
    <>

      {/* No need to include stylesheets and scripts here */}
      <Head>
        <title>Hexashop Ecommerce HTML CSS Template</title>
      </Head>
      {/* Your content */}
      <Homepage />
    </>
  );
}