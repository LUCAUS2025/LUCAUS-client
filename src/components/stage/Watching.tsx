import React from 'react';
import styled from 'styled-components';
import { BlackButton } from '../common/BaseButton';
import { Description } from './Ticketing';

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  width: 100%;
`;

export const SectionTitle = styled.h3` ... `;
const MapImage = styled.img` ... `;

const Watching: React.FC = () => {
  return (
    <>
      <Box>
        <div>
          공연 입장 QR 코드
          <br />
          이곳에서 바로 확인하세요!
        </div>
        <BlackButton onClick={() => window.open('https://festival.cau.ac.kr/index.html', '_blank')}>
          바로가기
        </BlackButton>
      </Box>
      <SectionTitle>공연 관람 시 꼭 지켜주세요</SectionTitle>
      {/* <TestMapImage /> */}
      <Description>
        <strong>[본 무대 반입 금지 물품]</strong>
        <br />- 🫙 유리병 등 위험할 수 있는 물품
        <br />- 🍺 모든 종류의 주류
        <br />- 🥤 테이크아웃 잔에 담긴 음료 (페트병 등 개폐 가능한 음료는 가능)
        <br />- 🍜 라면, 배달 음식 등 타인에게 불쾌감을 줄 수 있는 음식
        <br />- 🎥 대포카메라, 사다리, 의자, 셀카봉
        <br />- 🔭 타인의 진로나 시야를 방해할 수 있는 물품
        <br />- ⚠️ 기타 안전사고의 우려가 있는 물품
        <br />
        <br />
        <strong>[기타 유의사항]</strong>
        <br />- 펜스 밀기, 앞 사람을 가격하는 행위 등 다른 관람객의 공연 관람을 방해하는 행위는 삼가주세요.
        <br />- 정해진 출입구로 입퇴장하며, 펜스 사이를 넘어오거나 이동하지 않습니다.
        <br />- 본인이 가져온 쓰레기는 퇴장 시 꼭 가져가 주세요.
        <br />- 관람 도중 스태프의 도움이 필요하거나 위급 환자 발생 시, 즉시 가까운 스태프에게 알려주세요.
      </Description>
    </>
  );
};

export default Watching;
