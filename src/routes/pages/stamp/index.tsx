import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import StampBoard from './stampBoard';
import Intro from './intro';

const Stamp = () => {
  const [selectedIndex, setSelectedIndex] = useState<string>('stamp');

  const handleClickIndex = (index: string) => {
    setSelectedIndex(index);
  };

  return (
    <Wrapper>
      <IndexBox>
        <EachIndex
          onClick={() => {
            handleClickIndex('intro');
          }}
          isSelected={selectedIndex === 'intro'}
        >
          광장기획전 소개
        </EachIndex>
        <EachIndex
          onClick={() => {
            handleClickIndex('stamp');
          }}
          isSelected={selectedIndex === 'stamp'}
        >
          스탬프
        </EachIndex>
      </IndexBox>
      <ContentBox>{selectedIndex == 'stamp' ? <StampBoard /> : <Intro />}</ContentBox>
    </Wrapper>
  );
};

export default Stamp;

interface EachIndexProps {
  isSelected: boolean;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const IndexBox = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid red;
`;

const EachIndex = styled.div<EachIndexProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 50%;
  min-height: 64px;
  color: ${({ isSelected }) => (isSelected ? 'black' : '#888')};
  font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 'normal')};
  border-bottom: ${({ isSelected }) => (isSelected ? '2px solid #1ab888' : '2px solid #ffffff')};
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  justify-content: space-between;
  align-items: center;
  min-height: calc(100vh - 120px - 70px);
  overflow-y: auto;
`;
