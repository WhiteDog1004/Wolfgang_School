import { useStore } from '@/store';
import { useEffect } from 'react';
import { QuestionValue } from '../Questions/Questions.const';
import { MarkContainer, MarkTestBox } from './Mark.styled';

export const Mark = () => {
  const { resultScore, resultNumber } = useStore();

  useEffect(() => {
    console.log(`자신이 찍은 번호들 : ${resultNumber}`);
    console.log(`자신의 점수 : ${resultScore}`);
  }, [resultNumber, resultScore]);

  return (
    <MarkContainer>
      {QuestionValue.map((value, index) => (
        <MarkTestBox key={value.id}>
          {value.id}
          {value.questionResult === resultNumber[index] ? <>O</> : <>X</>}
        </MarkTestBox>
      ))}
    </MarkContainer>
  );
};
