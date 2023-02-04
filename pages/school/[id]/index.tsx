import { QuestionValue } from '@/components/Questions/Questions.const';
import {
  QuestionsContent,
  QuestionsContentBlock,
  QuestionsTitle,
  QuestionsTitleBlock,
  QuestionsTitleNumber,
} from '@/components/Questions/Questions.styled';
import {
  ExamContainer,
  ExamWrapper,
  QuestionsNextButton,
} from '@/components/SchoolExam/SchoolExam.styled';
import { useStore } from '@/store';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

export default function SchoolExam() {
  const router = useRouter();
  const [questionCheck, setQuestionCheck] = useState<number>();
  const [resultCheck, setResultCheck] = useState<boolean>(false);
  const [isCheck, setIsCheck] = useState<boolean>(false);
  const [isPageNumber, setIsPageNumber] = useState<number>(0);
  const { resultScore, increaseScore, resultNumber, resultArr } = useStore();

  useEffect(() => {
    if (router.isReady) {
      setIsPageNumber(Number(router.query.id) - 1);
    }
  }, [router]);

  // 문항 클릭
  const isClickedQuestion = useCallback(
    (index: number, result: number) => () => {
      setQuestionCheck(index);
      setIsCheck(true);
      if (index === result - 1) {
        setResultCheck(true);
      } else {
        setResultCheck(false);
      }
    },
    []
  );

  // 다음 문제 클릭
  const nextQuestion = useCallback(() => {
    if (resultCheck) {
      increaseScore(resultScore);
    }
    if (questionCheck !== undefined) {
      resultArr([...resultNumber, questionCheck + 1]);
    } else {
      return alert('알수없는 오류가 발생했습니다. 다시 문항을 골라주세요.');
    }

    if (Number(router.query.id) === 20) {
      router.push('/school/result');
      return;
    }
    router.push((Number(router.query.id) + 1).toString());
  }, [router, resultScore, resultCheck, resultNumber, questionCheck, increaseScore, resultArr]);

  return (
    <ExamContainer>
      <ExamWrapper>
        <QuestionsTitleBlock>
          <QuestionsTitleNumber>{QuestionValue[isPageNumber].questionNumber}</QuestionsTitleNumber>
          <QuestionsTitle>{QuestionValue[isPageNumber].questionTitle}</QuestionsTitle>
        </QuestionsTitleBlock>
        {QuestionValue[isPageNumber].question.map((quiz, index) => (
          <QuestionsContentBlock
            key={quiz}
            className={questionCheck === index ? 'active' : ''}
            onClick={isClickedQuestion(index, QuestionValue[isPageNumber].questionResult)}
          >
            <QuestionsContent>{quiz}</QuestionsContent>
          </QuestionsContentBlock>
        ))}
        {
          <QuestionsNextButton onClick={nextQuestion} disabled={!isCheck} isCheck={isCheck}>
            다음 문제 <Image src={'/imgs/Wolfgang.png'} alt='' width={30} height={30} />
          </QuestionsNextButton>
        }
      </ExamWrapper>
    </ExamContainer>
  );
}
