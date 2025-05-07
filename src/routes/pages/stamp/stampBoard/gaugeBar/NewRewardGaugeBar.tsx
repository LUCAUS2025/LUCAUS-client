import { styled } from 'styled-components';
import ShipIcon from './ShipIcon';

interface Props {
  isCleared: Record<number, boolean>;
  isRewarded: Record<number, boolean>;
  boardType: number | string;
}

// 1,2일차 - 3/5/7
// 3일차 - 2/4/6

const NewRewardGaugeBar = ({ isCleared, isRewarded, boardType }: Props) => {
  // 초기값이 비어있는 경우 방어
  const isClearedValues = Object.values(isCleared);
  const clearedCount = isClearedValues.length > 0 ? isClearedValues.filter(Boolean).length : 0;

  let progressPercent = '0%';
  if (boardType == 1) {
    // 조건 기반 게이지 계산
    if (clearedCount === 1) progressPercent = '8%';
    else if (clearedCount === 2) progressPercent = '15%';
    else if (clearedCount === 3) progressPercent = '25%';
    else if (clearedCount === 4) progressPercent = '45%';
    else if (clearedCount === 5) progressPercent = '60%';
    else if (clearedCount === 6) progressPercent = '77%';
    else if (clearedCount >= 7) progressPercent = '90%';
  } else {
    // type 2인 경우
    // 조건 기반 게이지 계산
    if (clearedCount === 1) progressPercent = '14%';
    else if (clearedCount === 2) progressPercent = '25%';
    else if (clearedCount === 3) progressPercent = '44%';
    else if (clearedCount === 4) progressPercent = '60%';
    else if (clearedCount === 5) progressPercent = '75%';
    else if (clearedCount >= 6) progressPercent = '90%';
  }

  return (
    <GaugeWrapper>
      <GaugeBarBackground />
      <GaugeBarFill style={{ width: progressPercent }} />
      <StepContainer>
        <StepCircle active={isRewarded[1]}>
          <ShipIcon color={isRewarded[1] ? '#1447E6' : '#D1D5DC'} />
        </StepCircle>
        <StepCircle active={isRewarded[2]}>
          <ShipIcon color={isRewarded[2] ? '#1447E6' : '#D1D5DC'} />
        </StepCircle>
        <StepCircle active={isRewarded[3]}>
          <ShipIcon color={isRewarded[3] ? '#1447E6' : '#D1D5DC'} />
        </StepCircle>
      </StepContainer>
    </GaugeWrapper>
  );
};

export default NewRewardGaugeBar;

const GaugeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GaugeBarBackground = styled.div`
  position: absolute;
  top: 50%;
  left: 5%;
  width: 90%;
  height: 24px;
  background-color: #f3f4f6;
  border-radius: 24px;
  transform: translateY(-50%);
  z-index: 0;
`;

const GaugeBarFill = styled.div`
  position: absolute;
  top: 50%;
  left: 5%;
  height: 24px;
  background-color: #1447e6;
  border-radius: 24px;
  transform: translateY(-50%);
  z-index: 1;
  transition: width 0.3s ease;
`;

const GaugeBar = styled.div<{ active: boolean }>`
  position: absolute;
  top: 50%;
  left: 5%;
  width: 90%;
  height: 24px;
  background-color: ${({ active }) => (active ? '#1447e6' : '#F3F4F6')};
  border-radius: 24px;
  transform: translateY(-50%);
  z-index: 0;
`;

const StepCircle = styled.div<{ active: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  //border: 1px solid ${({ active }) => (active ? '#1447e6' : '#D1D5DC')};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
`;

const StepContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-left: 25%;
  align-items: center;
  position: relative;
  z-index: 3;
`;
