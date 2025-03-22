import React from 'react';
import styled from 'styled-components';

const Section = styled.div` padding: 16px; `;
const Box = styled.div` ... `;
const Button = styled.button` ... `;
const SectionTitle = styled.div` ... `;
const MapImage = styled.div` ... `;
const Description = styled.div` ... `;

const Watchiing: React.FC = () => {
  return (
    <Section>
      <Box>
        <div>공연 관람 시 유의사항<br />지금 확인하세요!</div>
        <Button>확인하기</Button>
      </Box>
      <SectionTitle>관람 안내도</SectionTitle>
      <MapImage />
      <Description>
        공연 중 지켜야 할 에티켓과<br />
        주의사항 안내 텍스트
      </Description>
    </Section>
  );
};

export default Watchiing;
