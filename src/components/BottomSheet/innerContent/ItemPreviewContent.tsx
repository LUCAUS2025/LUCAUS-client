import React from 'react';
import { BoothOrFoodTruckItem } from '../../../data/boothFood';
import styled from 'styled-components';
import { keywordBaseStyle } from '../../../styles/keyword';
import { useNavigate } from 'react-router-dom';
import { mediaBig, mediaSmall, mediaSmall_title } from '../../../styles/responsive';
import { truncateTo20, truncateTo35 } from '../../../utils/truncate';

interface ItemPreviewContentProps {
  item: BoothOrFoodTruckItem;
  onClose: () => void;
  selectedDate: number;
}

export const ItemPreviewContent: React.FC<ItemPreviewContentProps> = ({ item, onClose, selectedDate }) => {
  const navigate = useNavigate();
  const goDetail = () => {
    if (item.type === 'booth') {
      navigate(`/booth/${item.dayBoothNum}`, { state: { selectedDate } });
    }
  };

  return (
    <Wrapper>
      <TitleContainer>
        <Title>#{item.dayBoothNum}</Title>
        <Title>{item.name.length > 20 ? truncateTo20(item.name) : item.name}</Title>
      </TitleContainer>
      {item.type === 'booth' && (
        <Description>{item.owner.length > 35 ? truncateTo35(item.owner) : item.owner}</Description>
      )}
      <ItemKeywords>
        {item.type === 'booth' && item.categories.map((key, idx) => <Keyword key={idx}>#{key}</Keyword>)}
      </ItemKeywords>
      <ButtonContainer>
        <DetailButton onClick={() => goDetail()}>부스 상세보기</DetailButton>
        <CloseButton onClick={() => onClose()}>닫기</CloseButton>
      </ButtonContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  padding: 0px 20px;

  /* 스크롤 막기 */
  overflow-y: hidden;
  overscroll-behavior: none;
  -webkit-overflow-scrolling: none;

  ${mediaSmall`
    gap: 7px;
    padding: 0px 20px;
  `}
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  ${mediaSmall`
    gap: 6px;
  `}
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;

  ${mediaSmall_title}
`;
const Description = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #6a7282;

  ${mediaSmall`
    font-size: 11px;
  `}
`;
const ItemKeywords = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  flex-wrap: wrap;
`;
const Keyword = styled.div`
  ${keywordBaseStyle}
  ${mediaSmall`
    font-size: 11px;
  `}
`;
const ButtonContainer = styled.div`
  margin-top: 8px;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 12px;

  ${mediaSmall`
    gap: 7.5px;
    flex-direction: row;
  `}
`;
const DetailButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  color: #f9fafb;
  font-size: 14px;
  font-weight: 400;
  background-color: #1447e6;
  border-radius: 12px;
  width: 100%;
  ${mediaSmall`
    font-size: 13px;
    height: 37px;
    order: 2;
  `}
`;
const CloseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  color: #6a7282;
  font-size: 14px;
  font-weight: 400;
  border-radius: 12px;
  background-color: #d1d5dc;
  width: 100%;

  ${mediaSmall`
    font-size: 13px;
    height: 37px;
    justify-self: flex-start;
  `}
`;
