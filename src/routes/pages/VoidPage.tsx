import React from 'react';
import styled from 'styled-components';

export const VoidPage = () => {
  return <Wrapper>2025년 루카우스 웹사이트 운영 기간이 종료되었습니다.</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  flex-direction: column;
  gap: 5px;

  @media (max-width: 600px) {
    width: 100vw;
    height: calc(var(--vh, 1vh) * 100);
  }
`;
