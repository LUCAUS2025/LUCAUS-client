import React from 'react';
import styled from 'styled-components';

interface GoBackButtonProps {
  onClick?: () => void;
}

export const GoBackButton: React.FC<GoBackButtonProps> = ({ onClick }) => {
  return (
    <Button onClick={() => onClick?.()}>
      <Icon src="/images/common/back.webp" alt="닫기" />
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff99;
  width: 36px;
  height: 36px;
  border-radius: 100px;
  border: none;
  cursor: pointer;
  backdrop-filter: blur(4px);
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
`;
