import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { QuestionTest } from './Questions.const';
import {
  QuestionsBox,
  QuestionsContainer,
  QuestionsContent,
  QuestionsContentBlock,
  QuestionsTitle,
  QuestionsTitleBlock,
  QuestionsTitleNumber,
  ResultButton,
} from './Questions.styled';
import { ChatCurrentType } from './Questions.types';

export const Questions = ({ chatBtnCurrent }: ChatCurrentType) => {
  const router = useRouter();
  const [questionCheck, setQuestionCheck] = useState<number>();
  const [resultCheck, setResultCheck] = useState<boolean>(false);

  const isClickedQuestion = (index: number, result: number) => () => {
    setQuestionCheck(index);
    if (index === result - 1) {
      setResultCheck(true);
    } else {
      setResultCheck(false);
    }
  };

  const resultQuestion = (chatBtnCurrent: number) => () => {
    if (resultCheck) {
      if (chatBtnCurrent === 7) {
        router.push(
          {
            pathname: '/school/[id]',
            query: { id: 1 },
          },
          '/school/1'
        );
        setResultCheck(false);
      }
    }
  };

  return (
    <QuestionsContainer>
      {QuestionTest.map((test) => (
        <QuestionsBox key={test.name}>
          <QuestionsTitleBlock>
            <QuestionsTitleNumber>{test.questionNumber}</QuestionsTitleNumber>
            <QuestionsTitle>{test.questionTitle}</QuestionsTitle>
          </QuestionsTitleBlock>
          {test.question.map((question, index) => (
            <QuestionsContentBlock
              className={questionCheck === index ? 'active' : ''}
              key={question}
              onClick={isClickedQuestion(index, test.questionResult)}
            >
              <QuestionsContent>{question}</QuestionsContent>
            </QuestionsContentBlock>
          ))}
        </QuestionsBox>
      ))}
      <ResultButton onClick={resultQuestion(chatBtnCurrent)}>
        다음 문제 <Image src={'/imgs/Wolfgang.png'} alt='' width={30} height={30} />
      </ResultButton>
    </QuestionsContainer>
  );
};
