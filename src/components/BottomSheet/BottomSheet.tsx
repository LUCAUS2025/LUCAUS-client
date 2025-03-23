import React from 'react';
import { BottomSheetHeader } from './BottomSheetHeader';
import styled from 'styled-components';
import { BOTTOM_SHEET_HEIGHT } from './BottomSheetOption';
import { motion } from 'framer-motion';
import { Content } from './Content';
import useBottomSheet from './useBottomSheet';
import { CommonItem } from '../../data/boothFood';
import { bottomSheetBaseStyle } from '../../styles/bottomSheetStyles';

interface BottomSheetProps {
  title: string;
  description: string;
  data: CommonItem[];
  setSelectedItem: (item: CommonItem | null) => void;
}

export const BottomSheet: React.FC<BottomSheetProps> = ({ title, description, data, setSelectedItem }) => {
  const { sheet, content } = useBottomSheet();

  return (
    <Wrapper ref={sheet}>
      <BottomSheetHeader />
      <BottomSheetContent ref={content}>
        <Content theTitle={title} theDescription={description} data={data} setSelectedItem={setSelectedItem} />
      </BottomSheetContent>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  ${bottomSheetBaseStyle};
  top: calc(100% - ${window.innerHeight * 0.4}px);
  height: 100vh;
`;

const BottomSheetContent = styled.div`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;
