import React, { useState } from 'react';
import { BaseLayer } from '../../../components/BottomSheet/layout/BaseLayer';
import { DateDropDown } from '../../../components/common/DropDown/DateDropDown';
import { PlaceDropDown } from '../../../components/common/DropDown/PlaceDropDown';
import { BasicBottomSheet } from '../../../components/BottomSheet/variants/BasicBottomSheet';
import { dateOptions, Option, placeOptions } from '../../../data/options';
import { CommonItem, foodTruckDescription, FoodTruckItem, foodTruckTitle } from '../../../data/boothFood';
import styled from 'styled-components';
import { GoBackButton } from '../../../components/common/GoBackButton';
import { StaticBottomSheet } from '../../../components/BottomSheet/variants/StaticBottomSheet';
import { ItemPreviewContent } from '../../../components/BottomSheet/innerContent/ItemPreviewContent';

export const FoodTruck = () => {
  const [selectedDate, setSelectedDate] = useState<Option>(dateOptions[0]);
  const [selectedPlace, setSelectedPlace] = useState<Option>(placeOptions[0]);
  const [selectedItem, setSelectedItem] = useState<CommonItem | null>(null);

  const tempFoodTruckData: FoodTruckItem[] = [
    { id: 1, title: '오픈 더 치킨', keywords: ['츄러스', '해시브라운'], type: 'foodTruck', recommendCount: 323 },
    { id: 2, title: '오픈 더 치킨', keywords: ['츄러스', '해시브라운'], type: 'foodTruck', recommendCount: 323 },
    { id: 3, title: '오픈 더 치킨', keywords: ['츄러스', '해시브라운'], type: 'foodTruck', recommendCount: 323 },
    { id: 4, title: '오픈 더 치킨', keywords: ['츄러스', '해시브라운'], type: 'foodTruck', recommendCount: 323 },
    { id: 5, title: '오픈 더 치킨', keywords: ['츄러스', '해시브라운'], type: 'foodTruck', recommendCount: 323 },
    { id: 6, title: '오픈 더 치킨', keywords: ['츄러스', '해시브라운'], type: 'foodTruck', recommendCount: 323 },
    { id: 7, title: '오픈 더 치킨', keywords: ['츄러스', '해시브라운'], type: 'foodTruck', recommendCount: 323 },
    { id: 8, title: '오픈 더 치킨', keywords: ['츄러스', '해시브라운'], type: 'foodTruck', recommendCount: 323 },
    { id: 9, title: '오픈 더 치킨', keywords: ['츄러스', '해시브라운'], type: 'foodTruck', recommendCount: 323 },
    { id: 10, title: '오픈 더 치킨', keywords: ['츄러스', '해시브라운'], type: 'foodTruck', recommendCount: 323 },
  ];

  return (
    <BaseLayer>
      {!selectedItem && (
        <>
          <OptionContainer>
            <DateDropDown selectedDate={selectedDate} setSelectedDate={setSelectedDate} darkMode={false} />
            <PlaceDropDown selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace} />
          </OptionContainer>
          <BasicBottomSheet
            title={foodTruckTitle}
            description={foodTruckDescription}
            data={tempFoodTruckData}
            setSelectedItem={setSelectedItem}
          />
        </>
      )}
      {selectedItem && (
        <>
          <GoBackButtonContainer>
            <GoBackButton onClick={() => setSelectedItem(null)} />
          </GoBackButtonContainer>
          <StaticBottomSheet
            size={'small'}
            ContentComponent={ItemPreviewContent}
            componentProps={{
              item: selectedItem,
              onClose: () => setSelectedItem(null),
            }}
            isBottomSheetHeader={true}
            overlapFooter={false}
          />
        </>
      )}
    </BaseLayer>
  );
};

export default FoodTruck;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  left: 10px;
  top: 20px;
  position: absolute;
`;

const GoBackButtonContainer = styled.div`
  position: absolute;
  left: 7px;
  top: 20px;
`;
