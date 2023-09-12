import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/css/font-awesome.css" />

          <link rel="stylesheet" href="/css/templatemo-hexashop.css" />

          <link rel="stylesheet" href="/css/owl-carousel.css" />

          <link rel="stylesheet" href="/css/lightbox.css" />
        </Head>
        <body>
         

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
