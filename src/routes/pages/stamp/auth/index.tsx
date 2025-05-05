import React, { SetStateAction, useState } from 'react';
import styled from 'styled-components';
import Signup from './signup/Signup';
import Login from './login/Login';
import WaveTest1 from './wave/WaveTest1';

interface Props {
  setWhichView: React.Dispatch<SetStateAction<string>>;
}

const AuthPage = ({ setWhichView }: Props) => {
  return (
    <>
      <TopWrapper>
        <IntroBox>
          <div>광장기획전 부스를 돌며 열쇠를 모아</div>
          <div>항해를 시작해 보세요!</div>
        </IntroBox>
        <ButtonBox>
          <Button
            onClick={() => {
              //setWhichView('login');
              window.location.href = '/stamp/login';
            }}
          >
            <ButtonText>내 도장판 확인</ButtonText>
          </Button>
          <MakeBoardTextLine>
            <div>첫 방문이라면?</div>
            <MakeBoardText
              onClick={() => {
                //setWhichView('signup');
                window.location.href = '/stamp/signup';
              }}
            >
              도장판 만들러 가기
            </MakeBoardText>
          </MakeBoardTextLine>
        </ButtonBox>
      </TopWrapper>
    </>
  );
};

export default AuthPage;

const IntroBox = styled.div`
  display: flex;
  font-size: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  width: 100%;
  margin-top: 50px;
  gap: 5px;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: 86px;
  max-height: 86px;
  height: 35%;
  width: 100%;
  gap: 20px;
`;

const Button = styled.button`
  min-width: 343px;
  width: 343px;
  //max-width: 200px;
  min-height: 48px;
  height: 48px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  background-color: #f9fafb;
  border: 1px solid #1447e6;
  cursor: pointer;
`;

const ButtonText = styled.div`
  font-size: 14px;
  color: #1447e6;
  font-weight: 600;
`;

const MakeBoardTextLine = styled.div`
  font-size: 12px;
  color: #364153;
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

const MakeBoardText = styled.div`
  font-size: 12px;
  color: #364153;
  cursor: pointer;
  text-decoration: underline;
`;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 210px;
  width: 100%;
`;
