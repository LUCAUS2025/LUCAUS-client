import React, { useEffect, useState } from 'react';
import { BottomSheetHeader } from '../layout/BottomSheetHeader';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { ItemListContent } from '../innerContent/ItemListContent';
import useBottomSheet from '../useBottomSheet';
import { BoothOrFoodTruckItem } from '../../../data/boothFood';
import { bottomSheetBaseStyle } from '../../../styles/bottomSheetStyles';
import {
  mediaAboveDesktop,
  mediaBig,
  mediaLargePad,
  mediaLarggestPad,
  mediaMedium,
  mediaMediumPad,
  mediaSmall,
} from '../../../styles/responsive';
import { Option } from '../../../data/options';

interface BottomSheetProps {
  title?: string;
  description?: string;
  data?: BoothOrFoodTruckItem[];
  setSelectedItem?: (item: BoothOrFoodTruckItem | null) => void;
  selectedPlace?: Option;
  type?: string;
}

export const BasicBottomSheet: React.FC<BottomSheetProps> = ({
  title,
  description,
  data,
  setSelectedItem,
  selectedPlace,
  type,
}) => {
  const { sheet, content } = useBottomSheet();
  const sheetHeight = typeof window !== 'undefined' ? window.innerHeight : 800;

  return (
    <Wrapper ref={sheet} $sheetHeight={sheetHeight}>
      <BottomSheetHeader />
      <BottomSheetContent ref={content}>
        <ItemListContent
          theTitle={title}
          theDescription={description}
          data={data}
          setSelectedItem={setSelectedItem}
          selectedPlace={selectedPlace}
          type={type}
        />
      </BottomSheetContent>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)<{ $sheetHeight: number }>`
  ${bottomSheetBaseStyle};
  //top: calc(100% - ${window.innerHeight * 0.4}px);
  //top: calc(100% - ${window.innerHeight * 0.53}px);
  position: fixed;
  //bottom: 100px;
  max-height: calc(100vh - 60px);
  height: ${window.innerHeight}px;
  //height: ${({ $sheetHeight }) => `${$sheetHeight - 60}px`};
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  //overflow: hidden;

  top: ${({ $sheetHeight }) => `calc(100% - ${$sheetHeight * 0.53}px)`};
  //bottom: 0;

  ${({ $sheetHeight }) => css`
    ${mediaSmall(`
      top: calc(100% - ${$sheetHeight * 0.45}px);
    `)}

    ${mediaMedium(`
      top: calc(100% - ${$sheetHeight * 0.48}px);
    `)}

    top: calc(100% - ${$sheetHeight * 0.52}px);

    ${mediaBig(`
      top: calc(100% - ${$sheetHeight * 0.52}px);
    `)}

    ${mediaMediumPad(`
      top: calc(100% - ${$sheetHeight * 0.49}px);
    `)}

    ${mediaLargePad(`
      top: calc(100% - ${$sheetHeight * 0.4}px);
    `)}

    ${mediaLarggestPad(`
      top: calc(100% - ${$sheetHeight * 0.3}px);
    `)}

    ${mediaAboveDesktop(`
      top: calc(100% - ${$sheetHeight * 0.24}px);
    `)}
  `}
`;

const BottomSheetContent = styled.div`
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  flex: 1;
  //height: 100vh;
`;
