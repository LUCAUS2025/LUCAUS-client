import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { DateDropDown } from '../../../../components/common/DropDown/DateDropDown';
import { Option } from '../../../../data/options';
import EachBooth from './EachBooth';
import Modal from '../../../../components/Modal/Modal';
import StampBoardBox from './StampBoardBox';
import BeforGetStampModalContent from './boothStampModal/BeforGetStampModalContent';
import AfterGetStampModalContent from './boothStampModal/AfterGetStampModalContent';
import { stampBoardInfo } from '../../../../services/apis/stamp/stampBoardInfo';
import { userInfo } from '../../../../services/apis/stamp/userInfo';

interface BoothClear {
  boothId: number;
  isClear: boolean;
}
// 백에서 받아오는 데이터 형식
interface StampBoardDayData {
  id: number;
  type: number;
  firstReward: boolean;
  secondReward: boolean;
  thirdReward: boolean;
  isBoothClear: BoothClear[];
}

interface UserInfoData {
  name: string;
  studentId: string;
}

// 부스 이름 여기서 변경하기
const BoothInfo = ['1번부스', '2번부스', '3번부스', '4번부스', '5번부스', '6번부스', '7번부스', '8번부스', '9번부스'];

const StampBoard = () => {
  // 드롭다운 옵션 리스트
  const dateOptions: Option[] = [
    { label: '19, 20일', value: 1 },
    { label: '21일', value: 2 },
  ];

  // 현재 어떤 드롭다운 선택되었는지
  const [selectedDate, setSelectedDate] = useState<Option>(dateOptions[0]);

  // 모달 상태관리
  const [openModal, setOpenModal] = useState(false);

  // 어떤 부스가 선택되었는지 관리
  const [selectedBooth, setSelectedBooth] = useState(1);

  // 부스 클리어 여부
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

  // 상품 수령 여부
  const [isRewarded, setIsRewarded] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false,
  });

  // 백에서 받아온 스탬프 정보
  const [stampData, setStampData] = useState<StampBoardDayData[]>([]);

  // 백에서 받아온 유저 정보
  const [userData, setUserData] = useState<UserInfoData>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 스탬프 정보 받아오기
        const responseStampInfo = await stampBoardInfo();
        setStampData(responseStampInfo.result);

        // 유저 정보 받아오기
        const responseUserInfo = await userInfo();
        setUserData(responseUserInfo.result);
      } catch (error) {
        alert('다시 로그인 해주세요.');
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (stampData.length === 0) return;

    const matchedData = stampData.find((item) => item.type === selectedDate.value);

    if (matchedData) {
      // 부스 도장 받았는지 여부 체크
      const clearedMap: Record<number, boolean> = {};
      matchedData.isBoothClear.forEach((booth) => {
        clearedMap[booth.boothId] = booth.isClear;
      });
      setIsCleared(clearedMap);

      // 보상 받았는지 여부
      setIsRewarded({
        1: matchedData.firstReward,
        2: matchedData.secondReward,
        3: matchedData.thirdReward,
      });
    }
  }, [selectedDate, stampData]);

  return (
    <Wrapper>
      <MyInfoLine>
        <DateDropDown
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          darkMode={false}
          customData={dateOptions}
        />
        <div>내정보</div>
        <MyInfoBox>
          <div>{userData?.name}</div>
          <div>{userData?.studentId}</div>
        </MyInfoBox>
      </MyInfoLine>
      <IntroRewardLine>
        <IntroButton>광장기획전 소개</IntroButton>
        <RewardBox>
          {isRewarded[1] ? <div>1단계수령</div> : <EachReward>1단계미수령</EachReward>}
          {isRewarded[2] ? <div>2단계수령</div> : <EachReward>2단계미수령</EachReward>}
          {isRewarded[3] ? <div>3단계수령</div> : <EachReward>3단계미수령</EachReward>}
        </RewardBox>
      </IntroRewardLine>
      <ContentBox>
        <StampBoardBox
          isCleared={isCleared}
          setSelectedBooth={setSelectedBooth}
          setOpenModal={setOpenModal}
          selectedDate={selectedDate}
          isRewarded={isRewarded}
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
              selectedDate={selectedDate}
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
