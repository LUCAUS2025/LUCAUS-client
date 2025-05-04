import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface BaseLayerProps {
  children: ReactNode;
  backgroundImgSrc?: string;
}

export const BaseLayer: React.FC<BaseLayerProps> = ({ children, backgroundImgSrc }) => {
  return (
    <Wrapper>
      <Background $backgroundImgSrc={backgroundImgSrc} />
      <Content>{children}</Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 40vh;
  overflow: hidden;
`;

const Background = styled.div<{ $backgroundImgSrc?: string }>`
  position: absolute;
  inset: 0;
  background-image: ${({ $backgroundImgSrc }) => ($backgroundImgSrc ? `url(${$backgroundImgSrc})` : 'none')};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  //user-select: none;
  //-webkit-user-drag: none;
  //pointer-events: none;
  //touch-action: none;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;
