import React from 'react';
import { DropDown } from './DropDown';
import { dateOptions, Option } from '../../../data/options';

interface DateDropDownProps {
  selectedDate?: Option;
  setSelectedDate: (option: Option) => void;
  darkMode: boolean;
  customData?: Option[];
  isLong?: boolean;
}

export const DateDropDown: React.FC<DateDropDownProps> = ({
  selectedDate,
  setSelectedDate,
  darkMode,
  customData,
  isLong,
}) => {
  return (
    <>
      <DropDown
        options={customData ? customData : dateOptions}
        selectedOption={selectedDate}
        setSelectedOption={setSelectedDate}
        logoSrc={darkMode ? '/images/common/dateDark.webp' : '/images/common/date.webp'}
        isLong={isLong}
      />
    </>
  );
};
