import { QuestionValue } from '@/components/Questions/Questions.const';
import {
  QuestionsContent,
  QuestionsContentBlock,
  QuestionsTitle,
  QuestionsTitleBlock,
  QuestionsTitleNumber,
} from '@/components/Questions/Questions.styled';
import { ExamContainer, ExamWrapper } from '@/components/SchoolExam/SchoolExam.styled';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

export default function SchoolExam() {
  const router = useRouter();
  const [questionCheck, setQuestionCheck] = useState<number>();
  const [resultCheck, setResultCheck] = useState<boolean>(false);
  const [isPageNumber, setIsPageNumber] = useState<number>(0);

  useEffect(() => {
    if (router.isReady) {
      setIsPageNumber(Number(router.query.id) - 1);
    }
  }, [router]);

  const isClickedQuestion = useCallback(
    (index: number, result: number) => () => {
      setQuestionCheck(index);
      if (index === result - 1) {
        setResultCheck(true);
      } else {
        setResultCheck(false);
      }
    },
    []
  );

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
      </ExamWrapper>
    </ExamContainer>
  );
}
