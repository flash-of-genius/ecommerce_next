import React from 'react';
import Head from 'next/head';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="layout">
      <Head>
        <title>JS Mastery Store</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <main className="main-container">EMPTY</main>
      <Footer />
    </div>
  );
};

export default Layout;
