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
export const GoNextPageBtn = styled.div`
  position: absolute;
  top: 55%;
  left: -100%;
  transform: translate(-50%, -50%);
  background-color: #1111114d;
  width: 150px;
  height: 100px;
  animation: moveLeft 0.5s ease-in-out forwards;

  @keyframes moveLeft {
    0% {
      left: -100%;
    }
    100% {
      left: 50%;
    }
  }
`;
