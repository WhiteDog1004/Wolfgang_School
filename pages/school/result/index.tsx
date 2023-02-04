import { Mark } from '@/components/Mark';
import { db } from '@/firebase-config';
import { useStore } from '@/store';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';

export default function Result() {
  const router = useRouter();
  const { resultScore, resultNumber } = useStore();

  // 파이어베이스 전체 데이터 가져옴
  useEffect(() => {
    const dataResult = async () => {
      const query = await getDocs(collection(db, 'QuizResult'));
      query.forEach((doc) => {
        console.log(doc.data().result);
      });
    };
    dataResult();
  }, []);

  // 자신의 결과를 데이터 베이스에 저장
  const postFirebaseResult = useCallback(() => {
    try {
      const postResults = addDoc(collection(db, 'QuizResult'), {
        result: resultNumber,
        score: resultScore,
      });
      console.log(postResults);
    } catch (e) {
      console.log('error: ', e);
    }
  }, [resultScore, resultNumber]);

  useEffect(() => {
    postFirebaseResult();
  }, [postFirebaseResult]);

  return <Mark />;
}
