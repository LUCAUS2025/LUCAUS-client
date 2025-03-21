import React, { useState } from 'react';
import { BaseLayer } from '../../../components/BottomSheet/BaseLayer';
import { BottomSheet } from '../../../components/BottomSheet/BottomSheet';
import styled from 'styled-components';
import { dateOptions, Option, placeOptions } from '../../../data/options';
import { DateDropDown } from '../../../components/common/DropDown/DateDropDown';
import { PlaceDropDown } from '../../../components/common/DropDown/PlaceDropDown';
import { boothDescription, BoothItem, boothTitle } from '../../../data/boothFood';

export const Booth = () => {
  const [selectedDate, setSelectedDate] = useState<Option>(dateOptions[0]);
  const [selectedPlace, setSelectedPlace] = useState<Option>(placeOptions[0]);
  const tempBoothData: BoothItem[] = [
    { id: 1, title: '배리어 프리존 안내', description: '배리어 프리존 안내', keywords: ['배리어', '프리존'] },
    { id: 2, title: '배리어 프리존 안내', description: '배리어 프리존 안내', keywords: ['배리어', '프리존'] },
    { id: 3, title: '배리어 프리존 안내', description: '배리어 프리존 안내', keywords: ['배리어', '프리존'] },
    { id: 4, title: '배리어 프리존 안내', description: '배리어 프리존 안내', keywords: ['배리어', '프리존'] },
  ];

  return (
    <BaseLayer>
      <OptionContainer>
        <DateDropDown selectedDate={selectedDate} setSelectedDate={setSelectedDate} darkMode={false} />
        <PlaceDropDown selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace} />
      </OptionContainer>
      <BottomSheet title={boothTitle} description={boothDescription} data={tempBoothData} />
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
