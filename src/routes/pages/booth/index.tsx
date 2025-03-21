import React, { useState } from 'react';
import { BaseLayer } from '../../../components/BottomSheet/BaseLayer';
import { BottomSheet } from '../../../components/BottomSheet/BottomSheet';
import styled from 'styled-components';
import { dateOptions, Option } from '../../../data/options';
import { DateDropDown } from '../../../components/common/DropDown/DateDropDown';

export const Booth = () => {
  const [selectedDate, setSelectedDate] = useState<Option>(dateOptions[0]);

  return (
    <BaseLayer>
      <OptionContainer>
        <DateDropDown selectedDate={selectedDate} setSelectedDate={setSelectedDate} darkMode={false} />
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
