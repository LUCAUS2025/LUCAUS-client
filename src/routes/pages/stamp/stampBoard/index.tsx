import React, { useState } from 'react';
import styled from 'styled-components';

const StampBoard = () => {
  const [whichView, setWhichView] = useState<string>('default');

  return (
    <>
      <IntroBox>
        <div>광장기획전 ~~</div>
        <div>지금 바로 항해를 시작하시겠습니까?</div>
      </IntroBox>
      {whichView == 'default' && (
        <ButtonBox>
          <Button
            onClick={() => {
              setWhichView('signup');
            }}
          >
            <div>처음</div>
            <div>방문했어요</div>
          </Button>
          <Button
            onClick={() => {
              setWhichView('login');
            }}
          >
            <div>이전에 모았던</div>
            <div>스탬프를</div>
            <div>확인할래요</div>
          </Button>
        </ButtonBox>
      )}
      {whichView == 'signup' && <SignupBox>회원가입화면</SignupBox>}
      {whichView == 'login' && <div>로그인화면</div>}

      <GuideTextBox>
        <div>입력하신 정보는 광장기획전 참여 상품 응모에 활용됩니다.</div>
        <div>학번과 이름을 정확히 입력해주세요.</div>
      </GuideTextBox>
    </>
  );
};

export default StampBoard;

const IntroBox = styled.div`
  display: flex;
  font-size: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  border: 1px solid red;
  width: 100%;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  min-height: 215px;
  max-height: 350px;
  height: 35%;
  width: 100%;
  background-color: red;
`;

const GuideTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: blue;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Button = styled.button`
  min-width: 166px;
  width: 40%;
  max-width: 200px;
  min-height: 212px;
  height: 90%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
`;

const SignupBox = styled.div`
  width: 100%;
  height: 300px;
  border: 1px solid black;
`;
