import React from 'react';
import ParentApp from 'next/app';
import '@src/css/tailwind.css';
import Head from 'next/head';

class MyApp extends ParentApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>{process.env.SITE_NAME}</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
