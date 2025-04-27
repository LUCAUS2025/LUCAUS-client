import React, { useState } from 'react';
import { styled } from 'styled-components';
import { DateDropDown } from '../../../../components/common/DropDown/DateDropDown';
import { Option } from '../../../../data/options';
import EachBooth from './EachBooth';
import Modal from '../../../../components/Modal/Modal';

const dateOptions: Option[] = [
  { label: '19, 20일', value: 1 },
  { label: '21일', value: 2 },
];

const BoothInfo = ['1번부스', '2번부스', '3번부스', '4번부스', '5번부스', '6번부스', '7번부스', '8번부스', '9번부스'];

const StampBoard = () => {
  const [selectedDate, setSelectedDate] = useState<Option>(dateOptions[0]);

  const [openModal, setOpenModal] = useState(false);

  const [selectedBooth, setSelectedBooth] = useState(1);

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

  const handleClickBooth = (index: number) => {
    setSelectedBooth(index);
    setOpenModal(true);
  };

  const handleClickEnterPwButton = (index: number) => {
    setIsCleared((prev) => ({
      ...prev,
      [index]: true,
    }));
    setOpenModal(false);
  };

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
        <StampBoardBox>
          <SideBoothLine>
            <EachBooth isCleared={isCleared} index={1} isCenterBooth={false} onClick={handleClickBooth} />
            <EachBooth isCleared={isCleared} index={2} isCenterBooth={false} onClick={handleClickBooth} />
            <EachBooth isCleared={isCleared} index={3} isCenterBooth={false} onClick={handleClickBooth} />
            <EachBooth isCleared={isCleared} index={4} isCenterBooth={false} onClick={handleClickBooth} />
          </SideBoothLine>
          <CenterBoothLine>
            <WideBooth>축구골대</WideBooth>
            <EachBooth isCleared={isCleared} index={5} isCenterBooth={true} onClick={handleClickBooth} />
            <WideBooth>축기단부스</WideBooth>
          </CenterBoothLine>
          <SideBoothLine>
            <EachBooth isCleared={isCleared} index={6} isCenterBooth={false} onClick={handleClickBooth} />
            <EachBooth isCleared={isCleared} index={7} isCenterBooth={false} onClick={handleClickBooth} />
            <EachBooth isCleared={isCleared} index={8} isCenterBooth={false} onClick={handleClickBooth} />
            <EachBooth isCleared={isCleared} index={9} isCenterBooth={false} onClick={handleClickBooth} />
          </SideBoothLine>
        </StampBoardBox>
      </ContentBox>
      {openModal && (
        <Modal isShort={true}>
          {isCleared[selectedBooth] ? (
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
          ) : (
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

const StampBoardBox = styled.div`
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
