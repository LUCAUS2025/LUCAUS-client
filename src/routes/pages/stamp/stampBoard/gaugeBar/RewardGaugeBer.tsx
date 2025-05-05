import { styled } from 'styled-components';
import ShipIcon from './ShipIcon';

const RewardGaugeBar = ({ currentStep }: { currentStep: number }) => {
  return (
    <GaugeWrapper>
      <GaugeBackground>
        <GaugeFill style={{ width: `${(currentStep - 1) * 50}%` }} />
      </GaugeBackground>
      <StepWrapper>
        {[1, 2, 3].map((step) => (
          <StepCircle key={step} active={currentStep >= step}>
            <ShipIcon key={step} color={currentStep >= step ? '#1447E6' : '#F3F4F6'}></ShipIcon>
          </StepCircle>
        ))}
      </StepWrapper>
    </GaugeWrapper>
  );
};

export default RewardGaugeBar;

const GaugeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  border: 1px solid red;
`;

const GaugeBackground = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  right: 10%;
  height: 10px;
  background-color: black;
  border-radius: 5px;
  z-index: 0;
`;

const GaugeFill = styled.div`
  height: 24px;
  background-color: #1447e6;
  border-radius: 5px;
`;

const StepWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 0 10%;
  z-index: 1;
`;

const StepCircle = styled.div<{ active: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  border: 2px solid ${({ active }) => (active ? '#1447e6' : '#d0d5dd')};
  display: flex;
  justify-content: center;
  align-items: center;
`;
