import React, { useState } from 'react';
import { styled } from 'styled-components';
import Modal from '../../../../../components/Modal/Modal';
import { LoadingSpinner } from '../../../../../styles/LoadingSpinner';
import { useIsLoginStore } from '../../../../../store/isLoginStore';
import { login } from '../../../../../services/apis/stamp/login';
import { AxiosError } from 'axios';

interface Props {
  setWhichView: (value: string) => void;
}
interface LoginProps {
  id: string;
  pw: string;
}

const Login = ({ setWhichView }: Props) => {
  // 지금 입력받는 데이터
  const [loginData, setLoginData] = useState<LoginProps>({
    id: '',
    pw: '',
  });

  // 로그인 여부 전역관리
  const { setIsLogin } = useIsLoginStore();

  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // 값 변경시 동작
  const handleInputChange = (field: keyof LoginProps, value: string) => {
    setLoginData((prev) => ({ ...prev, [field]: value }));
  };

  // 로그인api 요청
  const handleLogin = async () => {
    setOpenModal(false);
    setIsLoading(true);

    const { id, pw } = loginData;
    try {
      const response = await login(id!, pw!);
      setIsLoading(false);
      if (!response) return;

      if (response.isSuccess) {
        setIsLogin(true);
        localStorage.setItem('accessToken', response.result);
        // 로그인 성공시 자동으로 스탬프보드 페이지로 이동
        window.location.href = '/stamp/board';
      } else {
        alert('예기치 못한 오류 발생. 로그인 다시 시도해주세요!');
      }
    } catch (e) {
      setIsLoading(false);
      // 에러 처리
      const error = e as AxiosError<{ code: string; message: string }>;
      if (error.response?.data) {
        const errorCode = error.response.data.code;
        if (errorCode == 'COMMON500') {
          alert('예기치 못한 오류 발생. 로그인 다시 시도해주세요!');
        } else if (errorCode == 'LOGIN404') {
          setOpenModal(true);
        } else if (errorCode == 'PW400') {
          setOpenModal(true);
        }
      } else {
        alert('예기치 못한 오류 발생. 로그인 다시 시도해주세요!');
      }
    }
  };

  return (
    <SignupBox>
      <InputLine>
        <div>ID</div>
        <input value={loginData.id} onChange={(e) => handleInputChange('id', e.target.value)} />
      </InputLine>
      <InputLine>
        <div>PW</div>
        <input type="password" value={loginData.pw} onChange={(e) => handleInputChange('pw', e.target.value)} />
      </InputLine>
      <button onClick={handleLogin}>키 모으러 가기</button>

      {openModal && (
        <Modal isShort={true}>
          <>
            <div>정보를 맞게 입력하셨나요?</div>
            <div>
              <div>회원가입했던 정보와 일치하지 않아요.</div>
              <div>다시 입력해주세요.</div>
            </div>
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              다시 입력하기
            </button>
          </>
        </Modal>
      )}
      {isLoading && (
        <SpinnerWrapper>
          <LoadingSpinner />
        </SpinnerWrapper>
      )}
    </SignupBox>
  );
};

export default Login;

const SignupBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 20px;
`;

const InputLine = styled.div`
  display: flex;
  flex-direction: row;
`;

const SpinnerWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
