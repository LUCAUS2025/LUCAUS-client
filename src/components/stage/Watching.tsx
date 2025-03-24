import React from 'react';
import styled from 'styled-components';
import { BlackButton } from '../common/BaseButton';

export const Box = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 16px;
`;

export const SectionTitle = styled.h3` ... `;
const MapImage = styled.img` ... `;
const Description = styled.div` ... `;

const Watchiing: React.FC = () => {
  return (
    <>
      <Box>
        <div>
          공연 관람 시 유의사항
          <br />
          지금 확인하세요!
        </div>
        <BlackButton>바로가기</BlackButton>
      </Box>
      <SectionTitle>공연 관람시에 꼭 지켜주세요</SectionTitle>
      <MapImage />
      <Description>
        총학생회 티켓팅 방식 및 입장 정책에 대한 <br />
        주의사항 안내 텍스트
      </Description>
    </>
  );
};

export default Watchiing;
