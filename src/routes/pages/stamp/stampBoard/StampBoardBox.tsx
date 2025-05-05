import React, { SetStateAction, useState } from 'react';
import { styled } from 'styled-components';
import EachBooth from './EachBooth';
import Modal from '../../../../components/Modal/Modal';
import RewardInfoModal from './rewardStampModal/RewardInfoModal';
import PwPushModal from './rewardStampModal/PwPushModal';

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
  isCleared: Record<number, boolean>;
  setSelectedBooth: (boothNum: number) => void;
  setOpenModal: (open: boolean) => void;
  selectedDate: { label: string; value: number | string };
  isRewarded: Record<number, boolean>;
  setStampData: React.Dispatch<SetStateAction<StampBoardDayData[]>>;
  boothInfo: string[];
}

const StampBoardBox = ({
  isCleared,
  setSelectedBooth,
  setOpenModal,
  selectedDate,
  isRewarded,
  setStampData,
  boothInfo,
}: Props) => {
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
      <BoothLine>
        <EachBooth
          isCleared={isCleared}
          index={1}
          isCenterBooth={false}
          onClick={handleClickBooth}
          boothName={boothInfo[0]}
          customPadding={'20px'}
        />
        <EachBooth
          isCleared={isCleared}
          index={2}
          isCenterBooth={false}
          onClick={handleClickBooth}
          boothName={boothInfo[1]}
          customPadding={'0px'}
        />
      </BoothLine>
      <BoothLine>
        <EachBooth
          isCleared={isCleared}
          index={3}
          isCenterBooth={false}
          onClick={handleClickBooth}
          boothName={boothInfo[2]}
          customPadding={'0px'}
        />
        <EachBooth
          isCleared={isCleared}
          index={4}
          isCenterBooth={false}
          onClick={handleClickBooth}
          boothName={boothInfo[3]}
          customPadding={'50px'}
        />
        <EachBooth
          isCleared={isCleared}
          index={5}
          isCenterBooth={false}
          onClick={handleClickBooth}
          boothName={boothInfo[4]}
          customPadding={'10px'}
        />
        <EachBooth
          isCleared={isCleared}
          index={6}
          isCenterBooth={false}
          onClick={handleClickBooth}
          boothName={boothInfo[5]}
          customPadding={'30px'}
        />
      </BoothLine>
      <BoothLine>
        <EachBooth
          isCleared={isCleared}
          index={7}
          isCenterBooth={false}
          onClick={handleClickBooth}
          boothName={boothInfo[6]}
          customPadding={'30px'}
        />
        <EachBooth
          isCleared={isCleared}
          index={8}
          isCenterBooth={false}
          onClick={handleClickBooth}
          boothName={boothInfo[7]}
          customPadding={'0px'}
        />
        <EachBooth
          isCleared={isCleared}
          index={9}
          isCenterBooth={false}
          onClick={handleClickBooth}
          boothName={boothInfo[8]}
          customPadding={'30px'}
        />
      </BoothLine>

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
              setStampData={setStampData}
            />
          </Modal>
        ))}
    </Wrapper>
  );
};

export default StampBoardBox;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 343px;
  width: 100%;
  min-height: 20vh;
  height: calc(100vh - 200px - 190px - 70px);
  justify-content: space-between;
  align-items: center;
  overflow-y: auto;
  margin-top: 40px;
  max-height: 400px;
`;

const BoothLine = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4vw;
`;
