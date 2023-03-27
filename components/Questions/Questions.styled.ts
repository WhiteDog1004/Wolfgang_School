import styled from 'styled-components';

export const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 700px;
  height: max-content;
  padding: 20px;
  border: 1px solid #ffffff4d;
  border-radius: 20px;
`;
export const QuestionsBox = styled.div`
  width: 100%;
`;
export const QuestionsTitleBlock = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;
export const QuestionsTitleNumber = styled.h3`
  margin-bottom: 10px;
`;
export const QuestionsTitle = styled.h4``;
export const QuestionsContentBlock = styled.div`
  width: 100%;
  padding: 8px;
  text-align: left;
  cursor: pointer;

  &.active {
    background-color: #0000004d;
  }

  &:hover {
    background-color: #0000004d;
    transition: background-color 0.5s;
  }
`;
export const QuestionsContent = styled.span``;
export const ResultButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-top: 10px;
  background-color: transparent;
  border: 1px solid #ffffff3d;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  transition: background-color, border 0.5s;

  &:hover {
    border: 1px solid transparent;
    background-color: #0000004d;

    & > img {
      animation: rotation 2s ease infinite;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      10% {
        transform: rotate(-30deg);
      }
      40% {
        transform: rotate(360deg);
      }
      50% {
        transform: rotate(360deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
