import React from 'react';
import styled from 'styled-components';
import { Box } from './Watching';
import { BlackButton } from '../common/BaseButton';

export const Description = styled.div`
  margin-top: 16px;
  line-height: 1.5;
`;

const Ticketing: React.FC = () => {
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
      <Description>
        티켓팅 방식 및 입장 정책에 대한
        <br />
        설명글 텍스트
      </Description>
    </>
  );
};

export default Ticketing;
