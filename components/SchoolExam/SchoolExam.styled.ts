import styled, { css } from 'styled-components';
import { isCheckType } from './SchoolExam.types';

export const ExamContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 10px;
`;
export const ExamWrapper = styled.div`
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
  color: #ffffff;
`;
export const QuestionsNextButton = styled.button<isCheckType>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-top: 20px;
  border: 0;
  border-radius: 10px;
  background-color: transparent;
  color: #ffffff;
  cursor: pointer;
  opacity: ${({ isCheck }) => (isCheck ? 1 : 0.3)};

  ${({ isCheck }) =>
    isCheck
      ? css`
          &:hover {
            background-color: #0000004d;
            transition: background-color 0.25s;

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
        `
      : ''}
`;
