import React from 'react';
import { BottomSheetHeader } from './BottomSheetHeader';
import styled from 'styled-components';
import { BOTTOM_SHEET_HEIGHT } from './BottomSheetOption';
import { motion } from 'framer-motion';
import { Content } from './Content';
import useBottomSheet from './useBottomSheet';
import { CommonItem } from '../../data/boothFood';

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
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 60px;
  z-index: 1;
  top: calc(100% - ${window.innerHeight * 0.4}px);
  left: 0;
  right: 0;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: #fafafa;
  height: ${BOTTOM_SHEET_HEIGHT}px;
  transition: transform 300ms ease-out;

  width: min(100vw, 600px); // 화면 너비에 맞추면서 최대 600px로 제한
  height: 100vh; // 웹 뷰
  margin: 0 auto;

  @media (max-width: 600px) {
    width: 100vw;
    //height: calc(var(--vh, 1vh) * 100);
  }
`;

const BottomSheetContent = styled.div`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;
