import React, { JSX } from 'react';
import { styled } from 'styled-components';
import StampKey from '../keyIcons/StampKey';
import StampKnife from '../keyIcons/StampKnife';
import StampHook from '../keyIcons/StampHook';
import StampSkeleton from '../keyIcons/StampSkeleton';
import StampHandle from '../keyIcons/StampHandle';
import StampMap from '../keyIcons/StampMap';
import StampIsland from '../keyIcons/StampIsland';
import StampShip from '../keyIcons/StampShip';
import StampTreasure from '../keyIcons/StampTreasure';

interface Props {
  BoothInfo: string[];
  selectedBooth: number;
  setOpenModal: (open: boolean) => void;
  boardType: number | string;
}

type IconMapping = {
  1: { all: JSX.Element };
  2: Record<number, JSX.Element>;
};

const iconMapping: IconMapping = {
  1: { all: <StampKey color="#1447e6" /> },
  2: {
    11: <StampKey color="#1447e6" />,
    12: <StampKnife color="#1447e6" />,
    13: <StampHook color="#1447e6" />,
    14: <StampSkeleton color="#1447e6" />,
    15: <StampHandle color="#1447e6" />,
    16: <StampMap color="#1447e6" />,
    17: <StampIsland color="#1447e6" />,
    18: <StampShip color="#1447e6" />,
    19: <StampTreasure color="#1447e6" />,
  },
};

const AfterGetStampModalContent = ({ BoothInfo, selectedBooth, setOpenModal, boardType }: Props) => {
  const boothIndex = Number(selectedBooth);
  const boardIndex = Number(boardType);
  const icon = boardIndex === 1 ? iconMapping[1].all : (iconMapping[2][boothIndex] ?? <StampKey color="#d9d9d9" />);

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>{BoothInfo[boothIndex - 1]}</Title>
        <SubTitle>부스 참여를 완료하여 키를 획득하였습니다.</SubTitle>
      </TitleWrapper>
      <StepCircle>{icon}</StepCircle>
      <StyledButton
        onClick={() => {
          setOpenModal(false);
        }}
      >
        닫기
      </StyledButton>
    </Wrapper>
  );
};

export default AfterGetStampModalContent;

const Wrapper = styled.div`
  width: 93%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 80%;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Title = styled.div`
  color: #030712;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
`;

const SubTitle = styled.div`
  color: #6a7282;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

const StyledButton = styled.button`
  display: flex;
  height: 48px;
  width: 100%;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 12px;
  background-color: #d1d5dc;
  color: '#6A7282';
`;
const StepCircle = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: white;
  border: 6px solid #1447e6;
  display: flex;
  justify-content: center;
  align-items: center;
`;
