import React from 'react';

interface Props {
  BoothInfo: string[];
  selectedBooth: number;
  setOpenModal: (open: boolean) => void;
}

const AfterGetStampModalContent = ({ BoothInfo, selectedBooth, setOpenModal }: Props) => {
  return (
    <>
      <div>
        <div>{BoothInfo[selectedBooth - 1]}</div>
        <div>부스 참여를 완료하여 키를 획득하였습니다!</div>
      </div>
      <div>아이콘 들어가야 함</div>
      <button
        onClick={() => {
          setOpenModal(false);
        }}
      >
        닫기
      </button>
    </>
  );
};

export default AfterGetStampModalContent;
