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
import RewardedModal from './rewardStampModal/RewardedModal';

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
const BoothInfo = [
  '너프건 탕탕',
  '출렁이는 갑판',
  '럭키 복불복',
  '문제적 푸앙',
  '난파선 수리 대작전',
  '금은보화를 얻어라!',
  '운명의 해적섬',
  '누가 맹수 소리를 내었는가',
  '미션 달리기',
  '째깍째깍 시한폭탄 해체하기!',
  '이 거지 같은 콩섬에 버려지다니',
  '바다 위 생존 상황!',
  '사랑은 돌아오는 거야',
  '바다 식구를 찾아라!',
  '관찰력 100단 선원으로 살아남기!',
  '오늘은 낚시왕',
  '바람 위의 항해',
  '뱃멀미 살아남기!',
];

const StampBoard = () => {
  // 드롭다운 옵션 리스트
  const dateOptions: Option[] = [
    { label: '19, 20일', value: 1 },
    { label: '21일', value: 2 },
  ];

  // const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setViewportHeight(window.innerHeight);
  //   };

  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  // ↓ Wrapper에 전달할 실제 높이 계산
  // const wrapperHeight = `${viewportHeight - 40 - 80}px`;

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
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false,
    19: false,
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
        localStorage.removeItem('accessToken');
        alert('로그아웃 되었습니다. 다시 로그인해주세요.');
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

  // 축기단 부스 상품 소개 모달 오픈 여부
  const [openRewardInfoModal, setOpenRewardInfoModal] = useState(false);

  // 축기단 부스 pw 모달
  const [openRewardPwModal, setOpenRewardPwModal] = useState(false);

  // 축기단 부스 모달 스탭
  const [rewardStampStep, setRewardStampStep] = useState(1);

  // 내 정보 몇번 클릭했는지 관리
  const [clickedNumInfo, setClickedNumInfo] = useState(0);

  // 축기단 부스 이미 수령한 경우
  const [openRewardedModal, setOpenRewardedModal] = useState(false);

  // 클릭한 축기단 상품 부스 번호
  const [clickedRewardDegree, setClickedRewardDegree] = useState(1);

  useEffect(() => {
    if (clickedNumInfo == 3) {
      localStorage.removeItem('accessToken');
      window.location.reload();
    }
  }, [clickedNumInfo]);

  return (
    <Wrapper>
      <OutContentBox>
        <MyInfoLine>
          <DateDropDown
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            darkMode={false}
            customData={dateOptions}
            isLong={true}
          />
          <MyInfoBox onClick={() => setClickedNumInfo(clickedNumInfo + 1)}>
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
              <NewRewardGaugeBar
                isCleared={isCleared}
                isRewarded={isRewarded}
                boardType={selectedDate.value}
                setOpenRewardPwModal={setOpenRewardPwModal}
                setOpenRewardedModal={setOpenRewardedModal}
                setClickedRewardDegree={setClickedRewardDegree}
              />
            </BarWrapper>
          </RewardBox>
          <GetRewardText onClick={() => setOpenRewardInfoModal(true)}>상품은 언제 받을 수 있나요?</GetRewardText>
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
            {(() => {
              const boothIndex = Number(selectedDate.value) === 2 ? selectedBooth + 10 : selectedBooth;

              return isCleared[boothIndex] ? (
                <AfterGetStampModalContent
                  BoothInfo={BoothInfo}
                  selectedBooth={boothIndex}
                  setOpenModal={setOpenModal}
                  boardType={selectedDate.value}
                />
              ) : (
                <BeforGetStampModalContent
                  BoothInfo={BoothInfo}
                  selectedBooth={boothIndex}
                  setOpenModal={setOpenModal}
                  setIsCleared={setIsCleared}
                  selectedDate={selectedDate}
                  setStampData={setStampData}
                />
              );
            })()}
          </Modal>
        )}

        {openRewardInfoModal && (
          <Modal isShort={false}>
            <RewardInfoModal setOpenRewardInfoModal={setOpenRewardInfoModal} boardType={selectedDate.value} />
          </Modal>
        )}

        {openRewardPwModal && (
          <Modal isShort={false}>
            <PwPushModal
              setOpenRewardPwModal={setOpenRewardPwModal}
              selectedDate={selectedDate}
              isRewarded={isRewarded}
              setStampData={setStampData}
            />
          </Modal>
        )}

        {openRewardedModal && (
          <Modal isShort={false}>
            <RewardedModal setOpenRewardedModal={setOpenRewardedModal} clickedRewardDegree={clickedRewardDegree} />
          </Modal>
        )}
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
  height: calc(100vh + 40px);
  justify-content: space-between;
  overflow-y: hidden;
  position: relative;
`;

const MyInfoLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
  width: 100%;
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
  overflow-y: hidden;
  overflow-x: hidden;
  justify-content: center;
  align-items: center;
`;

const ColorBox = styled.div`
  width: 100%;
  flex-grow: 1;
  min-height: calc(100vh - 200px - 230px - 40px);
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
  color: var(--All-Colors-gray-500, #6a7282);
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: auto;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
`;
