import React from 'react';
import { DropDown } from './DropDown';
import { dateOptions, Option } from '../../../data/options';

interface DateDropDownProps {
  selectedDate: Option;
  setSelectedDate: (option: Option) => void;
  darkMode: boolean;
}

export const DateDropDown: React.FC<DateDropDownProps> = ({ selectedDate, setSelectedDate, darkMode }) => {
  return (
    <>
      <DropDown
        options={dateOptions}
        selectedOption={selectedDate}
        setSelectedOption={setSelectedDate}
        logoSrc={darkMode ? 'images/common/dateDark.webp' : 'images/common/date.webp'}
      />
    </>
  );
};
