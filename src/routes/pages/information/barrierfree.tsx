import React from 'react';
import styled from 'styled-components';
import { Box, SectionTitle } from '../../../components/stage/Watching';
import { BlackButton } from '../../../components/common/BaseButton';

const BarrierFree = () => {
  return (
    <Wrapper>
      <SectionTitle>배리어프리 서비스 신청</SectionTitle>
      <Box>
        <div>
          배리어프리 서비스
          <br />
          신청하러 가기
        </div>
        <BlackButton>바로가기</BlackButton>
      </Box>
      <SectionTitle>배리어프리 지도</SectionTitle>
      <TestMapImage />
      <Description>
        티켓팅 방식 및 입장 정책에 대한
        <br />
        설명글 텍스트
      </Description>
    </Wrapper>
  );
};
export default BarrierFree;

const Wrapper = styled.div`
  padding: 12px;
`;

export const TestMapImage = styled.div`
  height: 275px;
  background: url('/images/information/map.png') no-repeat center center;
  background-size: cover;
`;

const Description = styled.div` ... `;
