import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CommonItem } from '../../data/boothFood';
import { keywordBaseStyle } from '../../styles/keyword';

interface ContentProps {
  theTitle: string;
  theDescription: string;
  data: CommonItem[];
  setSelectedItem: (item: CommonItem | null) => void;
}

export const Content: React.FC<ContentProps> = ({ theTitle, theDescription, data, setSelectedItem }) => {
  return (
    <Wrapper>
      <TitleContainer>
        <Title>{theTitle}</Title>
        <Description>{theDescription}</Description>
        <List>
          {data?.map((item) => (
            <Item key={item.id} onClick={() => setSelectedItem(item)}>
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
  padding-bottom: 20vh;
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
`;
