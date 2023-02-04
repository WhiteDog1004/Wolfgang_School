import { Loading } from '@/components/Loading';
import '@/styles/globals.css';
import { collection, getDocs } from 'firebase/firestore';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import 'nprogress/nprogress.css';
import { useEffect, useState } from 'react';
import { db } from '../firebase-config';

export default function App({ Component, pageProps }: AppProps) {
  // 이따가 users 추가하고 삭제하는거 진행을 도와줄 state
  const [users, setUsers] = useState([]);
  // db의 users 컬렉션을 가져옴
  const usersCollectionRef = collection(db, 'QuizResult');

  // 시작될때 한번만 실행
  useEffect(() => {
    // 비동기로 데이터 받을준비
    const getResult = async () => {
      // getDocs로 컬렉션안에 데이터 가져오기
      const data = await getDocs(usersCollectionRef);
      // console.log(data);
    };

    getResult();
  }, [usersCollectionRef]);

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
  return loading ? <Loading /> : <Component {...pageProps} />;
}
