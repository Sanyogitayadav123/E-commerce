import Image from "next/image";
import { Inter } from "next/font/google";
import Homepage from "./Home/index.js";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hexashop Ecommerce HTML CSS Template</title>
      </Head>
      <Homepage />
    </>
  );
}