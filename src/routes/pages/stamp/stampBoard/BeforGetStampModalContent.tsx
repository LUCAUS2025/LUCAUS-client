import React from 'react';

interface Props {
  BoothInfo: string[];
  selectedBooth: number;
  setOpenModal: (open: boolean) => void;
  setIsCleared: React.Dispatch<React.SetStateAction<Record<number, boolean>>>;
}

const BeforGetStampModalContent = ({ BoothInfo, selectedBooth, setOpenModal, setIsCleared }: Props) => {
  // 비밀번호 입력 후 제출 버튼
  // 추후 백 api 연결 필요
  const handleClickEnterPwButton = (index: number) => {
    setIsCleared((prev) => ({
      ...prev,
      [index]: true,
    }));
    setOpenModal(false);
  };
  return (
    <>
      <div>
        <div>{BoothInfo[selectedBooth - 1]}</div>
        <div>부스 체험 후 축기단에게 화면을 보여주세요.</div>
      </div>
      <input></input>
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
            handleClickEnterPwButton(selectedBooth);
          }}
        >
          비밀번호 확인
        </button>
      </div>
    </>
  );
};

export default BeforGetStampModalContent;
