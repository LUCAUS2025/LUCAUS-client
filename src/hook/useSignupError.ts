// 로그인 관련 에러 관리 훅
import { useState } from 'react';

export interface SignupErrorState {
  isIdError: boolean;
  idErrorMessage: string;
  isPwError: boolean;
  pwErrorMessage: string;
  isNameError: boolean;
  nameErrorMessage: string;
  isStudentIdError: boolean;
  studentIdErrorMessage: string;
  isUnknownError: boolean;
}

export const useSignupError = () => {
  const [errorState, setErrorState] = useState<SignupErrorState>({
    isIdError: false,
    idErrorMessage: '',
    isPwError: false,
    pwErrorMessage: '',
    isNameError: false,
    nameErrorMessage: '',
    isStudentIdError: false,
    studentIdErrorMessage: '',
    isUnknownError: false,
  });

  const validate = (signupData: { id: string; pw: string; name: string; studentId: string }) => {
    let hasError = false;
    const newErrorState = {
      isIdError: false,
      idErrorMessage: '',
      isPwError: false,
      pwErrorMessage: '',
      isNameError: false,
      nameErrorMessage: '',
      isStudentIdError: false,
      studentIdErrorMessage: '',
      isUnknownError: false,
    };

    if (signupData.id.length < 4) {
      newErrorState.isIdError = true;
      newErrorState.idErrorMessage = '아이디는 4자리 이상이어야 합니다.';
      hasError = true;
    }
    if (signupData.pw.length < 4) {
      newErrorState.isPwError = true;
      newErrorState.pwErrorMessage = '비밀번호는 4자리 이상이어야 합니다.';
      hasError = true;
    }
    if (signupData.name.length < 1) {
      newErrorState.isNameError = true;
      newErrorState.nameErrorMessage = '이름을 입력해주세요.';
      hasError = true;
    }
    if (signupData.studentId.length < 8) {
      newErrorState.isStudentIdError = true;
      newErrorState.studentIdErrorMessage = '학번형식이 불일치 합니다.';
      hasError = true;
    }

    setErrorState(newErrorState);
    return !hasError;
  };

  const clearError = (field: keyof SignupErrorState) => {
    setErrorState((prev) => ({
      ...prev,
      [field]: false,
      [`${field}Message`]: '',
    }));
  };

  return { errorState, validate, clearError, setErrorState };
};
