import React from 'react';
import styled from 'styled-components';

interface ReviewBarItemProps {
  item: ReviewItem;
  max: number;
}

export interface ReviewItem {
  icon: string;
  label: string;
  value: number;
}

export const ReviewBarItem: React.FC<ReviewBarItemProps> = ({ item, max }) => {
  const percent = (item.value / max) * 100;

  return (
    <ItemWrapper>
      <Bar percent={percent}>
        <Icon>{item.icon}</Icon>
        <Label value={item.value} percent={percent}>
          {item.label}
        </Label>
        <Value>{item.value}</Value>
      </Bar>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;

const Bar = styled.div<{ percent: number }>`
  flex: 1;
  background-color: #f3f4f6;
  border-radius: 8px;
  position: relative;
  height: 36px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    background-color: rgba(37, 99, 235, ${({ percent }) => percent / 100});
    height: 100%;
    left: 0;
    top: 0;
    width: ${({ percent }) => `${percent}%`};
    border-radius: 8px;
    z-index: 0;
  }
`;

const Icon = styled.div`
  position: absolute;
  width: 24px;
  font-size: 16px;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
`;

const Label = styled.div<{ value: number; percent: number }>`
  position: absolute;
  z-index: 1;
  color: #f9fafb;
  left: 34px;
  top: 50%;
  transform: translateY(-50%);
  white-space: nowrap;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.26px;
  vertical-align: middle;

  color: ${({ percent }) => (percent >= 50 ? '#f9fafb' : '#000000')};
`;

const Value = styled.div`
  position: absolute;
  width: 40px;
  text-align: right;
  font-size: 14px;
  right: 2px;
  top: 50%;
  transform: translateY(-50%);
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.26px;
  text-align: right;
  vertical-align: middle;
`;
