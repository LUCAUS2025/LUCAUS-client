import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Auth from './auth';
import Intro from './intro';
import Signup from './auth/signup/Signup';
import Login from './auth/login/Login';

const StampEntrance = () => {
  const [selectedIndex, setSelectedIndex] = useState<string>('stamp');

  // 회원가입 or 로그인 화면 선택
  const [whichView, setWhichView] = useState<string>('default');

  const handleClickIndex = (index: string) => {
    setSelectedIndex(index);
  };

  return (
    <Wrapper>
      {whichView == 'default' ? (
        <>
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
          {selectedIndex == 'stamp' ? <Auth setWhichView={setWhichView} /> : <Intro />}
        </>
      ) : (
        <EmptyBox></EmptyBox>
      )}
      {whichView == 'signup' && <Signup setWhichView={setWhichView} />}
      {whichView == 'login' && <Login setWhichView={setWhichView} />}
      <WaveWrapper>
        <WaveBox>
          <WaveImg src="/images/wave/wave.png" alt="wave" />
        </WaveBox>
        <ColorBox />
      </WaveWrapper>
    </Wrapper>
  );
};

export default StampEntrance;

interface EachIndexProps {
  isSelected: boolean;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

const EmptyBox = styled.div`
  min-height: 276px;
  max-height: 276px;
`;

const IndexBox = styled.div`
  display: flex;
  flex-direction: row;
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
  border-bottom: ${({ isSelected }) => (isSelected ? '2px solid #1447e6' : '2px solid #ffffff')};
`;

const ColorBox = styled.div`
  width: 100%;
  min-height: calc(100vh - 200px - 230px - 120px - 80px - 40px);
  background-color: #e0efff;
`;

const WaveWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

const WaveBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 230px;
  overflow-y: hidden;
`;

const WaveImg = styled.img`
  display: flex;
  width: 100%;
`;
