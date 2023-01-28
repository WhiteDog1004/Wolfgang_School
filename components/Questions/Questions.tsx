import Image from 'next/image';
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

export const Questions = () => {
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
  const resultQuestion = () => {
    if (resultCheck) {
      console.log('정답!');
    } else {
      console.log('틀림!');
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
      <ResultButton onClick={resultQuestion}>
        정답 확인 <Image src={'/imgs/Wolfgang.png'} alt='' width={30} height={30} />
      </ResultButton>
    </QuestionsContainer>
  );
};
