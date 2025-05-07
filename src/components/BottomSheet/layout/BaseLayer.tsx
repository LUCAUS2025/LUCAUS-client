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
      {backgroundImgSrc && <BackgroundImg src={backgroundImgSrc} alt="background" />}
      <Content>{children}</Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  overflow: hidden;
  z-index: 0;
`;

const BackgroundImg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  object-fit: contain;
  z-index: -1;
  //padding-top: 50px;

  user-select: none;
  -webkit-user-drag: none;
  pointer-events: none;
  touch-action: none;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
`;
