import styled from 'styled-components';

const Text = styled.span`
  font-size: 20px;
  color: #ffffff;
`;
const Button = styled.button`
  padding: 10px 20px;
  border: 0;
  background-color: transparent;
  color: #ffffff;
  cursor: pointer;
  z-index: 1;

  &:hover {
    background-color: #0000004d;
    transition: background-color 0.3s;
  }
`;
export const MarkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(0deg, rgba(58, 72, 138, 1) 0%, rgba(40, 33, 90, 1) 100%) no-repeat;
`;
export const MarkScore = styled.div``;
export const MarkScoreText = styled(Text)`
  font-size: 36px;
`;
export const MarkTierImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const MarkTierText = styled(Text)`
  margin-top: 8px;
  font-size: 14px;
`;

//틀린 문제
export const MarkWrongContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  margin: 10px 20px 0;
  border: 1px solid #000000;
  text-align: center;
`;
export const MarkSuccess = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0000004d;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    border: 10px solid #1ddb16cc;
    border-radius: 10041004px;
  }
`;
export const MarkFail = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0000004d;

  &::after {
    content: 'X';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    color: #ff00004d;
    font-size: 80px;
  }
`;
export const MarkWrongTitle = styled(Text)`
  margin-bottom: 8px;
  font-size: 14px;
`;
export const MarkWrongQuizTitle = styled(Text)`
  font-size: 12px;
`;
export const MarkWrongQuizContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 8px;
  margin-bottom: 8px;
`;
export const MarkWrongQuizContent = styled(Text)`
  font-size: 10px;
`;

export const MarkWrongButton = styled(Button)`
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;
export const MarkWrongButtons = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 10px;
`;
export const MarkWrongNextButton = styled(Button)``;
export const MarkWrongPrveButton = styled(Button)``;

// 버튼
export const MarkButtonBox = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  display: flex;
  transform: translateX(-50%);
  white-space: nowrap;
`;
export const MarkSaveImgButton = styled(Button)``;
export const MarkAnswer = styled(Text)`
  font-size: 10px;
  color: #1ddb16cc;
`;
