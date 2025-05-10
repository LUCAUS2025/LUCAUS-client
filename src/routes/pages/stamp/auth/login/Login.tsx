import React, { useState } from 'react';
import { styled } from 'styled-components';
import Modal from '../../../../../components/Modal/Modal';
import { LoadingSpinner } from '../../../../../styles/LoadingSpinner';
import { useIsLoginStore } from '../../../../../store/isLoginStore';
import { login } from '../../../../../services/apis/stamp/login';
import { AxiosError } from 'axios';
interface LoginProps {
  id: string;
  pw: string;
}

const Login = () => {
  // 지금 입력받는 데이터
  const [loginData, setLoginData] = useState<LoginProps>({
    id: '',
    pw: '',
  });

  // 로그인 여부 전역관리
  const { setIsLogin } = useIsLoginStore();

  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // 회원가입 관련 에러 관리 훅
  const [isError, setIsError] = useState(false);

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
    <Wrapper>
      <ContentBox>
        <LoginBox>
          <IntroBox>
            <div>부스를 돌며 열쇠를 모아</div>
            <div>항해를 시작해 보세요!</div>
          </IntroBox>
          <InfoBox>
            <InputLine>
              <InputText>아이디</InputText>
              <InputAndError>
                <StyledInput
                  placeholder="아이디를 입력해주세요"
                  value={loginData.id}
                  onChange={(e) => handleInputChange('id', e.target.value)}
                />
                <EmptyBox />
              </InputAndError>
            </InputLine>
            <InputLine>
              <InputText>비밀번호</InputText>
              <InputAndError>
                <StyledInput
                  placeholder="비밀번호를 입력해주세요"
                  type="password"
                  value={loginData.pw}
                  onChange={(e) => handleInputChange('pw', e.target.value)}
                />
                {isError ? <ErrorLine>아이디 또는 비밀번호가 일치하지 않습니다.</ErrorLine> : <EmptyBox />}
              </InputAndError>
            </InputLine>
          </InfoBox>

          <GetStampButton onClick={handleLogin}>도장 모으러 가기</GetStampButton>

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
        </LoginBox>
      </ContentBox>

      <WaveWrapper>
        <WaveBox>
          <WaveImg src="/images/wave/wave_op.png" alt="wave_op" />
        </WaveBox>
        <ColorBox />
      </WaveWrapper>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 40px - 80px);
  justify-content: space-between;
  overflow-y: auto;
  position: relative;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100vh - 40px - 83px);
  overflow-y: auto;
`;

const InputLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  width: 100%;
  margin-bottom: 2%;
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

const ContentBox = styled.div`
  position: relative;
  z-index: 1;
`;

const WaveWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  pointer-events: none;
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

const ColorBox = styled.div`
  width: 100%;
  flex-grow: 1;
  min-height: calc(100vh - 200px - 230px - 120px - 80px - 120px);
  background-color: #f3f9ff;
`;

const IntroBox = styled.div`
  display: flex;
  font-size: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  width: 100%;
  height: 100px;
  margin-top: 40px;
  margin-bottom: 20px;
`;

const InputText = styled.div`
  padding-bottom: 20px;
`;

const StyledInput = styled.input`
  width: 90%;
  min-width: 260px;
  height: 48px;
  border: 1px solid #d1d5dc;
  border-radius: 12px;
  padding-left: 12px;
  margin-left: 10px;
  font-size: 14px;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  color: #364153;
  font-weight: 700;
  font-size: 14px;
  gap: 5px;
  margin-bottom: 5vh;
`;

const InputAndError = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  width: 85%;
`;

const ErrorLine = styled.div`
  color: #fb2c36;
  font-size: 10px;
  height: 15px;
  padding-left: 10px;
  margin-top: 3px;
`;

const EmptyBox = styled.div`
  height: 15px;
  width: 90%;
`;

const GetStampButton = styled.button`
  display: flex;
  width: 343px;
  height: 48px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 12px;
  background: #1447e6;
  color: #f9fafb;
  margin-bottom: 10%;
`;
