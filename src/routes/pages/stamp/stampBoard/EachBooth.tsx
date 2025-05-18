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
  if (boothName == '#2 출렁이는 갑판') {
    title = (
      <>
        <span>#2 출렁이는</span>
        <br />
        <span>갑판</span>
      </>
    );
  } else if (boothName == '#5 오늘은 낚시왕') {
    title = (
      <>
        <span>#5 오늘은</span>
        <br />
        <span>낚시왕</span>
      </>
    );
  } else if (boothName == '#7 운명의 해적섬') {
    title = (
      <>
        <span>#7 운명의</span>
        <br />
        <span>해적섬</span>
      </>
    );
  } else if (boothName == '#8 누가 맹수 소리를 내었는가') {
    title = (
      <>
        <span>#8 누가 맹수 </span>
        <br />
        <span>소리를 내었는가</span>
      </>
    );
  } else if (boothName == '#2 이 거지 같은 콩섬에 버려지다니') {
    title = (
      <>
        <span>#2 이 거지 같은</span>
        <br />
        <span>콩섬에</span>
        <br />
        <span>버려지다니</span>
      </>
    );
  } else if (boothName == '#3 바다 위 생존 상황!') {
    title = (
      <>
        <span>#3 바다 위</span>
        <br />
        <span>생존 상황!</span>
      </>
    );
  } else if (boothName == '#4 사랑은 돌아오는 거야') {
    title = (
      <>
        <span>#4 사랑은</span>
        <br />
        <span>돌아오는 거야</span>
      </>
    );
  } else if (boothName == '#7 오늘은 낚시왕') {
    title = (
      <>
        <span>#7 오늘은</span>
        <br />
        <span>낚시왕</span>
      </>
    );
  } else if (boothName == '#8 바람 위의 항해') {
    title = (
      <>
        <span>#8 바람 위의</span>
        <br />
        <span>항해</span>
      </>
    );
  } else if (boothName == '#9 뱃멀미 살아남기!') {
    title = (
      <>
        <span>#9 뱃멀미</span>
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
