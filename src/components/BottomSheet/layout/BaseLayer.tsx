import React, { ReactNode, useEffect } from 'react';
import styled from 'styled-components';

interface BaseLayerProps {
  children: ReactNode;
  backgroundImgSrc?: string;
}

export const BaseLayer: React.FC<BaseLayerProps> = ({ children, backgroundImgSrc }) => {
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVh();
    window.addEventListener('resize', setVh);
    return () => window.removeEventListener('resize', setVh);
  }, []);

  return (
    <Wrapper>
      {backgroundImgSrc && (
        <BackgroundImgContainer>
          <BackgroundImg src={backgroundImgSrc} alt="background" />
        </BackgroundImgContainer>
      )}
      <Content>{children}</Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  overflow: hidden;
  z-index: 0;
  background-color: #fafafa;
  //width: min(100vw, 600px);
  /* @media (max-width: 600px) {
    width: 100vw;
    height: calc(var(--vh, 1vh) * 100);
  } */
`;

const BackgroundImgContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: -1;

  user-select: none;
  -webkit-user-drag: none;
  pointer-events: none;
  touch-action: none;
`;

const BackgroundImg = styled.img`
  width: min(100vw, 600px);
  height: auto;
  object-fit: contain;
  z-index: -1;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
  width: min(100vw, 600px);
  margin: 0 auto;
`;
