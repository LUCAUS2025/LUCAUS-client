import React, { useState } from 'react';
import { styled } from 'styled-components';
import EachBooth from './EachBooth';
import Modal from '../../../../components/Modal/Modal';
import RewardInfoModal from './rewardStampModal/RewardInfoModal';
import PwPushModal from './rewardStampModal/PwPushModal';

interface Props {
  isCleared: Record<number, boolean>;
  setSelectedBooth: (boothNum: number) => void;
  setOpenModal: (open: boolean) => void;
  selectedDate: { label: string; value: number | string };
  isRewarded: Record<number, boolean>;
}

const StampBoardBox = ({ isCleared, setSelectedBooth, setOpenModal, selectedDate, isRewarded }: Props) => {
  // 부스 클릭시 실행할 함수
  const handleClickBooth = (index: number) => {
    setSelectedBooth(index);
    setOpenModal(true);
  };

  // 축기단 부스 모달 오픈 여부
  const [openRewardModal, setOpenRewardModal] = useState(false);

  // 축기단 부스 모달 스탭
  const [rewardStampStep, setRewardStampStep] = useState(1);

  return (
    <Wrapper>
      <SideBoothLine>
        <EachBooth isCleared={isCleared} index={1} isCenterBooth={false} onClick={handleClickBooth} />
        <EachBooth isCleared={isCleared} index={2} isCenterBooth={false} onClick={handleClickBooth} />
        <EachBooth isCleared={isCleared} index={3} isCenterBooth={false} onClick={handleClickBooth} />
        <EachBooth isCleared={isCleared} index={4} isCenterBooth={false} onClick={handleClickBooth} />
      </SideBoothLine>
      <CenterBoothLine>
        <WideBooth>축구골대</WideBooth>
        <EachBooth isCleared={isCleared} index={5} isCenterBooth={true} onClick={handleClickBooth} />
        <WideBooth
          onClick={() => {
            setOpenRewardModal(true);
          }}
        >
          축기단부스
        </WideBooth>
      </CenterBoothLine>
      <SideBoothLine>
        <EachBooth isCleared={isCleared} index={6} isCenterBooth={false} onClick={handleClickBooth} />
        <EachBooth isCleared={isCleared} index={7} isCenterBooth={false} onClick={handleClickBooth} />
        <EachBooth isCleared={isCleared} index={8} isCenterBooth={false} onClick={handleClickBooth} />
        <EachBooth isCleared={isCleared} index={9} isCenterBooth={false} onClick={handleClickBooth} />
      </SideBoothLine>
      {openRewardModal &&
        (rewardStampStep == 1 ? (
          <Modal isShort={false}>
            <RewardInfoModal setOpenRewardModal={setOpenRewardModal} setRewardStampStep={setRewardStampStep} />
          </Modal>
        ) : (
          <Modal isShort={true}>
            <PwPushModal
              setOpenRewardModal={setOpenRewardModal}
              setRewardStampStep={setRewardStampStep}
              selectedDate={selectedDate}
              isRewarded={isRewarded}
            />
          </Modal>
        ))}
    </Wrapper>
  );
};

export default StampBoardBox;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #d9d9d9;
  min-width: 343px;
  min-height: 450px;
  height: 90%;
  width: 90%;
  max-height: 700px;
  justify-content: space-evenly;
  align-items: center;
`;

const SideBoothLine = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  height: 75%;
  justify-content: space-between;
`;

const CenterBoothLine = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  height: 90%;
  justify-content: space-between;
  align-items: center;
`;

const WideBooth = styled.div`
  display: flex;
  width: 107px;
  height: 38px;
  justify-content: center;
  align-items: center;
  border: 1px solid blue;
`;
