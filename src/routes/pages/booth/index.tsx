import React, { useState } from 'react';
import { BaseLayer } from '../../../components/BottomSheet/BaseLayer';
import { BottomSheet } from '../../../components/BottomSheet/BottomSheet';
import styled from 'styled-components';
import { dates } from '../../../data/dates';
import { DateDropDown } from '../../../components/common/DropDown/DateDropDown';

export const Booth = () => {
  const [selectedDate, setSelectedDate] = useState<string>(dates[0]);

  return (
    <BaseLayer>
      <OptionContainer>
        <DateDropDown dates={dates} selectedDate={selectedDate} setSelectedDate={setSelectedDate} darkMode={false} />
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
