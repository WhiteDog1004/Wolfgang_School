import { Loading } from '@/components/Loading';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import 'nprogress/nprogress.css';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };

    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);

    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);
  return loading ? (
    <Loading />
  ) : (
    <>
      <Head>
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
