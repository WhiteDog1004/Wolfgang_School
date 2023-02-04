import { Mark } from '@/components/Mark';
import { db } from '@/firebase-config';
import { useStore } from '@/store';
import { addDoc, collection } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';

export default function Result() {
  const router = useRouter();
  const { resultScore, resultNumber } = useStore();

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
