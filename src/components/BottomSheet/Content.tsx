import React from 'react';
import styled from 'styled-components';
import { BoothItem, FoodTruckItem } from '../../data/boothFood';

interface ContentProps {
  theTitle: string;
  theDescription: string;
  data: BoothItem[] | FoodTruckItem[];
}

export const Content: React.FC<ContentProps> = ({ theTitle, theDescription, data }) => {
  return (
    <Wrapper>
      <TitleContainer>
        <Title>{theTitle}</Title>
        <Description>{theDescription}</Description>
        <List>
          {data?.map((item) => (
            <Item key={item.id}>
              <ItemId>#{item.id}</ItemId>
              <ItemTextContainer>
                <ItemTitle>{item.title}</ItemTitle>
                {'description' in item && <ItemDescription>{item.description}</ItemDescription>}
                <ItemKeywords>
                  {item.keywords.map((key, index) => (
                    <Keyword key={index}>#{key}</Keyword>
                  ))}
                </ItemKeywords>
              </ItemTextContainer>
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
  padding: 16px;
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
  padding: 4px;
`;
const Item = styled.div`
  padding: 12px 16px;
  display: flex;
  flex-direction: row;
  gap: 12px;
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
`;
const ItemKeywords = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;
const Keyword = styled.div`
  background-color: #f3f4f6;
  color: #1447e6;
  padding: 2px 4px;
  border-radius: 8px;
  font-size: 12px;
`;
const ItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
