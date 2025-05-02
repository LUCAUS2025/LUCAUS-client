import React from 'react';
import { DropDown } from './DropDown';
import { itemsOptions, lostdateOptions, Option } from '../../../data/options';

interface LostitemDropDownProps {
  selectedItem: Option;
  setSelectedItem: (option: Option) => void;
  darkMode: boolean;
}

export const LostitemDropDown: React.FC<LostitemDropDownProps> = ({ selectedItem, setSelectedItem, darkMode }) => {
  return (
    <>
      <DropDown
        options={itemsOptions}
        selectedOption={selectedItem}
        setSelectedOption={setSelectedItem}
        logoSrc={darkMode ? '/images/common/dateDark.webp' : '/images/common/date.webp'}
      />
    </>
  );
};

interface DateDropDownProps {
  selectedDate: Option;
  setSelectedDate: (option: Option) => void;
  darkMode: boolean;
  customData?: Option[];
}

export const LostDateDropDown: React.FC<DateDropDownProps> = ({ selectedDate, setSelectedDate, darkMode, customData }) => {
  return (
    <>
      <DropDown
        options={customData ? customData : lostdateOptions}
        selectedOption={selectedDate}
        setSelectedOption={setSelectedDate}
        logoSrc={darkMode ? '/images/common/dateDark.webp' : '/images/common/date.webp'}
      />
    </>
  );
};
