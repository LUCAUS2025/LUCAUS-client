import React, { useState } from 'react';
import styled from 'styled-components';
import { signup } from '../../../../../services/apis/stamp/signup';
import { AxiosError } from 'axios';
import Modal from '../../../../../components/Modal/Modal';
import { useIsLoginStore } from '../../../../../store/isLoginStore';
import { useSignupError } from '../../../../../hook/useSignupError';
import { LoadingSpinner } from '../../../../../styles/LoadingSpinner';
import { login } from '../../../../../services/apis/stamp/login';
import ConfirmModalContent from './confirmModalContent';

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
      <InputLine>
        <div>ID</div>
        <input value={signupData.id} onChange={(e) => handleInputChange('id', e.target.value)} />
      </InputLine>
      {errorState.isIdError && <ErrorLine>{errorState.idErrorMessage}</ErrorLine>}

      <InputLine>
        <div>PW</div>
        <input type="password" value={signupData.pw} onChange={(e) => handleInputChange('pw', e.target.value)} />
      </InputLine>
      {errorState.isPwError && <ErrorLine>{errorState.pwErrorMessage}</ErrorLine>}

      <InputLine>
        <div>이름</div>
        <input value={signupData.name} onChange={(e) => handleInputChange('name', e.target.value)} />
      </InputLine>
      {errorState.isNameError && <ErrorLine>{errorState.nameErrorMessage}</ErrorLine>}

      <InputLine>
        <div>학번</div>
        <input value={signupData.studentId} onChange={(e) => handleInputChange('studentId', e.target.value)} />
      </InputLine>
      {errorState.isStudentIdError && <ErrorLine>{errorState.studentIdErrorMessage}</ErrorLine>}

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
  padding: 20px;
`;

const InputLine = styled.div`
  display: flex;
  flex-direction: row;
`;

const ErrorLine = styled.div`
  color: red;
  font-size: 14px;
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
