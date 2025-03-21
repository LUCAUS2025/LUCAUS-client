import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface BaseLayerProps {
  children: ReactNode;
}

export const BaseLayer: React.FC<BaseLayerProps> = ({ children }) => {
  return <div>{children}</div>;
};
