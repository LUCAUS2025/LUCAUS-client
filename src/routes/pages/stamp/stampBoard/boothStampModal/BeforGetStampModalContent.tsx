import React, { SetStateAction, useState } from 'react';
import { gameStamp } from '../../../../../services/apis/stamp/gameStamp';
import { AxiosError } from 'axios';
import { stampBoardInfo } from '../../../../../services/apis/stamp/stampBoardInfo';

interface BoothClear {
  boothId: number;
  isClear: boolean;
}
interface StampBoardDayData {
  id: number;
  type: number;
  firstReward: boolean;
  secondReward: boolean;
  thirdReward: boolean;
  isBoothClear: BoothClear[];
}

interface Props {
  BoothInfo: string[];
  selectedBooth: number;
  setOpenModal: (open: boolean) => void;
  setIsCleared: React.Dispatch<React.SetStateAction<Record<number, boolean>>>;
  selectedDate: { label: string; value: number | string };
  setStampData: React.Dispatch<SetStateAction<StampBoardDayData[]>>;
}

const BeforGetStampModalContent = ({
  BoothInfo,
  selectedBooth,
  setOpenModal,
  setIsCleared,
  selectedDate,
  setStampData,
}: Props) => {
  // 지금 입력받는 데이터
  const [pwData, setPwData] = useState<string>('');

  // 로딩표현
  const [isLoading, setIsLoading] = useState(false);

  // 비밀번호 에러여부 파악
  const [isWrongPw, setIsWrongPw] = useState(false);

  // 값 변경시 동작
  const handleInputChange = (value: string) => {
    setPwData(value);
  };

  // 비밀번호 입력 후 제출 버튼
  const handleClickEnterPwButton = async () => {
    setIsLoading(true);
    const pw = pwData;
    try {
      const response = await gameStamp(selectedDate.value!, selectedBooth!, pw!);
      setIsLoading(false);
      setOpenModal(false);

      // 갱신된 도장판 정보 받아오고 정보 업데이트
      try {
        // 스탬프 정보 받아오기
        const responseStampInfo = await stampBoardInfo();
        setStampData(responseStampInfo.result);
      } catch (error) {
        alert('다시 로그인 해주세요.');
        // 데이터 가져오기 실패시 다시 로그인 화면으로
        window.location.href = '/stamp/auth';
      }
    } catch (e) {
      setIsLoading(false);
      // 비밀번호 에러 구현
      const error = e as AxiosError<{ code: string; message: string }>;
      if (error.response?.data) {
        const errorCode = error.response.data.code;
        if (errorCode == 'COMMON500') {
          alert('예기치 못한 오류 발생. 로그인 다시 시도해주세요!');
          window.location.reload();
        } else if (errorCode == 'BOOTH404') {
          alert('예기치 못한 오류 발생. 로그인 다시 시도해주세요!');
          window.location.reload();
        } else if (errorCode == 'PW400') {
          setIsWrongPw(true);
        } else if (errorCode == 'STAMP400') {
          window.location.reload();
        }
      }
    }
  };

  return (
    <>
      <div>
        <div>{BoothInfo[selectedBooth - 1]}</div>
        <div>부스 체험 후 축기단에게 화면을 보여주세요.</div>
      </div>
      <input type="password" value={pwData} onChange={(e) => handleInputChange(e.target.value)}></input>
      {isWrongPw && <div>잘못된 비밀번호</div>}
      <div>
        <button
          onClick={() => {
            setOpenModal(false);
          }}
        >
          닫기
        </button>
        <button
          onClick={() => {
            handleClickEnterPwButton();
          }}
        >
          비밀번호 확인
        </button>
      </div>
    </>
  );
};

export default BeforGetStampModalContent;
