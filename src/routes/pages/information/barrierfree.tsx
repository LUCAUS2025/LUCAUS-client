import React from 'react';
import styled from 'styled-components';
import { Box, SectionTitle } from '../../../components/stage/Watching';
import { BlackButton } from '../../../components/common/BaseButton';
import { Title } from '../stage';

const BarrierFree = () => {
  return (
    <>
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
      <MapImage />
      <Description>
        티켓팅 방식 및 입장 정책에 대한
        <br />
        설명글 텍스트
      </Description>
    </>
  );
};
export default BarrierFree;

const MapImage = styled.div` ... `;
const Description = styled.div` ... `;

// const Ticketing: React.FC = () => {
//   return (
//     <>
//       <Box>
//         <div>
//           축제 공연 티켓팅
//           <br />
//           지금 바로 예매하세요!
//         </div>
//         <BlackButton>바로가기</BlackButton>
//       </Box>
//       <SectionTitle>관람 구역 지도</SectionTitle>
//       <MapImage />
//       <Description>
//         티켓팅 방식 및 입장 정책에 대한
//         <br />
//         설명글 텍스트
//       </Description>
//     </>
//   );
// };
