import React, { useState } from 'react';
import styled from 'styled-components';
import { signup } from '../../../../../services/apis/stamp/signup';
import { AxiosError } from 'axios';
import Modal from '../../../../../components/Modal/Modal';
import { useIsLoginStore } from '../../../../../store/isLoginStore';
import { useSignupError } from '../../../../../hook/useSignupError';
import { LoadingSpinner } from '../../../../../styles/LoadingSpinner';
import { login } from '../../../../../services/apis/stamp/login';
import ConfirmModalContent from './ConfirmModalContent';

interface Props {
  setWhichView: (value: string) => void;
}

interface SignupProps {
  id: string;
  pw: string;
  name: string;
  studentId: string;
}

const Signup = () => {
  // 지금 입력받는 데이터
  const [signupData, setSignupData] = useState<SignupProps>({
    id: '',
    pw: '',
    name: '',
    studentId: '',
  });

  // 로그인 여부 전역관리
  const { setIsLogin } = useIsLoginStore();

  // 회원가입 관련 에러 관리 훅
  const { errorState, validate, clearError, setErrorState } = useSignupError();

  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // input 유효성 검사
  const handleClickSignup = () => {
    const isValid = validate(signupData);
    if (isValid) {
      setOpenModal(true);
    }
  };

  // 값 변경시 동작
  const handleInputChange = (field: keyof SignupProps, value: string) => {
    setSignupData((prev) => ({ ...prev, [field]: value }));

    // 입력값 수정시 에러 해제
    if (field === 'id' && value.length >= 4) {
      clearError('isIdError');
    }
    if (field === 'pw' && value.length >= 4) {
      clearError('isPwError');
    }
    if (field === 'name' && value.length >= 1) {
      clearError('isNameError');
    }
    if (field === 'studentId' && value.length >= 8) {
      clearError('isStudentIdError');
    }
  };

  // 회원가입api요청
  const handleSignup = async () => {
    setOpenModal(false);
    setIsLoading(true);

    const { id, pw, name, studentId } = signupData;
    try {
      const response = await signup(id!, pw!, name!, studentId!);
      setIsLoading(false);
      if (!response) return;

      // 바로 로그인 요청 보내고 로그인 완료까지 시키기
      if (response.isSuccess) {
        // 로그인 시도
        try {
          const response = await login(id!, pw!);
          setIsLoading(false);
          if (!response) return;

          if (response.isSuccess) {
            setIsLogin(true);
            localStorage.setItem('accessToken', response.result);
            // 로그인 성공했으니까 바로 스탬프보드로 이동
            window.location.href = '/stamp/board';
          } else {
            //로그인 문제 생기면 그냥 첫 화면으로 보냄
            window.location.href = '/stamp/auth';
          }
        } catch (e) {
          // 로그인 문제 생기면 그냥 첫 화면으로 보냄
          setIsLoading(false);
          window.location.href = '/stamp/auth';
        }

        //alert('회원가입이 완료되었습니다!');
      } else {
        setErrorState({ ...errorState, isUnknownError: true });
        alert('예기치 못한 오류 발생. 회원가입 다시 시도해주세요!');
      }
    } catch (e) {
      setIsLoading(false);
      // 에러 처리
      const error = e as AxiosError<{ code: string; message: string }>;
      if (error.response?.data) {
        const errorCode = error.response.data.code;
        if (errorCode == 'COMMON500') {
          alert('예기치 못한 오류 발생. 회원가입 다시 시도해주세요!');
        } else if (errorCode == 'AUTH4001') {
          setErrorState({ ...errorState, isIdError: true, idErrorMessage: '아이디는 4자리 이상이어야 합니다.' });
        } else if (errorCode == 'AUTH4002') {
          setErrorState({ ...errorState, isPwError: true, pwErrorMessage: '비밀번호는 4자리 이상이어야 합니다.' });
        } else if (errorCode == 'AUTH4003' || errorCode == 'AUTH4004') {
          setErrorState({
            ...errorState,
            isStudentIdError: true,
            studentIdErrorMessage: '학번은 숫자 8자리 이상이어야 합니다.',
          });
        } else if (errorCode == 'AUTH4005') {
          setErrorState({ ...errorState, isIdError: true, idErrorMessage: '이미 사용하고 있는 아이디예요.' });
        } else if (errorCode == 'AUTH4006') {
          setErrorState({ ...errorState, isNameError: true, nameErrorMessage: '이름 입력해주세요' });
        }
      } else {
        setErrorState({ ...errorState, isUnknownError: true });
        alert('예기치 못한 오류 발생. 회원가입 다시 시도해주세요!');
      }
    }
  };

  return (
    <Wrapper>
      <ContentBox>
        <SignupBox>
          <IntroBox>광장기획전 항해 시작하기</IntroBox>
          <InfoBox>
            <InfoBoxTextLine>
              <InfoBoxText>로그인 정보</InfoBoxText>
            </InfoBoxTextLine>
            <InputLine>
              <InputText>아이디</InputText>
              <InputAndError>
                <StyledInput
                  placeholder="아이디를 입력해주세요"
                  value={signupData.id}
                  onChange={(e) => handleInputChange('id', e.target.value)}
                />
                {errorState.isIdError ? <ErrorLine>{errorState.idErrorMessage}</ErrorLine> : <EmptyBox />}
              </InputAndError>
            </InputLine>

            <InputLine>
              <InputText>비밀번호</InputText>
              <InputAndError>
                <StyledInput
                  placeholder="비밀번호를 입력해주세요"
                  type="password"
                  value={signupData.pw}
                  onChange={(e) => handleInputChange('pw', e.target.value)}
                />
                {errorState.isPwError ? <ErrorLine>{errorState.pwErrorMessage}</ErrorLine> : <EmptyBox />}
              </InputAndError>
            </InputLine>
          </InfoBox>

          <InfoBox>
            <InfoBoxTextLine>
              <InfoBoxText>인적사항</InfoBoxText>
              <InfoBoxSubText>* 입력하신 정보는 광장기획전 참여 상품 응모에 활용됩니다.</InfoBoxSubText>
            </InfoBoxTextLine>
            <InputLine>
              <InputText>이름</InputText>
              <InputAndError>
                <StyledInput
                  placeholder="이름을 입력해주세요"
                  value={signupData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                />
                {errorState.isNameError ? <ErrorLine>{errorState.nameErrorMessage}</ErrorLine> : <EmptyBox />}
              </InputAndError>
            </InputLine>

            <InputLine>
              <InputText>학번</InputText>
              <InputAndError>
                <StyledInput
                  placeholder="학번을 입력해주세요"
                  value={signupData.studentId}
                  onChange={(e) => handleInputChange('studentId', e.target.value)}
                />
                {errorState.isStudentIdError ? <ErrorLine>{errorState.studentIdErrorMessage}</ErrorLine> : <EmptyBox />}
              </InputAndError>
            </InputLine>
          </InfoBox>

          <GetStampButton onClick={handleClickSignup}>키 모으러 가기</GetStampButton>

          {openModal && (
            <Modal isShort={true}>
              <ConfirmModalContent
                studentId={signupData.studentId}
                name={signupData.name}
                onCancel={() => setOpenModal(false)}
                onConfirm={handleSignup}
              />
            </Modal>
          )}
          {isLoading && (
            <SpinnerWrapper>
              <LoadingSpinner />
            </SpinnerWrapper>
          )}
        </SignupBox>
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

export default Signup;

const SignupBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100vh - 40px - 80px);
  overflow-y: auto;
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

const StyledInput = styled.input`
  width: 90%;
  min-width: 260px;
  height: 48px;
  border: 1px solid #d1d5dc;
  border-radius: 12px;
  padding-left: 12px;
  margin-left: 10px;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  color: #364153;
  font-weight: 700;
  font-size: 14px;
  gap: 5px;
  margin-bottom: 4vh;
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

const InputText = styled.div`
  padding-bottom: 20px;
`;

const InfoBoxText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const InfoBoxTextLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const InfoBoxSubText = styled.div`
  font-size: 11px;
  color: #6a7282;
  width: 80%;
  font-weight: 400;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 40px - 83px);
  justify-content: space-between;
  overflow-y: auto;
  position: relative;
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
