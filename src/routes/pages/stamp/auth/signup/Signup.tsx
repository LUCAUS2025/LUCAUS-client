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

const Signup = ({ setWhichView }: Props) => {
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
            setWhichView('default');
          }
        } catch (e) {
          // 로그인 문제 생기면 그냥 첫 화면으로 보냄
          setIsLoading(false);
          setWhichView('default');
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
          setErrorState({ ...errorState, isStudentIdError: true, studentIdErrorMessage: '학번형식이 불일치 합니다.' });
        } else if (errorCode == 'AUTH4005') {
          setErrorState({ ...errorState, isIdError: true, idErrorMessage: '이미 사용하고 있는 아이디에요.' });
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
    <SignupBox>
      <IntroBox>광장기획전 항해 시작하기</IntroBox>
      <InfoBox>
        <div>로그인 정보</div>
        <InputLine>
          <div>아이디</div>
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
          <div>비밀번호</div>
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
        <InputLine>
          <div>이름</div>
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
          <div>학번</div>
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

      <button onClick={handleClickSignup}>키 모으러 가기</button>

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
  );
};

export default Signup;

const SignupBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
  position: absolute;
  z-index: 1px;
  height: calc(100vh - 120px);
  background-color: rgba(255, 255, 255, 0.5);
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
`;

const StyledInput = styled.input`
  width: 70%;
  min-width: 260px;
  height: 40px;
  border: 1px solid #d1d5dc;
  border-radius: 12px;
  padding-left: 12px;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  color: #364153;
  font-weight: 700;
  font-size: 14px;
  gap: 5px;
`;

const InputAndError = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
`;

const ErrorLine = styled.div`
  color: #fb2c36;
  font-size: 10px;
  height: 15px;
  padding-left: 10px;
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
