import { useStore } from '@/store';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { QuestionValue } from '../Questions/Questions.const';
import { onSaveToImg, scoreTier, scoreTierText } from './Mark.const';
import {
  MarkAnswer,
  MarkButtonBox,
  MarkContainer,
  MarkFail,
  MarkSaveImgButton,
  MarkScore,
  MarkScoreText,
  MarkSuccess,
  MarkTierImageBox,
  MarkTierText,
  MarkWrongButton,
  MarkWrongButtons,
  MarkWrongContainer,
  MarkWrongNextButton,
  MarkWrongPrveButton,
  MarkWrongQuizContent,
  MarkWrongQuizContentBox,
  MarkWrongQuizTitle,
  MarkWrongTitle,
} from './Mark.styled';

export const Mark = () => {
  const { resultScore, resultNumber } = useStore();
  const [isWrongScreen, setIsWrongScreen] = useState<boolean>(false);
  const [isWrongNumber, setIsWrongNumber] = useState<number>(0);

  useEffect(() => {
    console.log(`자신이 찍은 번호들 : ${resultNumber}`);
    console.log(`자신의 점수 : ${resultScore}`);
  }, [resultNumber, resultScore]);

  const handleWrongAddNumber = useCallback(() => {
    if (QuestionValue.length - 1 <= isWrongNumber) return;
    setIsWrongNumber((add) => add + 1);
  }, [isWrongNumber]);

  const handleWrongRemoveNumber = useCallback(() => {
    if (isWrongNumber === 0) return;
    setIsWrongNumber((remove) => remove - 1);
  }, [isWrongNumber]);

  return (
    <>
      <MarkContainer id='capture'>
        <MarkScore>
          <MarkScoreText>{resultScore}점</MarkScoreText>
        </MarkScore>
        <MarkTierImageBox>
          <Image src={scoreTier(resultScore)} alt='' width={100} height={100} />
          <MarkTierText>{scoreTierText(resultScore)}</MarkTierText>
        </MarkTierImageBox>
        {isWrongScreen && (
          <MarkWrongContainer>
            {QuestionValue[isWrongNumber].questionResult === resultNumber[isWrongNumber] ? (
              <MarkSuccess />
            ) : (
              <MarkFail />
            )}
            <MarkWrongTitle>{QuestionValue[isWrongNumber].questionNumber}</MarkWrongTitle>
            <MarkWrongQuizTitle>{QuestionValue[isWrongNumber].questionTitle}</MarkWrongQuizTitle>
            <MarkWrongQuizContentBox>
              {QuestionValue[isWrongNumber].question.map((quiz, index) => (
                <MarkWrongQuizContent
                  key={quiz}
                  style={{
                    color:
                      index + 1 === resultNumber[isWrongNumber]
                        ? QuestionValue[isWrongNumber].questionResult ===
                          resultNumber[isWrongNumber]
                          ? '#1ddb16cc'
                          : '#FF00DD'
                        : '',
                  }}
                >
                  {quiz}{' '}
                  {index + 1 === QuestionValue[isWrongNumber].questionResult && (
                    <MarkAnswer>[ 정답 ]</MarkAnswer>
                  )}
                </MarkWrongQuizContent>
              ))}
            </MarkWrongQuizContentBox>

            <MarkWrongButtons>
              <MarkWrongPrveButton onClick={handleWrongRemoveNumber}>이전</MarkWrongPrveButton>
              <MarkWrongNextButton onClick={handleWrongAddNumber}>다음</MarkWrongNextButton>
            </MarkWrongButtons>
          </MarkWrongContainer>
        )}
      </MarkContainer>
      <MarkButtonBox>
        <MarkWrongButton onClick={() => setIsWrongScreen((wrong) => !wrong)}>
          틀린 문제
        </MarkWrongButton>
        <MarkSaveImgButton onClick={onSaveToImg}>이미지 저장</MarkSaveImgButton>
      </MarkButtonBox>
    </>
  );
};
