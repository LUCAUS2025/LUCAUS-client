import React from 'react';
import styled from 'styled-components';
import { BlackButton } from '../common/BaseButton';
import { TestMapImage } from '../../routes/pages/information/barrierfree';
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

const Watchiing: React.FC = () => {
  return (
    <>
      <Box>
        <div>
          축제 공연 티켓팅
          <br />
          지금 바로 예매하세요!
        </div>
        <BlackButton onClick={() => window.open('https://festival.cau.ac.kr/index.html', '_blank')}>
          바로가기
        </BlackButton>
      </Box>
      <SectionTitle>공연 관람시에 꼭 지켜주세요</SectionTitle>
      <TestMapImage />
      <Description>
        총학생회 티켓팅 방식 및 입장 정책에 대한 <br />
        주의사항 안내 텍스트
      </Description>
    </>
  );
};

export default Watchiing;
