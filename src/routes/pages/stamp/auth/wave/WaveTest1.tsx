import React from 'react';
import styled, { keyframes } from 'styled-components';

// 좌우 이동 애니메이션 정의
const moveWave = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-30px); }
  50% { transform: translateX(15px); }
  75% { transform: translateX(-10px); }
  100% { transform: translateX(0); }
`;

const moveWaveSoft = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(-10px); }
  100% { transform: translateX(0); }
`;

const moveWaveSharp = keyframes`
  0% { transform: translateX(0); }
  30% { transform: translateX(25px); }
  60% { transform: translateX(-20px); }
  100% { transform: translateX(0); }
`;

const WaveWrapper = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
  background-color: #ffffff;
`;

const WaveImage1 = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  animation: ${moveWave} 5s ease-in-out infinite;
  animation-delay: 0s;
`;

const WaveImage2 = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  animation: ${moveWaveSoft} 6s ease-in-out infinite;
  animation-delay: 1.5s;
`;

const WaveImage3 = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  animation: ${moveWaveSharp} 4s ease-in-out infinite;
  animation-delay: 0.75s;
`;

const WaveTest1 = () => {
  return (
    <WaveWrapper>
      <WaveImage3 src="/images/wave/waveV3.png" alt="wave" />
      <WaveImage2 src="/images/wave/waveV2.png" alt="wave" />
      <WaveImage1 src="/images/wave/waveV1.png" alt="wave" />
    </WaveWrapper>
  );
};

export default WaveTest1;
