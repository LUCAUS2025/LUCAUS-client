import React from 'react';
import styled from 'styled-components';

export const BottomSheetHeader = () => {
  return (
    <Wrapper>
      <Handle />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  position: relative;
  padding-top: 12px;
  padding-bottom: 4px;
`;

const Handle = styled.div`
  width: 85px;
  height: 4px;
  border-radius: 6px;
  background-color: #d1d5dc;
  margin: auto;
`;
