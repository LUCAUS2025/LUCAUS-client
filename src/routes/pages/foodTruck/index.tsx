import React, { useState } from 'react';
import { BaseLayer } from '../../../components/BottomSheet/BaseLayer';
import { DateDropDown } from '../../../components/common/DropDown/DateDropDown';
import { PlaceDropDown } from '../../../components/common/DropDown/PlaceDropDown';
import { BottomSheet } from '../../../components/BottomSheet/BottomSheet';
import { dateOptions, Option, placeOptions } from '../../../data/options';
import { foodTruckDescription, FoodTruckItem, foodTruckTitle } from '../../../data/boothFood';
import styled from 'styled-components';

export const FoodTruck = () => {
  const [selectedDate, setSelectedDate] = useState<Option>(dateOptions[0]);
  const [selectedPlace, setSelectedPlace] = useState<Option>(placeOptions[0]);
  const tempFoodTruckData: FoodTruckItem[] = [
    { id: 1, title: '오픈 더 치킨', keywords: ['츄러스', '해시브라운'] },
    { id: 2, title: '오픈 더 치킨', keywords: ['츄러스', '해시브라운'] },
    { id: 3, title: '오픈 더 치킨', keywords: ['츄러스', '해시브라운'] },
    { id: 4, title: '오픈 더 치킨', keywords: ['츄러스', '해시브라운'] },
    { id: 5, title: '오픈 더 치킨', keywords: ['츄러스', '해시브라운'] },
    { id: 6, title: '오픈 더 치킨', keywords: ['츄러스', '해시브라운'] },
    { id: 7, title: '오픈 더 치킨', keywords: ['츄러스', '해시브라운'] },
    { id: 8, title: '오픈 더 치킨', keywords: ['츄러스', '해시브라운'] },
    { id: 9, title: '오픈 더 치킨', keywords: ['츄러스', '해시브라운'] },
    { id: 10, title: '오픈 더 치킨', keywords: ['츄러스', '해시브라운'] },
  ];

  return (
    <BaseLayer>
      <OptionContainer>
        <DateDropDown selectedDate={selectedDate} setSelectedDate={setSelectedDate} darkMode={false} />
        <PlaceDropDown selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace} />
      </OptionContainer>
      <BottomSheet title={foodTruckTitle} description={foodTruckDescription} data={tempFoodTruckData} />
    </BaseLayer>
  );
};

const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  left: 16px;
  top: 20px;
  position: absolute;
`;
