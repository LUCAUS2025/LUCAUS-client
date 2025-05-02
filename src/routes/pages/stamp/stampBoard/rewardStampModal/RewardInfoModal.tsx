import React, { SetStateAction } from 'react';

interface Props {
  setOpenRewardModal: React.Dispatch<SetStateAction<boolean>>;
  setRewardStampStep: React.Dispatch<SetStateAction<number>>;
}

const RewardInfoModal = ({ setOpenRewardModal, setRewardStampStep }: Props) => {
  return (
    <div>
      <div>축제기획단 부스</div>
      <div>스탬프를 모은 만큼 상품 응모가 가능합니다.</div>
      <div>
        <div>
          <div>1,2일차 도장</div>
          <div>~3개</div>
          <div>|</div>
          <div>선물 세트1</div>
        </div>
        <div>
          <div>1,2일차 도장</div>
          <div>3~5개</div>
          <div>|</div>
          <div>선물 세트2</div>
        </div>
        <div>
          <div>1,2일차 도장</div>
          <div>5~9개</div>
          <div>|</div>
          <div>선물 세트3</div>
        </div>
      </div>
      <div>-----</div>
      <div>
        <div>상품 응모 현황</div>
        <div>
          <div>1단계</div>
          <div>2단계</div>
          <div>3단계</div>
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            setOpenRewardModal(false);
          }}
        >
          닫기
        </button>
        <button
          onClick={() => {
            setRewardStampStep(2);
          }}
        >
          상품 응모 확인받기
        </button>
      </div>
    </div>
  );
};

export default RewardInfoModal;
