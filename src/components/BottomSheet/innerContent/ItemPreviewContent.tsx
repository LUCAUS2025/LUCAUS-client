import React from 'react';
import { BoothOrFoodTruckItem } from '../../../data/boothFood';
import styled from 'styled-components';
import { keywordBaseStyle } from '../../../styles/keyword';
import { useNavigate } from 'react-router-dom';

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
    } else if (item.type === 'foodTruck') {
      navigate(`/foodTruck/${item.dayBoothNum}`, { state: { selectedDate } });
    }
  };

  return (
    <Wrapper>
      <TitleContainer>
        <Title>
          #{item.dayBoothNum}&nbsp;
          {item.name}
        </Title>
        {item.type === 'booth' && <Description>{item.info}</Description>}
      </TitleContainer>
      <ItemKeywords>
        {item.type === 'booth' && item.categories.map((key, idx) => <Keyword key={idx}>#{key}</Keyword>)}
        {item.type === 'foodTruck' && item.representMenu.map((key, idx) => <Keyword key={idx}>#{key}</Keyword>)}
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
  padding: 12px 20px;

  /* 스크롤 막기 */
  overflow-y: hidden;
  overscroll-behavior: none;
  -webkit-overflow-scrolling: none;
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
const Description = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #6a7282;
`;
const ItemKeywords = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;
const Keyword = styled.div`
  ${keywordBaseStyle}
`;
const ButtonContainer = styled.div`
  margin-top: 8px;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 12px;
`;
const DetailButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  color: #f9fafb;
  font-size: 14px;
  font-weight: 400;
  background-color: #1447e6;
  border-radius: 12px;
  width: 100%;
`;
const CloseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  color: #6a7282;
  font-size: 14px;
  font-weight: 400;
  border-radius: 12px;
  background-color: #d1d5dc;
  width: 100%;
`;
