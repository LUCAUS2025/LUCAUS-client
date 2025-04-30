// components/AutoImageSlider.tsx
import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeAnimation = keyframes`
  0% { opacity: 1; }
  20% { opacity: 0; }
  100% { opacity: 0; }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
`;

const AnimatedImage = styled.img<{ index: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  animation: ${fadeAnimation} 10s linear infinite;
  animation-delay: ${({ index }) => index * 2}s;
`;

const AutoImageSlider = () => {
  const images = [
    '/images/wave/wave1.png',
    '/images/wave/wave2.png',
    '/images/wave/wave3.png',
    '/images/wave/wave4.png',
  ];

  return (
    <ImageWrapper>
      {images.map((src, i) => (
        <AnimatedImage key={i} src={src} index={i} />
      ))}
    </ImageWrapper>
  );
};

export default AutoImageSlider;
