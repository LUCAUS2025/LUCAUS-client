import React, { SetStateAction, useState } from 'react';
import { styled } from 'styled-components';
import EachBooth from './EachBooth';
import StampKey from './keyIcons/StampKey';
import StampKnife from './keyIcons/StampKnife';
import StampHook from './keyIcons/StampHook';
import StampSkeleton from './keyIcons/StampSkeleton';
import StampHandle from './keyIcons/StampHandle';
import StampMap from './keyIcons/StampMap';
import StampIsland from './keyIcons/StampIsland';
import StampShip from './keyIcons/StampShip';
import StampTreasure from './keyIcons/StampTreasure';

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

  return (
    <Wrapper>
      <BoothLine>
        <EachBooth
          isCleared={isCleared}
          index={1}
          isCenterBooth={false}
          onClick={handleClickBooth}
          boothName={boothInfo[0]}
          customPadding={'30px'}
          childNode={
            selectedDate.value == 1 ? (
              <StampKey color={isCleared[1] ? '#1447E6' : '#D0DAFA'} />
            ) : (
              <StampSkeleton color={isCleared[11] ? '#1447E6' : '#D0DAFA'} />
            )
          }
          boardType={selectedDate.value == 1 ? 1 : 2}
        />
        <EachBooth
          isCleared={isCleared}
          index={2}
          isCenterBooth={false}
          onClick={handleClickBooth}
          boothName={boothInfo[1]}
          customPadding={'0px'}
          childNode={
            selectedDate.value == 1 ? (
              <StampKey color={isCleared[2] ? '#1447E6' : '#D0DAFA'} />
            ) : (
              <StampIsland color={isCleared[12] ? '#1447E6' : '#D0DAFA'} />
            )
          }
          boardType={selectedDate.value == 1 ? 1 : 2}
        />
      </BoothLine>
      <BoothLine>
        <EachBooth
          isCleared={isCleared}
          index={3}
          isCenterBooth={false}
          onClick={handleClickBooth}
          boothName={boothInfo[2]}
          customPadding={'-10px'}
          childNode={
            selectedDate.value == 1 ? (
              <StampKey color={isCleared[3] ? '#1447E6' : '#D0DAFA'} />
            ) : (
              <StampKnife color={isCleared[13] ? '#1447E6' : '#D0DAFA'} />
            )
          }
          boardType={selectedDate.value == 1 ? 1 : 2}
        />
        <EachBooth
          isCleared={isCleared}
          index={4}
          isCenterBooth={false}
          onClick={handleClickBooth}
          boothName={boothInfo[3]}
          customPadding={'30px'}
          childNode={
            selectedDate.value == 1 ? (
              <StampKey color={isCleared[4] ? '#1447E6' : '#D0DAFA'} />
            ) : (
              <StampTreasure color={isCleared[14] ? '#1447E6' : '#D0DAFA'} />
            )
          }
          boardType={selectedDate.value == 1 ? 1 : 2}
        />
        <EachBooth
          isCleared={isCleared}
          index={5}
          isCenterBooth={false}
          onClick={handleClickBooth}
          boothName={boothInfo[4]}
          customPadding={'0px'}
          childNode={
            selectedDate.value == 1 ? (
              <StampKey color={isCleared[5] ? '#1447E6' : '#D0DAFA'} />
            ) : (
              <StampKey color={isCleared[15] ? '#1447E6' : '#D0DAFA'} />
            )
          }
          boardType={selectedDate.value == 1 ? 1 : 2}
        />
        <EachBooth
          isCleared={isCleared}
          index={6}
          isCenterBooth={false}
          onClick={handleClickBooth}
          boothName={boothInfo[5]}
          customPadding={'20px'}
          childNode={
            selectedDate.value == 1 ? (
              <StampKey color={isCleared[6] ? '#1447E6' : '#D0DAFA'} />
            ) : (
              <StampHook color={isCleared[16] ? '#1447E6' : '#D0DAFA'} />
            )
          }
          boardType={selectedDate.value == 1 ? 1 : 2}
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
          childNode={
            selectedDate.value == 1 ? (
              <StampKey color={isCleared[7] ? '#1447E6' : '#D0DAFA'} />
            ) : (
              <StampMap color={isCleared[17] ? '#1447E6' : '#D0DAFA'} />
            )
          }
          boardType={selectedDate.value == 1 ? 1 : 2}
        />
        <EachBooth
          isCleared={isCleared}
          index={8}
          isCenterBooth={false}
          onClick={handleClickBooth}
          boothName={boothInfo[7]}
          customPadding={'0px'}
          childNode={
            selectedDate.value == 1 ? (
              <StampKey color={isCleared[8] ? '#1447E6' : '#D0DAFA'} />
            ) : (
              <StampShip color={isCleared[18] ? '#1447E6' : '#D0DAFA'} />
            )
          }
          boardType={selectedDate.value == 1 ? 1 : 2}
        />
        <EachBooth
          isCleared={isCleared}
          index={9}
          isCenterBooth={false}
          onClick={handleClickBooth}
          boothName={boothInfo[8]}
          customPadding={'30px'}
          childNode={
            selectedDate.value == 1 ? (
              <StampKey color={isCleared[9] ? '#1447E6' : '#D0DAFA'} />
            ) : (
              <StampHandle color={isCleared[19] ? '#1447E6' : '#D0DAFA'} />
            )
          }
          boardType={selectedDate.value == 1 ? 1 : 2}
        />
      </BoothLine>
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
  height: calc(100vh - 200px - 190px - 35px);
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
