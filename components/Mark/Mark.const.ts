import html2canvas from 'html2canvas';

export const scoreTier = (score: number) => {
  if (score >= 90) {
    return '/imgs/tier_legendary.png';
  } else if (score >= 80) {
    return '/imgs/tier_master.png';
  } else if (score >= 70) {
    return '/imgs/tier_diamond.png';
  } else if (score >= 55) {
    return '/imgs/tier_platinum.png';
  } else if (score >= 40) {
    return '/imgs/tier_gold.png';
  } else if (score >= 20) {
    return '/imgs/tier_silver.png';
  } else {
    return '/imgs/tier_bronze.png';
  }
};
export const scoreTierText = (score: number) => {
  if (score >= 90) {
    return '완벽합니다!! 당신은 진짜 레전더리입니다!';
  } else if (score >= 80) {
    return '대단합니다! 마스터급 실력을 가지셨네요!';
  } else if (score >= 70) {
    return '조금 아쉽긴하지만 괜찮은 성적입니다!';
  } else if (score >= 55) {
    return '평균 정도의 지식을 가지셨네요! 나쁘지 않습니다!';
  } else if (score >= 40) {
    return '조금 분발하셔야 할 것 같습니다!';
  } else if (score >= 20) {
    return '와우! 진정한 즐겜유저!';
  } else {
    return '어..?';
  }
};
const onSaveAs = (url: string, filename: string) => {
  let link = document.createElement('a');
  document.body.appendChild(link);
  link.href = url;
  link.download = filename;
  link.click();
  document.body.removeChild(link);
};
export const onSaveToImg = () => {
  if (window.confirm('이미지로 저장하시겠습니까?')) {
    const capture: any = document.querySelector('#capture');
    html2canvas(capture).then((canvas) => {
      onSaveAs(canvas.toDataURL('image/jpg'), 'WolfGangSchool.jpg');
    });
  }
};
