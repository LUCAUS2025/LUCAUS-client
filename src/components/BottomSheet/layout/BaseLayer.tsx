import React, { ReactNode, useEffect } from 'react';
import styled from 'styled-components';

interface BaseLayerProps {
  children: ReactNode;
  backgroundImgSrc?: string;
}

export const BaseLayer: React.FC<BaseLayerProps> = ({ children, backgroundImgSrc }) => {
  useEffect(() => {
    console.log(backgroundImgSrc);
  }, [backgroundImgSrc]);

  return <Wrapper backgroundImgSrc={backgroundImgSrc}>{children}</Wrapper>;
};

const Wrapper = styled.div<{ backgroundImgSrc?: string }>`
  position: relative;
  background-image: ${({ backgroundImgSrc }) => (backgroundImgSrc ? `url(${backgroundImgSrc})` : 'none')};
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
