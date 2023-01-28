import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  ContentCorp,
  GoNextPageButton,
  GoNextPageWrapper,
  MainContainer,
  MainContent,
  MainTitle,
  SmashLogo,
} from './SchoolMain.styled';
import { NextCheckProps } from './SchoolMain.types';

export const SchoolMain = ({ nextPageCheck }: NextCheckProps) => {
  const router = useRouter();

  const goSchool = () => {
    router.push('/school');
  };
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
      {nextPageCheck && (
        <GoNextPageWrapper>
          <GoNextPageButton onClick={goSchool}>
            시험장 입장
            <Image src={'/imgs/Wolfgang.png'} alt='' width={30} height={30} />
          </GoNextPageButton>
        </GoNextPageWrapper>
      )}
    </MainContainer>
  );
};
