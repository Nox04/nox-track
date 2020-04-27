import React from 'react';
import ParentApp from 'next/app';
import '@src/css/tailwind.css';
import Head from 'next/head';
import { AuthContextProvider } from '@src/contexts/AuthContext';
import { SITE_NAME } from '@src/shared/constants';
import { initGA, logPageView } from '@src/services/google-analytics.service';
import { Router } from 'next/router';

class MyApp extends ParentApp {
  componentDidMount() {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }
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
