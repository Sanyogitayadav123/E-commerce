import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layoutes = ({children}) => {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  );
};

export default Layoutes;
