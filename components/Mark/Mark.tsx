import { useStore } from '@/store';
import Image from 'next/image';
import { useEffect } from 'react';
import { scoreTier, scoreTierText } from './Mark.const';
import {
  MarkContainer,
  MarkScore,
  MarkScoreText,
  MarkTierImageBox,
  MarkTierText,
} from './Mark.styled';

export const Mark = () => {
  const { resultScore, resultNumber } = useStore();

  useEffect(() => {
    console.log(`자신이 찍은 번호들 : ${resultNumber}`);
    console.log(`자신의 점수 : ${resultScore}`);
  }, [resultNumber, resultScore]);

  return (
    <MarkContainer>
      <MarkScore>
        <MarkScoreText>{resultScore}점</MarkScoreText>
      </MarkScore>
      <MarkTierImageBox>
        <Image src={scoreTier(resultScore)} alt='' width={100} height={100} />
        <MarkTierText>{scoreTierText(resultScore)}</MarkTierText>
      </MarkTierImageBox>
      {/* {QuestionValue.map((value, index) => (
        <MarkTestBox key={value.id}>
          {value.id}
          {value.questionResult === resultNumber[index] ? <>O</> : <>X</>}
        </MarkTestBox>
      ))} */}
    </MarkContainer>
  );
};
