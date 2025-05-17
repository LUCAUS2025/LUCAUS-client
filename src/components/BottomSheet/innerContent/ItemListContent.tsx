import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { BoothItem, BoothOrFoodTruckItem, FoodTruckItem } from '../../../data/boothFood';
import { keywordBaseStyle } from '../../../styles/keyword';
import { mediaSmall, mediaSmall_subTitle, mediaSmall_title } from '../../../styles/responsive';
import { mapLocationToPlaceBooth, Option } from '../../../data/options';
import { useNavigate } from 'react-router-dom';

interface ContentProps {
  theTitle?: string;
  theDescription?: string;
  data?: BoothOrFoodTruckItem[];
  setSelectedItem?: (item: BoothOrFoodTruckItem | null) => void;
  selectedPlace?: Option;
  type?: string;
}

export const ItemListContent: React.FC<ContentProps> = ({
  theTitle,
  theDescription,
  data,
  setSelectedItem,
  selectedPlace,
  type,
}) => {
  const navigate = useNavigate();
  const boothsByDate = data?.filter((item): item is BoothItem => item.type === 'booth');
  const foodTruckList = data?.filter((item): item is FoodTruckItem => item.type === 'foodTruck');
  const [boothsByDatePlace, setBoothsByDatePlace] = useState<BoothItem[]>();
  const [selectedDate, setSelectedDate] = useState<number>(19);
  const listContentRef = useRef<HTMLDivElement>(null);
  const sheetHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
  //const [foodTruckByDatePlace, setFoodTruckByDatePlace] = useState<FoodTruckItem[]>();

  useEffect(() => {
    if (type === 'booth') {
      const filteredData = boothsByDate?.filter(
        (item) => mapLocationToPlaceBooth(item.location) === selectedPlace?.value,
      );
      setBoothsByDatePlace(filteredData);
    }
  }, [selectedPlace, data]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (listContentRef.current) {
      listContentRef.current.scrollTop = 0;
    }
  }, [selectedDate, selectedPlace]);

  return (
    <Wrapper>
      <TitleContainer>
        <Title>{theTitle}</Title>
        <Description>{theDescription}</Description>
      </TitleContainer>
      {/* 부스 리스트 */}
      {boothsByDatePlace && boothsByDatePlace.length > 0 && type === 'booth' && (
        <List ref={listContentRef} $sheetHeight={sheetHeight}>
          {boothsByDatePlace?.map((item) => (
            <Item key={`${item.type}-${selectedDate}-item.dayBoothNum`}>
              <ItemContent>
                <ItemId onClick={() => setSelectedItem!(item)}>#{item.dayBoothNum}</ItemId>
                <ItemTextContainer onClick={() => setSelectedItem!(item)}>
                  <ItemTitle>{item.name}</ItemTitle>
                  <ItemDescription>{item.owner}</ItemDescription>
                  <ItemKeywords>
                    {item.categories.map((key, index) => (
                      <Keyword key={index}>#{key}</Keyword>
                    ))}
                  </ItemKeywords>
                </ItemTextContainer>
                <RecommendContainer>
                  <RecommendNum>{item.recommendNum ?? 0}</RecommendNum>
                  <RecommendIcon src="images/common/thumbsUp.webp" />
                </RecommendContainer>
              </ItemContent>
            </Item>
          ))}
          <VoidSpace />
        </List>
      )}
      {(!boothsByDatePlace || boothsByDatePlace?.length === 0) && type === 'booth' && (
        <Info>운영중인 부스가 없습니다.</Info>
      )}
      {/* 푸드트럭 리스트 */}
      {foodTruckList && type === 'foodTruck' && (
        <List $sheetHeight={sheetHeight}>
          {foodTruckList?.map((item) => (
            <Item key={item.dayBoothNum}>
              <ItemContent>
                <ItemTextContainer onClick={() => navigate(`/foodTruck/${item?.dayBoothNum}`, { state: selectedDate })}>
                  <ItemTitle>{item.name}</ItemTitle>
                  <ItemKeywords>
                    {item.representMenu.map((key, index) => (
                      <Keyword key={index}>#{key}</Keyword>
                    ))}
                  </ItemKeywords>
                </ItemTextContainer>
                <RecommendContainer>
                  <RecommendNum>{item.recommendNum ?? 0}</RecommendNum>
                  <RecommendIcon src="images/common/thumbsUp.webp" />
                </RecommendContainer>
              </ItemContent>
            </Item>
          ))}
        </List>
      )}
      {(!foodTruckList || foodTruckList?.length === 0) && type === 'foodTruck' && (
        <Info>운영중인 푸드트럭이 없습니다.</Info>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  //padding: 12px 0px;
  height: 100vh;
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0px 16px;
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
`;
const List = styled.div<{ $sheetHeight: number }>`
  display: flex;
  flex-direction: column;
  //padding-bottom: 20vh;
`;
const Item = styled.div`
  display: flex;
  flex-direction: row;
  padding: 12px 20px;

  &:hover {
    background: #e7f1ff;
  }
`;
const ItemContent = styled.div`
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

  ${mediaSmall_subTitle}
`;
const ItemDescription = styled.div`
  margin-bottom: 4px;
  font-size: 12px;
  color: #6a7282;
`;
const ItemKeywords = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  flex-wrap: wrap;
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

  ${mediaSmall`
    width: 14px;
    height: 14px;
  `}
`;

const Info = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
  padding-bottom: 60vh;
  color: #6a7282;
`;

const VoidSpace = styled.div`
  height: 205px;
`;
