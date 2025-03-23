import React from 'react';
import { CommonItem } from '../../data/boothFood';
import styled from 'styled-components';
import { keywordBaseStyle } from '../../styles/keyword';

interface ItemPreviewContentProps {
  item: CommonItem;
  onClose: () => void;
}

export const ItemPreviewContent: React.FC<ItemPreviewContentProps> = ({ item, onClose }) => {
  return (
    <Wrapper>
      <TitleContainer>
        <Title>
          #{item.id}&nbsp;
          {item.title}
        </Title>
        {'description' in item && <Description>{item.description}</Description>}
      </TitleContainer>
      <ItemKeywords>
        {item.keywords.map((key, idx) => (
          <Keyword key={idx}>#{key}</Keyword>
        ))}
      </ItemKeywords>
      <ButtonContainer>
        <DetailButton>부스 상세보기</DetailButton>
        <CloseButton onClick={() => onClose()}>닫기</CloseButton>
      </ButtonContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px 20px;
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
`;
