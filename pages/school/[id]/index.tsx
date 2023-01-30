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
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

export default function SchoolExam() {
  const router = useRouter();
  const [questionCheck, setQuestionCheck] = useState<number>();
  const [resultCheck, setResultCheck] = useState<boolean>(false);
  const [isCheck, setIsCheck] = useState<boolean>(false);
  const [isPageNumber, setIsPageNumber] = useState<number>(0);

  useEffect(() => {
    if (router.isReady) {
      console.log(router);
      setIsPageNumber(Number(router.query.id) - 1);
    }
  }, [router]);

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

  const nextQuestion = useCallback(() => {
    router.push((Number(router.query.id) + 1).toString());
  }, [router]);

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
