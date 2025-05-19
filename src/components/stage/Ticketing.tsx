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
          축제 공연 티켓팅
          <br />
          지금 바로 예매하세요!
        </div>
        <BlackButton onClick={() => window.open('https://festival.cau.ac.kr/index.html', '_blank')}>
          바로가기
        </BlackButton>
      </Box>
      <Description>
        <h3>공연 입장 정책은 추후 공지될 예정입니다.</h3>
        본무대 전 축제기획단 인스타그램에
        <br />
        업로드될 카드 뉴스를 참고해 주세요.
      </Description>
    </>
  );
};

export default Ticketing;
