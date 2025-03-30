import React from 'react';
import styled, { keyframes } from 'styled-components';

export const LoadingSpinner = () => {
  return <Loader />;
};

const spin = keyframes`
  100% {
    transform: rotate(1turn);
  }
`;

const Loader = styled.div`
  width: 48px;
  aspect-ratio: 1;
  display: grid;
  animation: ${spin} 1s infinite steps(8); /* ← 점 개수 8개로 조정 */
  -webkit-mask: conic-gradient(from 22.5deg, #0000, #000); /* 360 / 8 / 2 = 22.5 */
  mask: conic-gradient(from 22.5deg, #0000, #000);

  background:
    radial-gradient(closest-side at 50% 12.5%, #1447e6 90%, transparent) 50% 0 / 20% 80% repeat-y,
    radial-gradient(closest-side at 12.5% 50%, #1447e6 90%, transparent) 0 50% / 80% 20% repeat-x;

  &::before,
  &::after {
    content: '';
    grid-area: 1 / 1;
    background:
      radial-gradient(closest-side at 50% 12.5%, #1447e6 90%, transparent) 50% 0 / 20% 80% repeat-y,
      radial-gradient(closest-side at 12.5% 50%, #1447e6 90%, transparent) 0 50% / 80% 20% repeat-x;
  }

  &::before {
    transform: rotate(45deg); /* ← 360 / 8 = 45 */
  }

  &::after {
    transform: rotate(90deg);
  }
`;
