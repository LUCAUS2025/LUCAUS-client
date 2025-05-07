import React, { SetStateAction } from 'react';

interface Props {
  setOpenRewardInfoModal: React.Dispatch<SetStateAction<boolean>>;
  boardType: number | string;
}

const RewardInfoModal = ({ setOpenRewardInfoModal, boardType }: Props) => {
  return (
    <div>
      <div>상품 수령/응모하기</div>
      <div>도장을 모은 만큼 상품 응모가 가능합니다.</div>
      {boardType == 1 ? (
        <div>
          <div>3개:간식</div>
          <div>5개:추첨 상품</div>
          <div>7개:응모 상품</div>
        </div>
      ) : (
        <div>
          <div>2개:간식</div>
          <div>4개:추첨 상품</div>
          <div>6개:응모 상품</div>
        </div>
      )}

      <div>
        <button
          onClick={() => {
            setOpenRewardInfoModal(false);
          }}
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default RewardInfoModal;
