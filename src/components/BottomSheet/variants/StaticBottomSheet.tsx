import React from 'react';
import styled, { css } from 'styled-components';
import { bottomSheetBaseStyle } from '../../../styles/bottomSheetStyles';
import { BottomSheetHeader } from '../layout/BottomSheetHeader';
import {
  mediaAboveDesktop,
  mediaBig,
  mediaLargePad,
  mediaLarggestPad,
  mediaMediumPad,
  mediaSmall,
} from '../../../styles/responsive';

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
  // *** 아래 size 반응형 필요
  ${({ size }) => {
    switch (size) {
      case 'small':
        return smallSizeStyle;
      case 'middle':
        return middleSizeStyle;
      case 'large':
        return largeSizeStyle;
      default:
        return '';
    }
  }}
  z-index: 9;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  min-height: 0;
`;

const smallSizeStyle = css`
  top: 54%;
  ${mediaSmall`
    top: 59%;
  `}

  ${mediaBig`
    top: 56%;
  `}

  ${mediaLargePad`
    top: 58%;
  `}

  ${mediaLarggestPad`
    top: 60%;
  `}
`;

const middleSizeStyle = css`
  top: 52%;

  ${mediaBig`
    top: 58%;
  `}

  ${mediaSmall`
    top: 48%;
  `}
`;

const largeSizeStyle = css`
  top: 29%;

  ${mediaSmall`
    top: 27%;
  `}

  ${mediaBig`
    top: 30%;
  `}

  ${mediaMediumPad`
    top: 34%;
  `}

  ${mediaLargePad`
    top: 38%;
  `}

  ${mediaLarggestPad`
    top: 41%;
  `}

  ${mediaAboveDesktop`
    top: 42%;
  `}
`;
