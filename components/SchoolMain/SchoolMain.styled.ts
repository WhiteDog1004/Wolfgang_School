import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 20px;
  color: white;
`;
export const MainTitle = styled.h1`
  margin-top: 120px;
`;
export const MainContent = styled.span`
  margin-top: 20px;
  text-align: center;
  font-weight: 300;
`;
export const ContentCorp = styled.span`
  margin-top: 8px;
  font-size: 10px;
  font-weight: 300;
`;
export const SmashLogo = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);

  & > img {
    width: 140px;
    height: auto;
  }
`;
export const GoNextPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: max-content;
  padding: 10px 0;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: #1111114d;
  animation: moveFadeUp 0.5s ease-in-out forwards;

  @keyframes moveFadeUp {
    0% {
      transform: translate(-50%, -30%);
      opacity: 0;
    }
    100% {
      transform: translate(-50%, -50%);
      opacity: 1;
    }
  }
`;
export const GoNextPageButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: transparent;
  border: 0;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  transition: background-color 0.5s;

  &:hover {
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
