import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { openingChatting } from './Chat.const';
import {
  ButtonBox,
  ChatBox,
  ChatContainer,
  ChattingBlock,
  NextButton,
  PrevButton,
} from './Chat.styled';
import { NextPageProps } from './Chat.types';

export const Chat = ({ setNextPageCheck }: NextPageProps) => {
  const [chatBtnCurrent, setChatBtnCurrent] = useState<number>(0);
  const [nextCheck, setNextCheck] = useState<boolean>(false);
  const [prevCheck, setPrevCheck] = useState<boolean>(false);

  const addNumber = useCallback(
    (calc: string) => {
      if (calc === 'add') {
        setChatBtnCurrent(chatBtnCurrent + 1);
      } else {
        setChatBtnCurrent(chatBtnCurrent - 1);
      }
    },
    [chatBtnCurrent]
  );

  useEffect(() => {
    if (chatBtnCurrent === openingChatting.length - 1) {
      setNextCheck(true);
      setNextPageCheck(true);
    } else {
      setNextCheck(false);
      setNextPageCheck(false);
    }
    if (0 === chatBtnCurrent) {
      setPrevCheck(true);
    } else {
      setPrevCheck(false);
    }
    return;
  }, [chatBtnCurrent, setNextPageCheck]);

  return (
    <ChatContainer>
      <ChatBox>
        <Image src={'/imgs/wolfg.png'} width={100} height={100} alt='' priority />
        <ChattingBlock>{openingChatting[chatBtnCurrent]}</ChattingBlock>
        <ButtonBox>
          <PrevButton
            prevCheck={prevCheck}
            onClick={() => {
              0 < chatBtnCurrent && addNumber('subtract');
            }}
          >
            Prev
          </PrevButton>
          <NextButton
            nextCheck={nextCheck}
            onClick={() => {
              openingChatting.length - 1 > chatBtnCurrent && addNumber('add');
            }}
          >
            Next
          </NextButton>
        </ButtonBox>
      </ChatBox>
    </ChatContainer>
  );
};
