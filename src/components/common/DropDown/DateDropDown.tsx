import React from 'react';
import { DropDown } from './DropDown';

interface DateDropDownProps {
  dates: string[];
  selectedDate: string;
  setSelectedDate: (option: string) => void;
  darkMode: boolean;
}

export const DateDropDown: React.FC<DateDropDownProps> = ({ dates, selectedDate, setSelectedDate, darkMode }) => {
  return (
    <>
      <DropDown
        options={dates}
        selectedOption={selectedDate}
        setSelectedOption={setSelectedDate}
        logoSrc={darkMode ? 'images/common/dateDark.webp' : 'images/common/date.webp'}
      />
    </>
  );
};
