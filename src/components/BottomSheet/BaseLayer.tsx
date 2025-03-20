import React, { ReactNode } from 'react';

interface BaseLayerProps {
  children: ReactNode;
}

export const BaseLayer: React.FC<BaseLayerProps> = ({ children }) => {
  return <div>{children}</div>;
};
