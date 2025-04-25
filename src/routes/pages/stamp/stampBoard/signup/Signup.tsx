import React, { useState } from 'react';
import styled from 'styled-components';
import { signup } from '../../../../../services/apis/stamp/signup';
import { AxiosError } from 'axios';

interface Props {
  id: string | null;
  pw: string | null;
  name: string | null;
  studentId: string | null;
}

const Signup = () => {
  const [signupData, setSignupData] = useState<Props>({
    id: '',
    pw: '',
    name: '',
    studentId: '',
  });

  const handleSignup = async () => {
    const { id, pw, name, studentId } = signupData;
    try {
      const response = await signup(id!, pw!, name!, studentId!);
      if (!response) return;
      //로딩 스페너 넣기
      // ui 모달 추가
      // 바로 로그인 요청 보내고 로그인 완료까지 시키기
      if (response.isSuccess) {
        alert('회원가입이 완료되었습니다!');
      } else {
        alert(`회원가입 실패: ${response.message}`);
      }
    } catch (e) {
      // 에러 처리
      const error = e as AxiosError<{ code: string; message: string }>;
      if (error.response?.data) {
        console.error('에러 메시지:', error.response.data.message);
        alert(`에러 발생: ${error.response.data.message}`);
      } else {
        alert('예기치 못한 오류가 발생했습니다.');
      }
    }
  };

  return (
    <SignupBox>
      <InputLine>
        <div>ID</div>
        <input
          value={signupData.id ?? ''}
          onChange={(e) => setSignupData((prev) => ({ ...prev, id: e.target.value }))}
        />
      </InputLine>
      <InputLine>
        <div>PW</div>
        <input
          type="password"
          value={signupData.pw ?? ''}
          onChange={(e) => setSignupData((prev) => ({ ...prev, pw: e.target.value }))}
        />
      </InputLine>
      <InputLine>
        <div>이름</div>
        <input
          value={signupData.name ?? ''}
          onChange={(e) => setSignupData((prev) => ({ ...prev, name: e.target.value }))}
        />
      </InputLine>
      <InputLine>
        <div>학번</div>
        <input
          value={signupData.studentId ?? ''}
          onChange={(e) => setSignupData((prev) => ({ ...prev, studentId: e.target.value }))}
        />
      </InputLine>
      <button onClick={handleSignup}>키 모으러 가기</button>
    </SignupBox>
  );
};

export default Signup;

const SignupBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 300px;
  border: 1px solid black;
`;

const InputLine = styled.div`
  display: flex;
  flex-direction: row;
`;
