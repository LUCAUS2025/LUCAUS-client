import React from 'react';
import { BottomSheetHeader } from '../layout/BottomSheetHeader';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ItemListContent } from '../innerContent/ItemListContent';
import useBottomSheet from '../useBottomSheet';
import { CommonItem } from '../../../data/boothFood';
import { bottomSheetBaseStyle } from '../../../styles/bottomSheetStyles';

interface BottomSheetProps {
  title?: string;
  description?: string;
  data?: CommonItem[];
  setSelectedItem: (item: CommonItem | null) => void;
}

export const BasicBottomSheet: React.FC<BottomSheetProps> = ({ title, description, data, setSelectedItem }) => {
  const { sheet, content } = useBottomSheet();

  return (
    <Wrapper ref={sheet}>
      <BottomSheetHeader />
      <BottomSheetContent ref={content}>
        <ItemListContent theTitle={title} theDescription={description} data={data} setSelectedItem={setSelectedItem} />
      </BottomSheetContent>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  ${bottomSheetBaseStyle};
  //top: calc(100% - ${window.innerHeight * 0.4}px);
  top: calc(100% - ${window.innerHeight * 0.4}px);
  position: fixed;
  bottom: 100px;
  //max-height: calc(100vh - 60px);
  height: ${window.innerHeight * 0.9}px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const BottomSheetContent = styled.div`
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`;
