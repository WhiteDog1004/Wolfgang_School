import Image from 'next/image';
import {
  ContentCorp,
  GoNextPageBtn,
  MainContainer,
  MainContent,
  MainTitle,
  SmashLogo,
} from './SchoolMain.styled';
import { NextCheckProps } from './SchoolMain.types';

export const SchoolMain = ({ nextPageCheck }: NextCheckProps) => {
  return (
    <MainContainer>
      <SmashLogo>
        <Image src={'/imgs/SL_BG.png'} width={120} height={50} alt='' priority />
      </SmashLogo>
      <MainTitle>볼프강 시험장</MainTitle>
      <MainContent>
        해당 사이트는 &apos;스매시 레전드&apos;
        <br />
        게임 팬사이트 입니다.
      </MainContent>
      <ContentCorp>© 5minlab Corp. All rights reserved.</ContentCorp>
      {nextPageCheck && <GoNextPageBtn />}
    </MainContainer>
  );
};
