import React, { useState } from 'react';
import { styled } from 'styled-components';
import StampKey from './keyIcons/StampKey';

interface Props {
  isCleared: Record<number, boolean>;
  index: number;
  isCenterBooth: boolean;
  onClick: (index: number) => void;
  boothName: string;
  customPadding: string;
}

const EachBooth = ({ isCleared, index, onClick, boothName, customPadding }: Props) => {
  const cleared = isCleared[index];

  return (
    <Wrapper
      customPadding={customPadding}
      onClick={() => {
        onClick(index);
      }}
    >
      <StepCircle active={cleared}>
        <StampKey color={cleared ? '#1447E6' : '#D0DAFA'} />
      </StepCircle>
      <BoothName>{boothName}</BoothName>
    </Wrapper>
  );
};

export default EachBooth;

const Wrapper = styled.div<{ customPadding: string }>`
  display: flex;
  width: 78px;
  height: 100px;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  margin-top: ${({ customPadding }) => customPadding};
`;

const StepCircle = styled.div<{ active: boolean }>`
  width: 58px;
  height: 58px;
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
