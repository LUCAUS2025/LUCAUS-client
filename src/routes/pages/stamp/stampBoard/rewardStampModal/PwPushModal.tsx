import React, { SetStateAction, useState } from 'react';
import { rewardStamp } from '../../../../../services/apis/stamp/rewardStamp';
import { AxiosError } from 'axios';

interface Props {
  setOpenRewardModal: React.Dispatch<SetStateAction<boolean>>;
  setRewardStampStep: React.Dispatch<SetStateAction<number>>;
  selectedDate: { label: string; value: number | string };
  isRewarded: Record<number, boolean>;
}

const PwPushModal = ({ setOpenRewardModal, setRewardStampStep, selectedDate, isRewarded }: Props) => {
  // 로딩표현
  const [isLoading, setIsLoading] = useState(false);

  // 지금 입력받는 데이터
  const [pwData, setPwData] = useState<string>('');

  // 값 변경시 동작
  const handleInputChange = (value: string) => {
    setPwData(value);
  };

  // 에러문구 띄우기용
  const [isError, setIsError] = useState<{ error: boolean; message: string }>({ error: false, message: '' });

  const handleClickPwButton = async () => {
    setIsLoading(true);
    const pw = pwData;

    let degree = 0;
    if (isRewarded[1] == false) {
      degree = 1;
    } else if (isRewarded[2] == false) {
      degree = 2;
    } else if (isRewarded[3] == false) {
      degree = 3;
    }

    try {
      const response = await rewardStamp(selectedDate.value!, degree, pw);
      setIsLoading(false);
      // 페이지 새로고침
      window.location.reload();
    } catch (e) {
      setIsLoading(false);
      // 에러 구현
      const error = e as AxiosError<{ code: string; message: string }>;
      if (error.response?.data) {
        const errorCode = error.response.data.code;
        if (errorCode == 'COMMON500') {
          alert('예기치 못한 오류 발생. 다시 시도해주세요');
          window.location.reload();
        } else if (errorCode == 'REWARD4001') {
          setIsError({ error: true, message: '도장 개수가 불충분합니다.' });
        } else if (errorCode == 'PW400') {
          setIsError({ error: true, message: '비밀번호가 일치하지 않습니다.' });
        } else if (errorCode == 'REWARD4003') {
          setIsError({ error: true, message: '이미 상품을 수령하였습니다.' });
        } else if (errorCode == 'REWARD4002') {
          alert('예기치 못한 오류 발생. 다시 시도해주세요');
          window.location.reload();
        }
      }
    }
  };

  return (
    <div>
      <div>축제기획단 부스</div>
      <div>상품 응모를 위해 축기단에게 화면을 보여주세요.</div>
      <input type="password" value={pwData} onChange={(e) => handleInputChange(e.target.value)}></input>
      {isError?.error && <div>{isError.message}</div>}
      <div>
        <button
          onClick={() => {
            setOpenRewardModal(false);
            setRewardStampStep(1);
          }}
        >
          닫기
        </button>
        <button onClick={handleClickPwButton}>비밀번호 확인</button>
      </div>
    </div>
  );
};

export default PwPushModal;
