// 모달 백그라운드와 기본 틀까지만 제공
// child node로 세부 내용 전달

import React, { ReactNode } from 'react';
import { styled } from 'styled-components';

interface ModalProps {
  isShort: boolean;
  children: ReactNode;
}

const Modal = ({ isShort, children }: ModalProps) => {
  return (
    <Wrapper>
      <ModalBox isShort={isShort}>{children}</ModalBox>
    </Wrapper>
  );
};

export default Modal;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); // 오버레이
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div<{
  isShort: boolean;
}>`
  background-color: white;
  border-radius: 12px;
  width: 318px;
  height: ${({ isShort }) => (isShort ? '254px' : '417')};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  overflow: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
`;
