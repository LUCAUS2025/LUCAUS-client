import React from 'react';
import styled from 'styled-components';
import { CommonItem } from '../../../data/boothFood';
import { keywordBaseStyle } from '../../../styles/keyword';

interface ContentProps {
  theTitle?: string;
  theDescription?: string;
  data?: CommonItem[];
  setSelectedItem: (item: CommonItem | null) => void;
}

export const ItemListContent: React.FC<ContentProps> = ({ theTitle, theDescription, data, setSelectedItem }) => {
  return (
    <Wrapper>
      <TitleContainer>
        <Title>{theTitle}</Title>
        <Description>{theDescription}</Description>
        <List>
          {data?.map((item) => (
            <Item key={item.id} onClick={() => setSelectedItem(item)}>
              <ItemContent>
                <ItemId>#{item.id}</ItemId>
                <ItemTextContainer>
                  <ItemTitle>{item.title}</ItemTitle>
                  {item.description && <ItemDescription>{item.description}</ItemDescription>}
                  <ItemKeywords>
                    {item.keywords.map((key, index) => (
                      <Keyword key={index}>#{key}</Keyword>
                    ))}
                  </ItemKeywords>
                </ItemTextContainer>
                <RecommendContainer>
                  <RecommendNum>{item.recommendCount}</RecommendNum>
                  <RecommendIcon src="images/common/thumbsUp.webp" />
                </RecommendContainer>
              </ItemContent>
            </Item>
          ))}
        </List>
      </TitleContainer>
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
const List = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20vh;
`;
const Item = styled.div`
  display: flex;
  flex-direction: row;
`;
const ItemContent = styled.div`
  padding: 12px 16px;
  display: flex;
  flex-direction: row;
  gap: 12px;
  width: 100%;
`;
const ItemId = styled.div`
  font-size: 16px;
  font-weight: 600;
`;
const ItemTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
`;
const ItemDescription = styled.div`
  margin-bottom: 4px;
  font-size: 12px;
`;
const ItemKeywords = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;
const Keyword = styled.div`
  ${keywordBaseStyle}
`;
const ItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;
const RecommendContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  justify-self: flex-end;
`;
const RecommendNum = styled.div`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 10px;
  line-height: 150%;
  letter-spacing: -0.26px;
  color: #364153;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 16px;
  margin-top: 1px;
`;
const RecommendIcon = styled.img`
  width: 16px;
  height: 16px;
`;
