import React, { useState } from 'react';
import { styled } from 'styled-components';

interface Props {
  isCleared: Record<number, boolean>;
  index: number;
  isCenterBooth: boolean;
  onClick: (index: number) => void;
}

const EachBooth = ({ isCleared, index, isCenterBooth, onClick }: Props) => {
  const cleared = isCleared[index];

  return (
    <Wrapper
      onClick={() => {
        onClick(index);
      }}
      isCenterBooth={isCenterBooth}
    >
      {cleared ? <Stamp /> : <BoothTextBox>{index}번부스</BoothTextBox>}
    </Wrapper>
  );
};

export default EachBooth;

const Wrapper = styled.div<{ isCenterBooth: boolean }>`
  display: flex;
  width: 56px;
  height: ${({ isCenterBooth }) => (isCenterBooth ? '56px' : '72px')};
  justify-content: center;
  align-items: center;
  border: 1px solid blue;
`;

const Stamp = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: black;
`;

const BoothTextBox = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
