import React, { useState } from 'react';
import { styled } from 'styled-components';
import { DateDropDown } from '../../../../components/common/DropDown/DateDropDown';
import { Option } from '../../../../data/options';
import EachBooth from './EachBooth';
import Modal from '../../../../components/Modal/Modal';
import StampBoardBox from './StampBoardBox';
import BeforGetStampModalContent from './BeforGetStampModalContent';
import AfterGetStampModalContent from './AfterGetStampModalContent';

// 드롭다운 옵션 리스트
const dateOptions: Option[] = [
  { label: '19, 20일', value: 1 },
  { label: '21일', value: 2 },
];

// 부스 이름 여기서 변경하기
const BoothInfo = ['1번부스', '2번부스', '3번부스', '4번부스', '5번부스', '6번부스', '7번부스', '8번부스', '9번부스'];

const StampBoard = () => {
  // 현재 어떤 드롭다운 선택되었는지
  const [selectedDate, setSelectedDate] = useState<Option>(dateOptions[0]);

  // 모달 상태관리
  const [openModal, setOpenModal] = useState(false);

  // 어떤 부스가 선택되었는지 관리
  const [selectedBooth, setSelectedBooth] = useState(1);

  // 부스 클리어 여부 -> 나중에 백 연동해서 백 값으로 갈아치우기 해야함
  const [isCleared, setIsCleared] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
  });

  return (
    <Wrapper>
      <MyInfoLine>
        <DateDropDown selectedDate={selectedDate} setSelectedDate={setSelectedDate} darkMode={false} />
        <div>내정보</div>
        <MyInfoBox>
          <div>홍길동</div>
          <div>20250000</div>
        </MyInfoBox>
      </MyInfoLine>
      <IntroRewardLine>
        <IntroButton>광장기획전 소개</IntroButton>
        <RewardBox>
          <EachReward>1단계</EachReward>
          <EachReward>2단계</EachReward>
          <EachReward>3단계</EachReward>
        </RewardBox>
      </IntroRewardLine>
      <ContentBox>
        <StampBoardBox
          isCleared={isCleared}
          setSelectedBooth={setSelectedBooth}
          setOpenModal={setOpenModal}
        ></StampBoardBox>
      </ContentBox>
      {openModal && (
        <Modal isShort={true}>
          {isCleared[selectedBooth] ? (
            <AfterGetStampModalContent
              BoothInfo={BoothInfo}
              selectedBooth={selectedBooth}
              setOpenModal={setOpenModal}
            />
          ) : (
            <BeforGetStampModalContent
              BoothInfo={BoothInfo}
              selectedBooth={selectedBooth}
              setOpenModal={setOpenModal}
              setIsCleared={setIsCleared}
            />
          )}
        </Modal>
      )}
    </Wrapper>
  );
};

export default StampBoard;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MyInfoLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const MyInfoBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const IntroRewardLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const RewardBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 202px;
  justify-content: space-between;
  align-items: center;
`;

const EachReward = styled.div`
  display: flex;
  flex-direction: row;
  width: 33%;
  justify-content: space-between;
  align-items: center;
`;

const IntroButton = styled.button`
  width: 118px;
  height: 36px;
`;

// 이거로 반응형 구현
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 120px - 70px);
  overflow-y: auto;
`;
