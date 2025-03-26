import React from 'react';
import styled from 'styled-components';
import { bottomSheetBaseStyle } from '../../styles/bottomSheetStyles';
import { BottomSheetHeader } from './BottomSheetHeader';

interface StaticBottomSheetProps<T> {
  size: 'small' | 'middle' | 'large';
  ContentComponent: React.ComponentType<T>;
  componentProps: T;
  isBottomSheetHeader: boolean;
  overlapFooter: boolean;
}

export const StaticBottomSheet = <T extends object>({
  size,
  ContentComponent,
  componentProps,
  isBottomSheetHeader,
  overlapFooter,
}: StaticBottomSheetProps<T>) => {
  return (
    <Wrapper size={size} overlapFooter={overlapFooter}>
      {isBottomSheetHeader && <BottomSheetHeader />}
      <ContentWrapper>
        <ContentComponent {...componentProps} />
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ size: 'small' | 'middle' | 'large'; overlapFooter: boolean }>`
  ${bottomSheetBaseStyle};
  bottom: ${({ overlapFooter }) => (overlapFooter ? '0px' : '60px')};
  //top: ${({ size }) => (size === 'large' ? '33%' : '65%')};
  //height: ${({ size }) => (size === 'large' ? '80vh' : '60vh')};
  ${({ size }) => {
    switch (size) {
      case 'small':
        return `
          top: 58%;
        `;
      case 'middle':
        return `
          top: 56%;
        `;
      case 'large':
        return `
          top: 33%;
        `;
      default:
        return '';
    }
  }}
  z-index: 10;
  display: flex;
  flex-direction: column;
  //overflow: auto;
`;

const ContentWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  min-height: 0;
`;
