import React from 'react';
import styled from 'styled-components';

const Section = styled.div` padding: 16px; `;
const Box = styled.div` ... `;
const Button = styled.button` ... `;
const SectionTitle = styled.div` ... `;
const MapImage = styled.div` ... `;
const Description = styled.div` ... `;

const Ticketing: React.FC = () => {
  return (
    <Section>
      <Box>
        <div>축제 공연 티켓팅<br />지금 바로 예매하세요!</div>
        <Button>바로가기</Button>
      </Box>
      <SectionTitle>관람 구역 지도</SectionTitle>
      <MapImage />
      <Description>
        티켓팅 방식 및 입장 정책에 대한<br />
        설명글 텍스트
      </Description>
    </Section>
  );
};

export default Ticketing;
