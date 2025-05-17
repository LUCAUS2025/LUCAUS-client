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

  let title;
  if (boothName == '금은보화를 얻어라!') {
    title = (
      <>
        <span>금은보화를</span>
        <br />
        <span>얻어라!</span>
      </>
    );
  } else if (boothName == '누가 맹수 소리를 내었는가') {
    title = (
      <>
        <span>누가 맹수</span>
        <br />
        <span>소리를 내었는가</span>
      </>
    );
  } else if (boothName == '바다 위 생존 상황!') {
    title = (
      <>
        <span>바다 위</span>
        <br />
        <span>생존 상황!</span>
      </>
    );
  } else if (boothName == '사랑은 돌아오는 거야') {
    title = (
      <>
        <span>사랑은</span>
        <br />
        <span>돌아오는 거야</span>
      </>
    );
  } else if (boothName == '바다 식구를 찾아라!') {
    title = (
      <>
        <span>바다 식구를</span>
        <br />
        <span>찾아라!</span>
      </>
    );
  } else if (boothName == '관찰력 100단 선원으로 살아남기!') {
    title = (
      <>
        <span>관찰력 100단</span>
        <br />
        <span>선원으로</span>
        <br />
        <span>살아남기!</span>
      </>
    );
  } else {
    title = (
      <>
        <span>{boothName}</span>
      </>
    );
  }
  return (
    <Wrapper
      customPadding={customPadding}
      onClick={() => {
        onClick(index);
      }}
    >
      <StepCircle active={cleared}>{childNode}</StepCircle>
      <BoothName>{title}</BoothName>
    </Wrapper>
  );
};

export default EachBooth;

const Wrapper = styled.div<{ customPadding: string }>`
  display: flex;
  width: 80px;
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
