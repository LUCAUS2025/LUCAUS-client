import React from 'react';
import { LoadingSpinner } from '../../styles/LoadingSpinner';
import styled from 'styled-components';

export const LoadingPage = () => {
  return (
    <Wrapper>
      <LoadingSpinner />
      <span style={{ fontSize: '12px' }}>로딩중...</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  gap: 5px;
`;
