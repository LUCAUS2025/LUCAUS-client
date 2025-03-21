import React, { useState } from 'react';
import { BaseLayer } from '../../../components/BottomSheet/BaseLayer';
import { BottomSheet } from '../../../components/BottomSheet/BottomSheet';
import styled from 'styled-components';
import { dateOptions, Option, placeOptions } from '../../../data/options';
import { DateDropDown } from '../../../components/common/DropDown/DateDropDown';
import { PlaceDropDown } from '../../../components/common/DropDown/PlaceDropDown';

export const Booth = () => {
  const [selectedDate, setSelectedDate] = useState<Option>(dateOptions[0]);
  const [selectedPlace, setSelectedPlace] = useState<Option>(placeOptions[0]);

  return (
    <BaseLayer>
      <OptionContainer>
        <DateDropDown selectedDate={selectedDate} setSelectedDate={setSelectedDate} darkMode={false} />
        <PlaceDropDown selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace} />
      </OptionContainer>
      <BottomSheet />
    </BaseLayer>
  );
};

const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  float: left;
`;
