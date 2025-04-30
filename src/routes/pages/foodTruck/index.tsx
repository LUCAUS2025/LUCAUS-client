import React, { useEffect, useState } from 'react';
import { BaseLayer } from '../../../components/BottomSheet/layout/BaseLayer';
import { DateDropDown } from '../../../components/common/DropDown/DateDropDown';
import { PlaceDropDown } from '../../../components/common/DropDown/PlaceDropDown';
import { BasicBottomSheet } from '../../../components/BottomSheet/variants/BasicBottomSheet';
import { dateOptions, Option, placeOptions } from '../../../data/options';
import { BoothOrFoodTruckItem, FoodTruckItem } from '../../../data/boothFood';
import styled from 'styled-components';
import { GoBackButton } from '../../../components/common/GoBackButton';
import { StaticBottomSheet } from '../../../components/BottomSheet/variants/StaticBottomSheet';
import { ItemPreviewContent } from '../../../components/BottomSheet/innerContent/ItemPreviewContent';

export const FoodTruck = () => {
  const [selectedDate, setSelectedDate] = useState<Option>(dateOptions[0]);
  const [selectedPlace, setSelectedPlace] = useState<Option>(placeOptions[0]);
  const [selectedItem, setSelectedItem] = useState<BoothOrFoodTruckItem | null>(null);

  return (
    <BaseLayer>
      {!selectedItem && (
        <>
          <OptionContainer>
            <DateDropDown selectedDate={selectedDate} setSelectedDate={setSelectedDate} darkMode={false} />
            <PlaceDropDown selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace} />
          </OptionContainer>
          <BasicBottomSheet
            title={'푸드트럭 지도'}
            description={'매일 10시부터 19시, 맛의 향연을 즐겨보세요!'}
            data={[]}
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
