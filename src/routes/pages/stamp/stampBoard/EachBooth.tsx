import React, { ReactNode, useState } from 'react';
import { styled } from 'styled-components';
import StampKey from './keyIcons/StampKey';

interface Props {
  isCleared: Record<number, boolean>;
  index: number;
  isCenterBooth: boolean;
  onClick: (index: number) => void;
  boothName: string;
  customPadding: string;
  childNode?: ReactNode;
  boardType: number;
}

const EachBooth = ({ isCleared, index, onClick, boothName, customPadding, childNode, boardType }: Props) => {
  let realIndex;
  if (boardType == 2) {
    realIndex = index + 10;
  } else {
    realIndex = index;
  }
  const cleared = isCleared[realIndex];
  return (
    <Wrapper
      customPadding={customPadding}
      onClick={() => {
        onClick(index);
      }}
    >
      <StepCircle active={cleared}>{childNode}</StepCircle>
      <BoothName>{boothName}</BoothName>
    </Wrapper>
  );
};

export default EachBooth;

const Wrapper = styled.div<{ customPadding: string }>`
  display: flex;
  width: 78px;
  height: 90px;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  margin-top: ${({ customPadding }) => customPadding};
`;

const StepCircle = styled.div<{ active: boolean }>`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: white;
  border: 6px solid ${({ active }) => (active ? '#1447e6' : '#ffffff')};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoothName = styled.div`
  color: #364153;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
`;
