import React from 'react';
import ParentApp from 'next/app';
import '@src/css/tailwind.css';
import Head from 'next/head';
import { AuthContextProvider } from '@src/contexts/AuthContext';

class MyApp extends ParentApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>{process.env.SITE_NAME}</title>
        </Head>
        <AuthContextProvider>
          <Component {...pageProps} />
        </AuthContextProvider>
      </>
    );
  }
}

export default MyApp;
