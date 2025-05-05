import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { DateDropDown } from '../../../../components/common/DropDown/DateDropDown';
import { Option } from '../../../../data/options';
import Modal from '../../../../components/Modal/Modal';
import StampBoardBox from './StampBoardBox';
import BeforGetStampModalContent from './boothStampModal/BeforGetStampModalContent';
import AfterGetStampModalContent from './boothStampModal/AfterGetStampModalContent';
import { stampBoardInfo } from '../../../../services/apis/stamp/stampBoardInfo';
import { userInfo } from '../../../../services/apis/stamp/userInfo';
import RewardGaugeBar from './gaugeBar/RewardGaugeBer';
import NewRewardGaugeBar from './gaugeBar/NewRewardGaugeBar';
import RewardInfoModal from './rewardStampModal/RewardInfoModal';
import PwPushModal from './rewardStampModal/PwPushModal';

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
        // 데이터 가져오기 실패시 다시 로그인 화면으로
        window.location.href = '/stamp/auth';
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (stampData.length === 0) return;

    const stampBoardDataWithType = stampData.find((item) => item.type === selectedDate.value);

    if (stampBoardDataWithType) {
      // 부스 도장 받았는지 여부 체크
      const isClearedData: Record<number, boolean> = {};
      stampBoardDataWithType.isBoothClear.forEach((booth) => {
        isClearedData[booth.boothId] = booth.isClear;
      });
      setIsCleared(isClearedData);

      // 보상 받았는지 여부
      setIsRewarded({
        1: stampBoardDataWithType.firstReward,
        2: stampBoardDataWithType.secondReward,
        3: stampBoardDataWithType.thirdReward,
      });
    }
  }, [selectedDate, stampData]);

  // 축기단 부스 모달 오픈 여부
  const [openRewardModal, setOpenRewardModal] = useState(false);

  // 축기단 부스 모달 스탭
  const [rewardStampStep, setRewardStampStep] = useState(1);

  return (
    <Wrapper>
      <OutContentBox>
        <MyInfoLine>
          <DateDropDown
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            darkMode={false}
            customData={dateOptions}
          />
          <MyInfoBox>
            <div>{userData?.name}</div>
            <div>|</div>
            <div>{userData?.studentId}</div>
          </MyInfoBox>
        </MyInfoLine>
        <IntroRewardLine>
          <IntroBox>
            <div>부스를 돌며 열쇠를 모아</div>
            <div>항해를 시작해 보세요!</div>
          </IntroBox>
          <RewardBox>
            <div>상품 응모까지...</div>
            <BarWrapper>
              <NewRewardGaugeBar isCleared={isCleared} isRewarded={isRewarded} boardType={selectedDate.value} />
            </BarWrapper>
          </RewardBox>
          <GetRewardText onClick={() => setOpenRewardModal(true)}>상품 수령하기</GetRewardText>
        </IntroRewardLine>
        <StampBoardBox
          isCleared={isCleared}
          setSelectedBooth={setSelectedBooth}
          setOpenModal={setOpenModal}
          selectedDate={selectedDate}
          isRewarded={isRewarded}
          setStampData={setStampData}
          boothInfo={BoothInfo}
        ></StampBoardBox>
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
                setStampData={setStampData}
              />
            )}
          </Modal>
        )}

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
      </OutContentBox>

      <WaveWrapper>
        <WaveBox>
          <WaveImg src="/images/wave/wave_default.png" alt="wave_op" />
        </WaveBox>
        <ColorBox />
      </WaveWrapper>
    </Wrapper>
  );
};

export default StampBoard;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 40px - 83px);
  justify-content: space-between;
  overflow-y: auto;
  position: relative;
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
  height: 32px;
  width: 155px;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 8px;
  background: #f3f4f6;
  color: #101828;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
`;

const IntroRewardLine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const RewardBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  color: #364153;
  font-size: 14px;
  font-weight: 600;
`;

const BarWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-right: 20px;
`;

const OutContentBox = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const ColorBox = styled.div`
  width: 100%;
  flex-grow: 1;
  min-height: calc(100vh - 200px - 230px - 120px - 40px);
  background-color: #f3f9ff;
`;

const WaveWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  pointer-events: none;
`;

const WaveBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 230px;
  overflow-y: hidden;
`;

const WaveImg = styled.img`
  display: flex;
  width: 100%;
`;

const IntroBox = styled.div`
  display: flex;
  font-size: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  width: 100%;
  height: 100px;
`;

const GetRewardText = styled.div`
  color: #6a7282;
  font-size: 14px;
  font-weight: 400;
`;
