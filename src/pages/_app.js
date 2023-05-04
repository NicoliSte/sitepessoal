import React, { useState } from 'react';
import '../../styles/globals.css'
import Head from 'next/head'
import Header from '../components/Header'


function MyApp({ Component, pageProps }) {


  return (
    <>
      <Head>
        <title>Nicoli | dev</title>
        <link rel="icon" type="image/png" href="/images/n.png" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
