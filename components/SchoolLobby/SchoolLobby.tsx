import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { ButtonBox, NextButton, PrevButton } from '../Chat/Chat.styled';
import { Questions } from '../Questions';
import { LobbyChatting } from './SchoolLobby.const';
import {
  LobbyChatBox,
  LobbyChatContainer,
  LobbyChattingBlock,
  LobbyContainer,
} from './SchoolLobby.styled';

export const SchoolLobby = () => {
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
    if (chatBtnCurrent === LobbyChatting.length - 1) {
      setNextCheck(true);
    } else {
      setNextCheck(false);
    }
    if (0 === chatBtnCurrent) {
      setPrevCheck(true);
    } else {
      setPrevCheck(false);
    }
    return;
  }, [chatBtnCurrent]);

  return (
    <LobbyContainer>
      <LobbyChatContainer>
        <LobbyChatBox>
          <Image src={'/imgs/wolfg.png'} width={100} height={100} alt='' priority />
          <LobbyChattingBlock>{LobbyChatting[chatBtnCurrent]}</LobbyChattingBlock>
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
                LobbyChatting.length - 1 > chatBtnCurrent && addNumber('add');
              }}
            >
              Next
            </NextButton>
          </ButtonBox>
        </LobbyChatBox>
      </LobbyChatContainer>
      {chatBtnCurrent > 3 && <Questions chatBtnCurrent={chatBtnCurrent} />}
    </LobbyContainer>
  );
};
