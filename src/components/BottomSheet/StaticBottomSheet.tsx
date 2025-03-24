import React from 'react';
import styled from 'styled-components';
import { bottomSheetBaseStyle } from '../../styles/bottomSheetStyles';
import { BottomSheetHeader } from './BottomSheetHeader';

interface StaticBottomSheetProps<T> {
  size: 'small' | 'large';
  ContentComponent: React.ComponentType<T>;
  componentProps: T;
  isBottomSheetHeader: boolean;
}

export const StaticBottomSheet = <T extends object>({
  size,
  ContentComponent,
  componentProps,
  isBottomSheetHeader,
}: StaticBottomSheetProps<T>) => {
  return (
    <Wrapper size={size}>
      {isBottomSheetHeader && <BottomSheetHeader />}
      <ContentComponent {...componentProps} />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ size: 'small' | 'large' }>`
  ${bottomSheetBaseStyle};
  top: ${({ size }) => (size === 'large' ? '30%' : '65%')};
  height: ${({ size }) => (size === 'large' ? '80vh' : '60vh')};
  z-index: 10;
`;
