import React from 'react';
import ParentApp from 'next/app';
import '@src/css/tailwind.css';
import Head from 'next/head';
import { AuthContextProvider } from '@src/contexts/AuthContext';
import { SITE_NAME } from '@src/shared/constants';

class MyApp extends ParentApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>{SITE_NAME}</title>
        </Head>
        <AuthContextProvider>
          <Component {...pageProps} />
        </AuthContextProvider>
      </>
    );
  }
}

export default MyApp;
