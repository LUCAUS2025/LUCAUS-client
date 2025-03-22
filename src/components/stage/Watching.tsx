import React from 'react';
import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 16px;
`;
export const Button = styled.div`
  width: 106px;
  height: 42px;
  gap: 10px;
  border-radius: 8px;
  padding-top: 8px;
  padding-right: 10px;
  padding-bottom: 8px;
  padding-left: 10px;
  background: #1e2939;
  color: #f9fafb;
  display: flex;
  justify-content: center;
  align-items: center;
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
        <Button>바로가기</Button>
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
