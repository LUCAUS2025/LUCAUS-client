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
              <ItemId>{item.id}</ItemId>
              <ItemTextContainer>
                <ItemTitle>{item.title}</ItemTitle>
                {'description' in item && <ItemDescription>{item.description}</ItemDescription>}
                <ItemKeywords>
                  {item.keywords.map((key, index) => (
                    <Keyword key={index}>{key}</Keyword>
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

const Wrapper = styled.div``;
const TitleContainer = styled.div``;
const Title = styled.div``;
const Description = styled.div``;
const List = styled.div``;
const Item = styled.div``;
const ItemId = styled.div``;
const ItemTitle = styled.div``;
const ItemDescription = styled.div``;
const ItemKeywords = styled.div``;
const Keyword = styled.div``;
const ItemTextContainer = styled.div``;
